import { Request, Response } from "express";
import { ClienteSolicitaUsecase } from "src/usecases/solicitacao-usecase";

export class SolicitaController {
    usecase
    constructor(usecase: ClienteSolicitaUsecase) {
        this.usecase = usecase
    }
    
    async handle(req: Request, resp: Response): Promise<void> {
        const { num1, num2 } = req.body
        
       const result = this.usecase.perform({num1, num2} as ClienteSolicitaUsecase.Params)
        resp.status(200).json({ status: 'processado'})
    }
}