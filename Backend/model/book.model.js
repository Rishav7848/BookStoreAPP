import mongoose from "mongoose";
const bookSchema = mongoose.Schema({
    id:Number,
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Book = mongoose.model("Book", bookSchema);//Book name of collection i.e model of mongoose become collection of DB

export default Book;