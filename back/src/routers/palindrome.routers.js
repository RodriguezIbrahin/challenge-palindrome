import express from "express";
import {
  getPalindrome,
  postPalindrome,
  deletePalindrome,
} from "../controllers/palindrome.controllers.js";

const palindromeRouter = express.Router();

palindromeRouter.get("/", getPalindrome);
palindromeRouter.post("/", postPalindrome);
palindromeRouter.delete("/:id", deletePalindrome);

export default palindromeRouter;
