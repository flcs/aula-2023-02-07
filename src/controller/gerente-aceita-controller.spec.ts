import {GerenteAceitaService} from "src/service/gerente-aceita-service"
import {GerenteAceitaController} from "src/controller/gerente-aceita-controller"

describe('GerenteAceitaController', () => {
    let controller: GerenteAceitaController;
    let requestService: GerenteAceitaService;
    
    beforeEach(() => {
    requestService = new GerenteAceitaService();
    controller = new GerenteAceitaController();
    });
}