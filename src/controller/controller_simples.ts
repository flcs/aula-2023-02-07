import { Request, Response } from "express";

// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

function controller_get_simples(req: Request, resp: Response): void {
    console.log('chegou no controller do get')
    resp.status(200).json({ ola: 'oi' })
}

function controller_post_simples(req: Request, resp: Response): void {
    resp.status(200).json({ ola: 'oi' })
}

function controller_put_simples(req: Request, resp: Response): void {
    resp.status(200).json({ ola: 'oi' })
}

function controller_patch_simples(req: Request, resp: Response): void {
    resp.status(200).json({ ola: 'oi' })
}

function controller_delete_simples(req: Request, resp: Response): void {
    resp.status(200).json({ ola: 'oi' })
}

export { controller_get_simples, 
    controller_put_simples, 
    controller_post_simples, 
    controller_patch_simples, 
    controller_delete_simples }
