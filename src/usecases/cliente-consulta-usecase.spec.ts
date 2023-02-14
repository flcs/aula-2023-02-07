import { ClienteConsultaUseCase } from 'src/usecases/cliente-consulta-usecase';

describe('ClienteConsultaUseCase', () => {
   
    let useCase: ClienteConsultaUseCase;
    beforeEach(() => {
    useCase = new ClienteConsultaUseCase();
    });

    it('should return "approved" if the request was approved', () => {
        const request = { id: 1, num1: '1', num2: '2', status: 'approved' };
        const result = useCase.checkRequestStatus(request);
        expect(result).toBe('approved');
    });

    it('should return "pending" if the request is pending', () => {
        const request = { id: 1, num1: '1', num2: '2', status: 'pending' };
        const result = useCase.checkRequestStatus(request);
        expect(result).toBe('pending');
    });

    it('should return "rejected" if the request was rejected', () => {
        const request = { id: 1, num1: '1', num2: '2', status: 'rejected' };
        const result = useCase.checkRequestStatus(request);
        expect(result).toBe('rejected');
    });

});