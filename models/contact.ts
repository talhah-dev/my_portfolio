import mongoose, { Document } from "mongoose";

export interface IContact extends Document {
    name: string;
    email: string;
    message?: string
}

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
}, {
    timestamps: true
})

const contactModel = mongoose.models.Contact || mongoose.model("Contact", contactSchema)

export default contactModel;