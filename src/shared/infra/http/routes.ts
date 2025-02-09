import { Router } from "express";
import { UserController } from "../../../modules/user/infra/http/controllers/user.controller";

const router = Router();

const userController = router("/user", UserController);

export default router