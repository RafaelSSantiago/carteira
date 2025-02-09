import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { ICreateUserUseCase } from "../../application/usecases/createuser.usecase";

const router = Router();

const userCase = new ICreateUserUseCase();
const userController = new UserController(userCase);

router.post("/", (req, res) => {
  const body = req.body;
  const user = userController.createUser(body);
});

export default router