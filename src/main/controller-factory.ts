import { SolicitaController } from "../controller/solicita-controller";
import { TrabalhoRepo } from "../repository/trabalho-repository";
import { ClienteSolicitaUsecase } from "../usecases/solicitacao-usecase";
import { RegistroController } from "../controller/registro-controller";
import { RegistroUseCase } from "../usecases/registro-use-case";

export function trabalhoControllerFactory(): SolicitaController {
    const repo = new TrabalhoRepo()
    const usecase = new ClienteSolicitaUsecase(repo)
    const controller = new SolicitaController(usecase)
    return controller
}

export class registroControllerFactory {
    static criar(){
        return new RegistroController(new RegistroUseCase());
    }
}