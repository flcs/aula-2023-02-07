import { Request, Response } from "express";
import { FuncionarioConsultaResultadoUseCase } from "src/usecases/funcionario-consulta-usecase";

export class FuncionarioConsultaResultadoController {
    usecase
    constructor(usecase: FuncionarioConsultaResultadoUseCase) {
        this.usecase = usecase
    }

    async handle(req: Request, resp: Response): Promise<void> {
        const { id } = req.body

       const result = this.usecase.perform(id as FuncionarioConsultaResultadoUseCase.Params)
        resp.status(200).json({ status: 'solicitado'})
    }
}