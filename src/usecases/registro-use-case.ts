import * as joi from 'joi';
import { Funcionario } from '../domain/funcionario';

const schema = joi.object({
    nome: joi.string()
        .min(1)
        .max(30)
        .required(),
    email: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))
        .required()
});

export class RegistroUseCase{
    constructor(){}

    validate(funcionario: Funcionario){
        const result = schema.validate(funcionario);
        if( result.error ){
            throw `${result.error.message}`.replace(/\"/g, '');                
        }
    }
}