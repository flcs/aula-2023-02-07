import { TiposTrabalho } from "./trabalho"

export class GerenteConfirma {
    id: string
    status: TiposTrabalho = undefined

    constructor(id: string) {
        this.id = id
    }

    mudaStatus(novo: TiposTrabalho) {
        this.status = novo
    }
}
