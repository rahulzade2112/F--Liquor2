const mongoose = require("mongoose");

const schema =new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
  },

  Category: {
    type: String,
    required: true,
  },

  Name: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  }
}, {
versionKey: false 
});

const PRODUCT_SCHEMA = mongoose.model("PRODUCT", schema);
module.exports = PRODUCT_SCHEMA;