import { Trabalho } from "../domain/trabalho";
import { TrabalhoRepo } from "../repository/trabalho-repository"; 

export class ClienteSolicitaUsecase {
    constructor(private repo: TrabalhoRepo) {}

    async perform(params: ClienteSolicitaUsecase.Params) : 
                Promise<ClienteSolicitaUsecase.Result> {
                    
        const { id, num1, num2 } = params
        const trabalho = new Trabalho(id, num1, num2)
        trabalho.mudaStatus('solicitado')
        const resultado = trabalho.resultado

        try {
            await this.repo.create(trabalho)
        } catch {
            console.log('erro aqui')
        }

        return resultado
    }
}

export namespace ClienteSolicitaUsecase {
    export type Params = {
        id: string
        num1: string
        num2: string
    }
    export type Result = string
}