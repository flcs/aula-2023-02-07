import { v4 } from 'uuid';
import { Funcionario } from '../domain/funcionario';

export class RegistroRepository{
    private pool: Funcionario[];

    constructor() {
        this.pool = [];
    }

    registrar(funcionario: Funcionario){
        if(this.pool.find(f => f.email === funcionario.email)){
            throw 'Funcionário já cadastrado!'
        }
        this.pool.push(funcionario);
        return {
            id: v4(),
            ...funcionario,
            dataDeRegistro: new Date().toISOString(),
            ultimaAtualizacao: new Date().toISOString()
        }
    }
}