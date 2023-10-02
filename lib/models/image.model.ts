import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    cloudinaryPublicId: String,
    userId: String, // Reference to the user who uploaded the image
    description: String,
    timestamp: { type: Date, default: Date.now },
  });
  
  const Image = mongoose.model('Image', imageSchema);
  
  module.exports = Image;