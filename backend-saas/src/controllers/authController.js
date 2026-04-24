import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/userModel.js";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

// Signup
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check existing user
    const existingUser = await findUserByEmail(email);
    if (existingUser.length > 0) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const result = await createUser(name, email, hashedPassword);

    res.status(201).json({
      msg: "User created successfully",
      userId: result.insertId,
    });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    // Find user
    const users = await findUserByEmail(email);
    if (users.length === 0) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const user = users[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user.id);

    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ msg: "Server error" });
  }
};
