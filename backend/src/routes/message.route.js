import express from "express"
import * as msgControl from "../controllers/message.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

router.get("/users", protectRoute, msgControl.getUsersForSidebar)
router.get("/:id", protectRoute, msgControl.getMessages)

router.post("/send/:id", protectRoute, msgControl.sendMessage)

export default router