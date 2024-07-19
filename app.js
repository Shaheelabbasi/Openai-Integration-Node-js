//app.js has all the configuration
import express from "express";
import chatRouter from "./src/Routes/chat.route.js";
const app=express();


app.use(express.json())

app.use("/api/v1",chatRouter)

export default app;