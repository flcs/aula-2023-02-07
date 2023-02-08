export type TiposTrabalho = undefined | 'solicitado' | 'aceito' | 'reservado'

export class Trabalho {
    id: string
    numero1: string
    numero2: string
    resultado: string = ''
    status: TiposTrabalho = undefined

    constructor(id: string, numero1: string, numero2: string) {
        this.id = id
        this.numero1 = numero1
        this.numero2 = numero2
    }

    mudaStatus(novo: TiposTrabalho) {
        this.status = novo
    }

    opera(): string {
        const n1 = parseInt(this.numero1)
        const n2 = parseInt(this.numero1)
        this.resultado = (n1 + n2).toString()
        return this.resultado
    }
}
