import {GerenteAceitaService} from "src/service/gerente-aceita-service"
import {GerenteAceitaUseCase} from "src/usecases/gerente-aceita-usecase" ;
import { Response, Request } from 'express';
import { request } from "http";

export class GerenteAceitaController{

    private requestService: GerenteAceitaService;

    constructor() {
      this.requestService = new GerenteAceitaService();
    }
    gerenteAceitaService = new GerenteAceitaService();

    public approveRequest(req: Request, res: Response): void {
        const id = Number(req.params.id);
       
        try {
          this.requestService.approveRequest(id, 'gerente');
          res.status(200).send({ message: 'Request approved' });
        } catch (e) {
          res.status(400).send({ message: e.message });
        }
      }

      private isAuthorized = (req: Request) => {
        // Lógica para testar se está autorizado
        return true;
      };

    }
   

  