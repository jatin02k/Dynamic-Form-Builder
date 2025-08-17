import mongoose from 'mongoose';

const formFieldSchema = new mongoose.Schema({
    airtableFieldId: {
        type: String,
        required: true,
    },
    label:{
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    conditionalLogic: {
        triggerFieldId: String,
        value: String
    },
});

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    fields: [formFieldSchema],
    airtableBaseId: {
        type: String,
        required: true,
    },
    airtableTableId: {
        type: String,
        required: true,
    },
}, {timestamps: true});

export default mongoose.model('Form', formSchema);
