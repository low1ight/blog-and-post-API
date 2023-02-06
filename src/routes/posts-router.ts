import {Router} from "express";

export const postsRouter = Router({})


postsRouter.get('/', (req, res) => {
    res.send('posts')
})