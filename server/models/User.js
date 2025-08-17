import mongoose from 'mongoose';
import monggoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    airtableId: {
        type: String,
        required: true,
        unique: true
    },
    airtableAccessToken: {
        type: String,
        required: true
    },
    airtableRefreshToken: {
        type: String,
        required: true
    },
});

export default mongoose.model('User', userSchema);