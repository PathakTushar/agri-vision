import { University } from "../models/university.js";

export const getUniversity = async (req, res) => {
    try {
        const {country} = req.query
        let query = {}

        if(country){
            query["country"] = { $regex: new RegExp(country, 'i') };
        }
        const universities = await University.find(query);
        res.status(200).json({
            success: true,
            universities
        });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving universities", error });
    }
}

export const createUniversity = async (req, res) => {
    try {
        const { name, program, location, image, country } = req.body;

        const newUniversity = new University({
            name,
            program,
            location,
            image,
            country
        });

        const savedUniversity = await newUniversity.save();
        res.status(201).json({
            success: true,
            university: savedUniversity
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating university", error });
    }
};
