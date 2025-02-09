import { User } from "../../../domain/entities/user";
import { IUserRepository } from "../../../domain/repositories/userRepository";
import { CreateUserUseCase } from "../../../domain/usecases/create/createUser.usecase";

export class ICreateUserUseCase implements CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}
  execute(user: User): Promise<User> {
    return Promise.resolve(console.log(`ok`)) as any;
  }
}
