
import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category:{
        type:String,
        required:true,
    }
})

const ProductData = mongoose.model("ProductData",productSchema);

export default ProductData;