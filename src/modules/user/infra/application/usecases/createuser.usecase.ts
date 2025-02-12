import { User } from "../../../domain/entities/user";
import { IUserRepository } from "../../../domain/repositories/userRepository";
import { CreateUserUseCase } from "../../../domain/usecases/create/createUser.usecase";
import { CreateUserDto } from "../../http/controllers/dtos/createuser.dto";
import nanoid from "nanoid";

export class ICreateUserUseCase implements CreateUserUseCase {
  // constructor(private readonly userRepository: IUserRepository) {}
  async execute(user: CreateUserDto): Promise<User> {

    const userCreated = new User(
      nanoid.nanoid(),
      user.name,
      user.email,
      user.cpf,
      user.cellPhone,
      user.birthDate,
      user.address,
      ""
    );
    return Promise.resolve(console.log(`ok`)) as any;
  }
}
