import { FuncionarioConsultaUseCase } from "src/usecases/funcionario-consulta-lista-usecase";

export class FuncionarioConsultaService {
    public consultList(list: Array<any>) {
        console.log("====Consultando lista não processada====")
        list.forEach(element => {
            console.log(element);
        });
    }

    public getListUnprocessed(funcionarioConsulta: FuncionarioConsultaUseCase) {
        
    }
} 