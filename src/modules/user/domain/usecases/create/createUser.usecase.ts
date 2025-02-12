import { CreateUserDto } from "../../../infra/http/controllers/dtos/createuser.dto";
import { User } from "../../entities/user";

export interface CreateUserUseCase {
  execute(user: CreateUserDto): Promise<User>;
}
