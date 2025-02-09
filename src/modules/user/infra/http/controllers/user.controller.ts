import { CreateUserUseCase } from "../../../domain/usecases/create/createUser.usecase";

export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async createUser(request: any): Promise<any> {
    const payload = {} as any;
    this.createUserUseCase.execute(payload);
  }
}
