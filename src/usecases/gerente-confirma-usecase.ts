import { GerenteConfirma } from "../domain/gerente-confirma";
import { GerenteConfirmaRepo } from "../repository/gerente-confirma-repository"; 

export class GerenteConfirmaUseCase {
    constructor(private repo: GerenteConfirmaRepo) {}

    async perform(params: GerenteConfirmaUseCase.Params) : 
                Promise<GerenteConfirmaUseCase.Result> {
                    
        const { id } = params
        const trabalho = new GerenteConfirma(id)
        trabalho.mudaStatus('confirmado')

        try {
            await this.repo.update(id, trabalho)
        } catch {
            console.log('Ocorreu um erro ao tentar confirmar solicitação!')
        }

        return 'sucesso'
    }
}

export namespace GerenteConfirmaUseCase {
    export type Params = {
        id: string
    }
    export type Result = string
}