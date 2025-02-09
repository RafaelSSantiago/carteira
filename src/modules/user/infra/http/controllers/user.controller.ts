import { User } from "../../../domain/entities/user";
import { UserService } from "../routes/user.service";
import { HttpRequest, IControllerUser } from "../../../../../controllers/interfaces/contoller";

export class UserController implements IControllerUser {
  constructor(private readonly userService: UserService) {}

  createUser(req: HttpRequest) {
    const payload = {
      name: req.body.name,
      email: req.body.email,
      cpf: req.body.cpf,
      cellPhone: req.body.cellPhone,
      birthDate: req.body.birthDate,
      address: req.body.address,
    };

    this.userService.createUser(payload);
  }
}
