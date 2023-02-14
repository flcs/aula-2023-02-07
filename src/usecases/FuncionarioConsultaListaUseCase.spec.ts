///author: Nícolas Souza
import { FuncionarioConsultaUseCase } from "./funcionario-consulta-lista-usecase";

describe('Funcionario Consulta Lista nao processada', () => { 
    test('', () => { 
        const FuncionarioConsultaRepo = jest.fn();

        const repo = new FuncionarioConsultaRepo();

        const sut =  new FuncionarioConsultaUseCase(repo);
        const params: FuncionarioConsultaUseCase.Params = {
            id: '1',
            list: [ { status: 'unaproved' } ]
        };

        expect(sut.perform(params)).toBe('sucesso');
    }) 
})