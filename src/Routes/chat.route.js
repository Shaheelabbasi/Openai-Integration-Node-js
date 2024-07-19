import express from "express"
import CreateChat from "../Controllers/createchat.controller.js";
const chatRouter=express.Router();
chatRouter.route("/chat").post(CreateChat)



export default chatRouter;