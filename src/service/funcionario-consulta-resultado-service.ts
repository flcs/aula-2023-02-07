import {FuncionarioInformaResultadoUsecase} from "src/usecases/funcionario-informa-resultado-usecase" ;

export class FuncionarioInformaResultadoService {
  private requests: FuncionarioInformaResultadoUsecase[] = [];

  constructor() {}

  public addRequest(request: FuncionarioInformaResultadoUsecase): void {
    this.requests.push(request);
  }

  public findWork(id: number): void {
    const request = this.requests.find(r => r.id === id);
    if (!request) {
      throw new Error('Request not found');
    }
    if (request.id !== null) {
      request = request.id;
    }
    
  }

  public getRequests(): FuncionarioInformaResultadoUsecase[] {
    return this.requests;
  }
}