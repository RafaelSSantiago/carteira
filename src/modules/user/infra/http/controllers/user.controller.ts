import { HttpRequest } from "../../../../../shared/infra/protocols/http";
import { CreateUserUseCase } from "../../../domain/usecases/create/createUser.usecase";

export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async createUser(httpRequest: HttpRequest): Promise<any> {
    this.createUserUseCase.execute(httpRequest.body);
  }
}
