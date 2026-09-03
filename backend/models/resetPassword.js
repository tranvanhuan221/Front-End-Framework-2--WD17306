import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ResetPasswordSchema = new mongoose.Schema({
  userId: String,
  resetString: String,
  createdAt: Date,
  exporesAt: Date,
});;

export default mongoose.model("ResetPassword", ResetPasswordSchema);
