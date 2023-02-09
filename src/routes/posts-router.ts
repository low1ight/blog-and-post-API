import {Router,Request,Response} from "express";
import {postsRepository} from "../repositories/posts-repository";
import {RequestWithBody, RequestWithParams, RequestWithParamsAndBody} from "../request-types";
import {UriIdParamsModel} from "../models/UriIdParamsModel";
import {CreatePostModel} from "../models/CreatePostModel";
import {UpdatePostModel} from "../models/UpdatePostModel";
import {PostType} from "../db/post-database";

export const postsRouter = Router({})


postsRouter.get('/', (req:Request, res:Response) => {

    res.send(postsRepository.getPosts())

})

postsRouter.get('/:id', (req:RequestWithParams<UriIdParamsModel>, res) => {

    const foundPost = postsRepository.getPostById(req.params.id)

    if(!foundPost) res.send(404)

    res.send(foundPost)

})



postsRouter.post('/', (req:RequestWithBody<CreatePostModel>, res) => {

    const newPost:PostType | boolean = postsRepository.createPost(req.body)

    if(!newPost) res.send(404)

    res.status(201).send(newPost)

})

postsRouter.put('/:id', (req:RequestWithParamsAndBody<UriIdParamsModel,UpdatePostModel>, res) => {

    const isPostUpdated:boolean = postsRepository.updatePost(req.params.id,req.body)

    if(!isPostUpdated) res.send(404)

    res.status(204)

})

postsRouter.delete('/:id', (req:RequestWithParams<UriIdParamsModel>, res) => {

    const isPostDeleted:boolean = postsRepository.deletePost(req.params.id)

    if(!isPostDeleted) res.send(404)

    res.send(204)

})