import mongoose, { Schema, model } from "mongoose";

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    features: [
        {
            name: {
                type: String,
                required: true,
            },
            included: {
                type: Boolean,
                required: true,
            },
        },
    ],
});

export const Service = mongoose.models.Service || model("Service", serviceSchema);
