import {GerenteAceitaUseCase} from "src/usecases/gerente-aceita-usecase" ;

export class GerenteAceitaService {
  private requests: GerenteAceitaUseCase[] = [];

  constructor() {}

  public addRequest(request: GerenteAceitaUseCase): void {
    this.requests.push(request);
  }

  public approveRequest(id: number, approver: string): void {
    const request = this.requests.find(r => r.id === id);
    if (!request) {
      throw new Error('Request not found');
    }
    if (approver !== 'gerente') {
      throw new Error('Unauthorized');
    }
    request.status = 'approved';
  }

  public getRequests(): GerenteAceitaUseCase[] {
    return this.requests;
  }
}