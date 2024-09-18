import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/feature.js";
import { errorMiddleware } from "./middlewares/error.js";

import cors from "cors"
import { createUniversity, getUniversity } from "./controllers/university.js";
import { createService, getService } from "./controllers/service.js";
import { createBlog, getBlog } from "./controllers/blog.js";

dotenv.config({
    path: "./.env",
});


const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 8000;

connectDB(mongoURI)

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));
app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
});


app.get("/", (req, res)=>{
    res.send("hello world")
})

app.get("/universities", getUniversity)
app.get("/services", getService)
app.get("/blogs", getBlog)

app.post("/universities", createUniversity)
app.post("/services", createService)
app.post("/blogs", createBlog)

app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});

