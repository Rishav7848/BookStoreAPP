import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();//wait until we get res so we have used asynchronus fun to pause its execution until res is executed
        res.status(200).json(book);//for success status //since we are req from DB so it may take time and may cause error
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};