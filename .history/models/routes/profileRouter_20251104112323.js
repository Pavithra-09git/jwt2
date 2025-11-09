import express from "express"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import rateLimit from "express-rate-limit";
import profiles from "../models/profiles.js";

const router = express.Router()

export default router;