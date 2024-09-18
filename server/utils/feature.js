import mongoose from "mongoose";

const connectDB = (uri) => {
    mongoose
        .connect(uri, { dbName: "agrivision" })
        .then((data) => console.log(`Connected to DB: ${data.connection.host}`))
        .catch((err) => {
            throw err;
        });
};


export {connectDB}