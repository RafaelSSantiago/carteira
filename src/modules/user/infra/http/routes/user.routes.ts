import { Router, Request, Response } from "express";
import { UserController } from "../controllers/user.controller";
import { ICreateUserUseCase } from "../../application/usecases/createuser.usecase";
import { HttpRequest } from "../../../../../shared/infra/protocols/http";

const router = Router();

const userCase = new ICreateUserUseCase();
const userController = new UserController(userCase);

router.post("/", (req: Request, res: Response) => {

  const body: HttpRequest = {
    body: req.body,
    headers: req.headers,
    params: req.params
  }
  
  const user = userController.createUser(body);
});

export default router