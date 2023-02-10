import {Router,Request,Response} from "express";
import {postsRepository} from "../repositories/posts-repository";
import {RequestWithBody, RequestWithParams, RequestWithParamsAndBody} from "../request-types";
import {UriIdParamsModel} from "../models/UriIdParamsModel";
import {CreatePostModel} from "../models/CreatePostModel";
import {UpdatePostModel} from "../models/UpdatePostModel";
import {PostType} from "../db/post-database";
import {BlogsValidationMiddleware} from "../middlewares/validators/err-messages/posts-validation-middleware";
import {inputValidationMiddleware} from "../middlewares/validators/input-validation-middleware";
import {authorizationMiddleware} from "../middlewares/authorization-middleware";


export const postsRouter = Router({})


postsRouter.get('/', (req:Request, res:Response) => {

    res.send(postsRepository.getPosts())

})

postsRouter.get('/:id', (req:RequestWithParams<UriIdParamsModel>, res) => {

    const foundPost = postsRepository.getPostById(req.params.id)

    if(!foundPost) res.send(404)

    res.send(foundPost)

})



postsRouter.post('/',authorizationMiddleware,BlogsValidationMiddleware,inputValidationMiddleware, (req:RequestWithBody<CreatePostModel>, res:Response) => {

    const newPost:PostType | boolean = postsRepository.createPost(req.body)

    if(!newPost) res.send(404)

    res.status(201).send(newPost)

})

postsRouter.put('/:id',authorizationMiddleware,BlogsValidationMiddleware,inputValidationMiddleware, (req:RequestWithParamsAndBody<UriIdParamsModel,UpdatePostModel>, res:Response) => {

    const isPostUpdated:boolean = postsRepository.updatePost(req.params.id,req.body)

    if(!isPostUpdated) res.send(404)

    res.status(204)

})

postsRouter.delete('/:id', (req:RequestWithParams<UriIdParamsModel>, res) => {

    const isPostDeleted:boolean = postsRepository.deletePost(req.params.id)

    if(!isPostDeleted) res.send(404)

    res.send(204)

})