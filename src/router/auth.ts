import { Router } from 'express';
const routerAuth = Router();

    routerAuth.get('/hola', (req, res)=>{
        res.send({
            "saludo":"HOla Mundo"
        });
    });

module.exports =  routerAuth;