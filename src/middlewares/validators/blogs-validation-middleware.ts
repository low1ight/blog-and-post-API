import {body} from "express-validator";
import {fieldErrorMessages} from "./err-messages/err-messages";



export const BlogsValidationMiddleware = [

    body('name')
        .trim()
        .exists().withMessage(fieldErrorMessages.dontExist)
        .isString().withMessage(fieldErrorMessages.wrongType('string'))
        .isLength({ min: 1 }).withMessage(fieldErrorMessages.tooShort(1))
        .isLength({ max: 15 }).withMessage(fieldErrorMessages.tooLong(15))
    ,


    body('description').exists().
        trim()
        .exists().withMessage(fieldErrorMessages.dontExist)
        .isString().withMessage(fieldErrorMessages.wrongType('string'))
        .isLength({ min: 1 }).withMessage(fieldErrorMessages.tooShort(1))
        .isLength({ max: 500 }).withMessage(fieldErrorMessages.tooLong(500)),


    body('websiteUrl').exists()
        .exists().withMessage(fieldErrorMessages.dontExist)
        .isString().withMessage(fieldErrorMessages.wrongType('string'))
        .isLength({ max: 100 }).withMessage(fieldErrorMessages.tooLong(100))
        .matches('^https://([a-zA-Z0-9_-]+\\.)+[a-zA-Z0-9_-]+(\\/[a-zA-Z0-9_-]+)*\\/?$'),
]




