import express from "express";
import axios from "axios";
import crypto from "crypto";
import User from "../models/User.js";

const router = express.Router();

// Generate PKCE code verifier and challenge
const generateCodeChallenge = (verifier) => {
    const sha256Hash = crypto.createHash("sha256").update(verifier).digest("base64");
    return sha256Hash
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
};

// Route to handle user login
router.get("/airtable", (req, res) => {
    const codeVerifier = crypto.randomBytes(32).toString("hex");
    const codeChallenge = generateCodeChallenge(codeVerifier);

    res.cookie("code_verifier", codeVerifier, { httpOnly: true, secure: true });

    const redirectUrl = `https://airtable.com/oauth2/v1/authorize?client_id=${process.env.AIRTABLE_CLIENT_ID}&redirect_uri=${process.env.AIRTABLE_REDIRECT_URI}&response_type=code&scope=data.records:read%20data.records:write%20schema.bases:read%20user.email:read&state=my_app_state_12345&code_challenge=${codeChallenge}&code_challenge_method=S256`;
    res.redirect(redirectUrl);
});

// Route to handle Airtable OAuth callback
router.get("/airtable/callback", async (req, res) => {
    const code = req.query.code;
    const error = req.query.error;

    if (error) {
        console.error("Airtable OAuth Error:", req.query.error_description);
        return res.redirect("http://localhost:3000/error");
    }

    const codeVerifier = req.cookies.code_verifier;

    try {
        const tokenResponse = await axios.post(
            "https://airtable.com/oauth2/v1/token",
            {
                code: code,
                code_verifier: codeVerifier,
                client_id: process.env.AIRTABLE_CLIENT_ID,
                client_secret: process.env.AIRTABLE_CLIENT_SECRET,
                redirect_uri: process.env.AIRTABLE_REDIRECT_URI,
                grant_type: "authorization_code",
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        const accessToken = tokenResponse.data.access_token;
        const userInfoResponse = await axios.get(
            "https://api.airtable.com/v0/meta/whoami",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        const { id, email, name } = userInfoResponse.data;

        await User.findOneAndUpdate(
            { airtableId: id },
            { name, email, airtableAccessToken: accessToken },
            { upsert: true, new: true }
        );

        res.redirect("http://localhost:3000/dashboard");
    } catch (error) {
        console.error("Error during Airtable OAuth callback:", error);
        res.redirect("http://localhost:3000/error");
    }
});

export default router;