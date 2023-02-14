import { Repository } from "./repository";
import { FuncionarioConsulta } from "../domain/funcionario-consulta";

export class FuncionarioConsultaRepo implements Repository<FuncionarioConsulta>{
    
    findOne(id: string): Promise<FuncionarioConsulta | undefined> {
        throw new Error("Method not implemented.");
    }
    
    findAll(): Promise<FuncionarioConsulta[] | undefined> {
        throw new Error("Method not implemented.");
    }
    
    create(dado: FuncionarioConsulta): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    update(id: string, dado: FuncionarioConsulta): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}