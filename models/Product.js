const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, require: true, unique: true },
        desc: { type: String, require: true, unique: true },
        img: { type: String, require: true, unique: true },
        categories: { type: Array, },
        size: { type: String, },
        color: { type: String, },
        price: { type: Number, require: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema)