import { Service } from "../models/service.js";

export const getService = async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json({
            success: true,
            services
        });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving services", error });
    }
}

export const createService = async (req, res) => {
    try {
        const { name, price, description, features } = req.body;

        const newService = new Service({
            name,
            price,
            description,
            features
        });

        const savedService = await newService.save();
        res.status(201).json({
            success: true,
            service: savedService
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating service", error });
    }
};
