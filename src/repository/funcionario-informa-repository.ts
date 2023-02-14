import { Trabalho } from "../domain/trabalho";
import { Repository } from "./repository";

export class FuncionarioInformaResultado implements Repository<Trabalho>{
    lista: Trabalho[] = []

    async findOne(id: string): Promise<Trabalho | undefined> {
        const obj = this.lista.find(obj => obj.id === id)
        return obj
    }
    async findAll(): Promise<Trabalho[] | undefined> {
        return this.lista
    }
    async create(dado: Trabalho): Promise<void> {
        this.lista.push(dado)
    }
    async update(id: string, dado: Trabalho): Promise<void> {
        const index = this.lista.findIndex(obj => obj.id === id)
        this.lista[index] = dado
    }
    async delete(id: string): Promise<void> {
        const index = this.lista.findIndex(obj => obj.id === id)
        this.lista.splice(index)
    }
}