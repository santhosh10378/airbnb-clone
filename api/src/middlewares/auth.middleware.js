import { createError } from "../utils/createError.js";
import { getUserById } from "../services/user.services.js";
import { verifyToken } from "../utils/tokenUtils.js";

export const verifyAuthToken = async (req, res, next) => {
  console.log("verifyAuthToken started");
  try {
    // Check the Authorization header for the token
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log("authHeader error");
      return next(createError(401, "Authentication token is required"));
    }

    // Extract the token from the Authorization header
    const token = authHeader.split(" ")[1] || req.cookies.authToken;

    if (!token) {
      console.log("token error");
      return next(createError(401, "Authentication token is required"));
    }

    // Verify the token
    const decoded = verifyToken(token);

    // Fetch the user using the decoded userId
    const user = await getUserById(decoded.userId);

    if (!user) {
      return next(createError(401, "User not found"));
    }

    // Attach the user to the request object
    req.user = user;

    next();
  } catch (error) {
    console.log("verifyAuthToken failed error");
    next(createError(401, `Invalid or expired token - ${error.message}`));
  }
};
