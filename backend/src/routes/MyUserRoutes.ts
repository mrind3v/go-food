import express from "express";
import MyUserController from "../controllers/MyUserControllers.js";
//import { jwtCheck, jwtParse } from "../middleware/auth";
//import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// /api/my/user
// router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
// router.post("/", jwtCheck, MyUserController.createCurrentUser);
// router.put(
//   "/",
//   jwtCheck,
//   jwtParse,
//   validateMyUserRequest,
//   MyUserController.updateCurrentUser
// );

router.post("/", MyUserController.createCurrentUser);

export default router;