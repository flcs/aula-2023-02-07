import { RegistroRepository } from "../repository/registro-repository";
import { RegistroUseCase } from "../usecases/registro-use-case";
import { Funcionario } from "../domain/funcionario";

export class RegistroController{

    private repository: RegistroRepository;

    constructor(private registroUseCase: RegistroUseCase){
        this.repository = new RegistroRepository();
    }

    registrar(funcionario: Funcionario) : { [key: string]: any }{
        const startTime = new Date().toISOString();
        try {
        this.registroUseCase.validate(funcionario);
        return {
            ...this.repository.registrar(funcionario),
            statusCode: 200,
            message: `Funcionário ${funcionario.nome} registrado com sucesso!`,
            startTime, 
            finishTime: new Date().toISOString()
        }
        } catch (err){
            return {
                statusCode: 400,
                message: `Não foi possível registrar funcionário!`,
                error: err,
                startTime, 
                finishTime: new Date().toISOString()
            }
        }
    }
}