import express from "express";
import { 
    getIndex,
    getDetalhes,
    getCadastro,
    getDelete,
    getEditar,
    postCadastro,
    postEditar
} from "../controller/Controllador.js";

export const routers = express.Router();

routers.get('/', getIndex);
routers.get('/detalhes/:id', getDetalhes);
routers.get('/cadastro', getCadastro);
routers.get('/delete/:id', getDelete);
routers.get('/editar/:id' , getEditar)

routers.post('/cadastro' , postCadastro);
routers.post('/editar/:id' ,postEditar)
