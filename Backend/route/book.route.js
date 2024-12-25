import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);//router will execute getBook fun when it gets req from "/" URL

export default router;