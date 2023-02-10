import {body} from "express-validator";
import {fieldErrorMessages} from "./err-messages";
import {isBlogExist} from "../custom/isBlogExist";





export const BlogsValidationMiddleware = [

    body('title')
        .trim()
        .exists().withMessage(fieldErrorMessages.dontExist)
        .isString().withMessage(fieldErrorMessages.wrongType('string'))
        .isLength({ min: 1 }).withMessage(fieldErrorMessages.tooShort(1))
        .isLength({ max: 30 }).withMessage(fieldErrorMessages.tooLong(30)),

    body('shortDescription').exists()
        .trim()
        .exists().withMessage(fieldErrorMessages.dontExist)
        .isString().withMessage(fieldErrorMessages.wrongType('string'))
        .isLength({ min: 1 }).withMessage(fieldErrorMessages.tooShort(1))
        .isLength({ max: 100 }).withMessage(fieldErrorMessages.tooLong(100)),


    body('content').exists()
        .trim()
        .exists().withMessage(fieldErrorMessages.dontExist)
        .isString().withMessage(fieldErrorMessages.wrongType('string'))
        .isLength({ min: 1 }).withMessage(fieldErrorMessages.tooShort(1))
        .isLength({ max: 1000 }).withMessage(fieldErrorMessages.tooLong(1000)),


    body('blogId').exists()
        .exists().withMessage(fieldErrorMessages.dontExist)
        .isString().withMessage(fieldErrorMessages.wrongType('string'))
         .custom(isBlogExist)


]







