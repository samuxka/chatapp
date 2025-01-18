import express from "express"
import * as authController from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/signup", authController.signup)
router.post("/login", authController.login)
router.post("/logout", authController.logout)

router.put("/update-profile", protectRoute, authController.updateProfile)

router.get("/check", protectRoute, authController.checkAuth)

export default router