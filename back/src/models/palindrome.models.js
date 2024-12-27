import mongoose from "mongoose";

const palindromeSchema = new mongoose.Schema(
  {
    phrase: {
      type: String,
      required: true,
      unique: true,
    },
    isPalindrome: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

palindromeSchema.statics.isPalindrome = function (phrase) {
  const clearPhrase = phrase
    .toLowerCase()
    .replace(/ /g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const isPalindrome = clearPhrase === clearPhrase.split("").reverse().join("");

  return new this({
    phrase,
    isPalindrome,
  });
};

export default mongoose.model("Palindrome", palindromeSchema);
