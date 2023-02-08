import { SolicitaController } from "../controller/solicita-controller";
import { TrabalhoRepo } from "../repository/trabalho-repository";
import { ClienteSolicitaUsecase } from "../usecases/solicitacao-usecase";

export function trabalhoControllerFactory(): SolicitaController {
    const repo = new TrabalhoRepo()
    const usecase = new ClienteSolicitaUsecase(repo)
    const controller = new SolicitaController(usecase)
    return controller
}