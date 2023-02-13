import {GerenteAceitaService} from "src/service/gerente-aceita-service"
import {GerenteAceitaController} from "src/controller/gerente-aceita-controller"
import {GerenteAceitaUseCase} from "src/usecases/gerente-aceita-usecase" ;

describe('GerenteAceitaController', () => {
    let controller: GerenteAceitaController;
    let requestService: GerenteAceitaService;
    
    beforeEach(() => {
    requestService = new GerenteAceitaService();
    controller = new GerenteAceitaController();
    });

    it('should approve a request', () => {
        const request = new GerenteAceitaUseCase(1, '1', '2', 'pending');
        requestService.addRequest(request);
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn().mockReturnValue({})
        };
        controller.approveRequest({ params: { id: '1' } } as any, res as any);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(requestService.getRequests()[0].status).toBe('approved');
      });

      it('should return 400 if request is not found', () => {
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn().mockReturnValue({})
        };
        controller.approveRequest({ params: { id: '2' } } as any, res as any);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({ message: 'Request not found' });
      });
    

});

    