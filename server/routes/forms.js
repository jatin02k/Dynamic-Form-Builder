import express from 'express';
import Form from '../models/Form.js';

const router = express.Router();
// Route to create a new form
router.post('/', async (req, res) => {
    try {
        const newForm = new Form(req.body);
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(500).json({ message: 'Error saving form', error });
    }
});
// Route to get all forms for a user
router.get('/:id', async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) {
            return res.status(404).json({ message: 'Form not found' });
        }
        res.json(form);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching form', error });
    }
});

export default router;