///author: Nícolas Souza
import { FuncionarioConsultaRepo } from '../repository/funcionario-consulta-repository';

export class FuncionarioConsultaUseCase {
    constructor (private repo: FuncionarioConsultaRepo) {}

    async perform(params: FuncionarioConsultaUseCase.Params) : Promise<FuncionarioConsultaUseCase.Result>
    {
        return 'sucesso'
    }
}

export namespace FuncionarioConsultaUseCase{
    export type Params = {
        id: string,
        list: Array<object>
    }
    export type Result = string
}