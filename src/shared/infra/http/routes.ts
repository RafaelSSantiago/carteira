import { Express } from "express";
import userRouter from "../../../../src/modules/user/infra/http/routes/user.routes";

export default function routes(app: Express) {
  app.use("/user", userRouter);
}
