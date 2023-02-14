import { GerenteAceitaService } from "src/service/gerente-aceita-service";
import { ClienteConsultaController } from "src/controller/cliente-consulta-controller";

describe('Testing ClienteConsultaController', () => {
   
    let controller: ClienteConsultaController;
    let requestService: GerenteAceitaService;
    
    beforeEach(() => {
        requestService = new GerenteAceitaService();
        controller = new ClienteConsultaController(requestService);
    });

    it('should return approved request', () => {
        const request = new GerenteAceitaUseCase(1, '1', '2', 'approved');
        requestService.addRequest(request);
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnValue({})
        };

        controller.checkRequest({ params: { id: '1' } } as any, res as any);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ status: 'approved' });
    });

    it('should return pending request', () => {
        const request = new GerenteAceitaUseCase(1, '1', '2', 'pending');
        requestService.addRequest(request);
       
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnValue({})
        };

        controller.checkRequest({ params: { id: '1' } } as any, res as any);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ status: 'pending' });
    });

    it('should return 404 if request is not found', () => {
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnValue({})
        };
        
        controller.checkRequest({ params: { id: '2' } } as any, res as any);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith({ message: 'Request not found' });
    });
});