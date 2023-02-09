import { Request, Response } from "express"
import { Trabalho } from "src/domain/trabalho"
import { Repository } from "src/repository/repository"
import { ClienteSolicitaUsecase } from "src/usecases/solicitacao-usecase"
import { SolicitaController } from "./solicita-controller"


describe('solicita-controller', () => {
    test('deveria ser capaz de solicitar um trabalho', () => {
        // let repoFake: Repository<Trabalho> = {
        //     create: jest.fn(async () => {
        //         return
        //     })
        // }
        let useCaseFake: ClienteSolicitaUsecase = {
            perform: jest.fn(async () => {
                return
            })
        }

        const responseFake: Response = {} as Response
        const requestFake: Request = {
            body: {
                num1: "10",
                num2: "20"
            }
        }
        const sut = SolicitaController(useCaseFake)
        sut.handle(requestFake, responseFake)

        expect(responseFake.status).toBe(200)
    })
})

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