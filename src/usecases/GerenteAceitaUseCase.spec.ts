import { Request, Response, response } from "express";
import { Trabalho } from "../domain/trabalho";

interface UseCase<E> {
    perform(params: any): Promise<void>
}

class AceitaController {
    constructor(private usecase: UseCase<Trabalho>) {
    }
    async handle (req: Request, resp: Response){
        resp.status(200)
    }
}

class AceitaUseCaseFake implements UseCase<Trabalho> {
    perform(params: any): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

describe('Gerente aceita solicitação', () => {
    test('solicitação aceita', () => {
        const usecase = new AceitaUseCaseFake()
        const sut = new AceitaController(usecase)
        const request = {} as Request
        const response = {} as Response

        sut.handle(request, response)
        expect(response.status).toBe(200)
    })
})