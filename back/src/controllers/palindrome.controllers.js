import Palindrome from "../models/palindrome.models.js";

export const getPalindrome = async (_req, res) => {
  try {
    const palindrome = await Palindrome.find().sort({ createdAt: -1 });
    res.status(200).json(palindrome);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const postPalindrome = async (req, res) => {
  try {
    const phrase = Palindrome.isPalindrome(req?.body?.phrase);
    const palindrome = await Palindrome.create(phrase);
    res.status(201).json(palindrome);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deletePalindrome = async (req, res) => {
  try {
    const removePalindrome = await Palindrome.deleteOne({ _id: req.params.id });
    res.status(200).json(removePalindrome);
  } catch (error) {
    res.json({ message: error.message });
  }
};
