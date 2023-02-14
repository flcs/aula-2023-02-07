import { Request, Response } from "express";
import { GerenteAceitaService } from "src/service/gerente-aceita-service";

export class ClienteConsultaController {
    constructor(private requestService: GerenteAceitaService) {}
    
    checkRequest(req: Request, res: Response) {
        const request = this.requestService.getRequestById(req.params.id);
        if (!request) {
            res.status(404).send({ message: 'Request not found' });
            return;
        }
        res.status(200).send({
