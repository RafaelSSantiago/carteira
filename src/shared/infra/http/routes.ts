import { Express, Router } from "express";
import userRouter from "../../../../src/modules/user/infra/http/routes/user.routes";

const router = Router();

router.use("/user", userRouter)

export default router
