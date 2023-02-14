import { Request, Response } from "express";
import { GerenteConfirmaUseCase } from "src/usecases/gerente-confirma-usecase";

export class GerenteConfirmaController {
    usecase
    constructor(usecase: GerenteConfirmaUseCase) {
        this.usecase = usecase
    }
    
    async handle(req: Request, resp: Response): Promise<void> {
        const { id } = req.body
        
       const result = this.usecase.perform(id as GerenteConfirmaUseCase.Params)
        resp.status(200).json({ status: 'processado'})
    }
}