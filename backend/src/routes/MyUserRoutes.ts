import express from "express";
import MyUserController from "../controllers/MyUserControllers.js";
// Uncomment these imports when ready to implement authentication
// import { jwtCheck, jwtParse } from "../middleware/auth.js";
// import { validateMyUserRequest } from "../middleware/validation.js";

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