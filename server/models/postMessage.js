import mongoose from "mongoose";

const postSchema =mongoose.Schema({
  company: String,
  thesis: String,
  ticker: String,
  tags: [String],
  selectedFile: String,
  sharesCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
});

const PostMesage = mongoose.model('PostMessage', postSchema);

export default PostMesage;