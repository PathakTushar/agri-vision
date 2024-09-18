import mongoose, { Schema, model, Types } from "mongoose";

const universitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    program: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
});

export const University = mongoose.models.University || model("University", universitySchema);

