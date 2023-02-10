import {body} from "express-validator";
import {fieldErrorMessages} from "./err-messages/err-messages";
import {isBlogExist} from "./custom/isBlogExist";


const allPostFieldsArr:string[] = ["title","shortDescription","content","blogId"]
const [title,shortDescription,content,blogId] = allPostFieldsArr

export const PostsValidationMiddleware = [

    body(allPostFieldsArr)
        .exists().withMessage(fieldErrorMessages.dontExist).bail()
        .trim()
        .notEmpty().withMessage(fieldErrorMessages.isEmpty).bail()
        .isString().withMessage(fieldErrorMessages.wrongType('string')).bail(),

    body(title)
        .isLength({ max: 30 }).withMessage(fieldErrorMessages.tooLong(30))
    ,

    body(shortDescription)
        .isLength({ max: 100 }).withMessage(fieldErrorMessages.tooLong(100)),


    body(content)
        .isLength({ max: 1000 }).withMessage(fieldErrorMessages.tooLong(1000)),


    body(blogId)
         .custom(isBlogExist)
]







