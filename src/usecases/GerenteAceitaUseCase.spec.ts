import { Request, Response, response } from "express";
import { SolicitaController } from "src/controller/solicita-controller";
import { Trabalho } from "../domain/trabalho";
import { ClienteSolicitaUsecase } from "./solicitacao-usecase";


describe('SolicitaUsecase', () => {
    test('', () => {
        const repo = jest.fn()

        const sut = new ClienteSolicitaUsecase(repo)
        const params: ClienteSolicitaUsecase.Params = {
            id: "1",
            num1: '20',
            num2: '30'

        }
        expect(sut.perform(params)).toBe('50')
    })
})