import { registroControllerFactory } from "src/main/controller-factory"

const validMock = {
    nome: "mileidy",
    email: "mileidy@gmail.com"
}

const mockWithInvalidName = {
    nome: "",
    email: "mileidy@gmail.com"
}

const mockWithInvalidEmail = {
    nome: "mileidy",
    email: "@gmailcom"
}

const validOutputResponse = {
    "nome": "mileidy",
    email: "mileidy@gmail.com",
    statusCode: 200,
    message: "Funcionário mileidy registrado com sucesso!"
}

const withoutNameOutputReponse = {
    statusCode: 400,
    message: "Não foi possível registrar funcionário!",
    error: "nome is not allowed to be empty"
}

const withoutEmailOutputReponse = {
    statusCode: 400,
    message: "Não foi possível registrar funcionário!",
    error: "email with value @gmailcom fails to match the required pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/"
}

const employeeAlreadyExistsReponse = {
    statusCode: 400,
    error: "Funcionário já cadastrado!",
    message: "Não foi possível registrar funcionário!"
}

describe('Registro Controller Tests', () => {
    test('Giving a valid payload, should create employee', () => {
        const sut = registroControllerFactory.criar();
        const response = sut.registrar(validMock);
        for(const [key, value] of Object.entries(validOutputResponse)){
            expect(value).toBe(response[key]);
        }
    });

    test('Giving a payload with invalid name, should not create employee', () => {
        const sut = registroControllerFactory.criar();
        const response = sut.registrar(mockWithInvalidName);
        for(const [key, value] of Object.entries(withoutNameOutputReponse)){
            expect(value).toBe(response[key]);
        }
    });

    test('Giving a payload with invalid email name, should not create employee', () => {
        const sut = registroControllerFactory.criar();
        const response = sut.registrar(mockWithInvalidEmail);
        for(const [key, value] of Object.entries(withoutEmailOutputReponse)){
            expect(value).toBe(response[key]);
        }
    });

    test('Giving an existent employee, should not create again', () => {
        const sut = registroControllerFactory.criar();
        sut.registrar(validMock)
        const response = sut.registrar(validMock);
        for(const [key, value] of Object.entries(employeeAlreadyExistsReponse)){
            expect(value).toBe(response[key]);
        }
    });
})

