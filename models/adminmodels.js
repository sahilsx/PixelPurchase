import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true, // Ensures uniqueness of the email field
    required: true // Makes the email field mandatory
  },
  password: {
    type: String,
    required: true
  }
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;
