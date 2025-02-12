import { User } from "../../modules/user/domain/entities/user";
import { CreateUserDto } from "../../modules/user/infra/http/controllers/dtos/createuser.dto";

export interface UserModule {
  createUser(userData: CreateUserDto): Promise<User>;
}