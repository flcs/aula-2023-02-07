import { GerenteConfirma } from "../domain/gerente-confirma";
import { Repository } from "./repository";

export class GerenteConfirmaRepo implements Repository<GerenteConfirma>{
    lista: GerenteConfirma[] = []

    async findOne(id: string): Promise<GerenteConfirma | undefined> {
        const obj = this.lista.find(obj => obj.id === id)
        return obj
    }
    async findAll(): Promise<GerenteConfirma[] | undefined> {
        return this.lista
    }
    async create(dado: GerenteConfirma): Promise<void> {
        this.lista.push(dado)
    }
    async update(id: string, dado: GerenteConfirma): Promise<void> {
        const index = this.lista.findIndex(obj => obj.id === id)
        this.lista[index] = dado
    }
    async delete(id: string): Promise<void> {
        const index = this.lista.findIndex(obj => obj.id === id)
        this.lista.splice(index)
    }
}