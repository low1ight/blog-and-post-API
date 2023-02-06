import {Router} from "express";

export const testsRouter = Router({})


testsRouter.get('/', (req, res) => {
    res.send('test')
})