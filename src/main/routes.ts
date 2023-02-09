import express, { Request, Response, Router } from "express";
import { controller_delete_simples, controller_get_simples, controller_patch_simples, controller_post_simples, controller_put_simples } from "../controller/controller_simples";
import { trabalhoControllerFactory } from "./controller-factory";

const routes = Router()

routes.get('/get_simples', controller_get_simples)
routes.post('/post_simples', controller_post_simples)
routes.put('/put_simples:id', controller_put_simples)
routes.patch('/patch_simples:id', controller_patch_simples)
routes.delete('/delete_simples:id', controller_delete_simples)

const controller = trabalhoControllerFactory()
routes.post('/solicita', controller.handle
    // (req: Request, resp: Response) => { controller.handle(req, resp) }
)

export { routes }
