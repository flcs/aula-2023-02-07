import { FuncionarioInforma } from "../domain/funcionario-informa-resultado";
import { FuncionarioInformaResultado } from "../repository/funcionario-informa-repository"; 

export class FuncionarioInformaResultadoUsecase {
    constructor(private repo: FuncionarioInformaResultado) {}

    async perform(params: FuncionarioInformaUsecase.Params) : 
                Promise<FuncionarioInformaUsecase.Result> {
                    
        const { id} = params
        const trabalho = new FuncionarioInforma(id)
        trabalho.findOne(id)
        const resultado = trabalho.resultado

        try {
            await this.repo.create(trabalho)
        } catch {
            console.log('erro aqui')
        }

        return resultado
    }
}

export namespace FuncionarioInformaUsecase {
    export type Params = {
        id: string
        num1: string
        num2: string
        status: string
    }
    export type Result = string
}