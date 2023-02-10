import {body} from "express-validator";
import {fieldErrorMessages} from "./err-messages/err-messages";


const allBlogsFieldsArr: string[] = ["name","description","websiteUrl"]
const [ name, description, websiteUrl ] = allBlogsFieldsArr


export const BlogsValidationMiddleware = [

    // body(allBlogsFieldsArr)
    //     .exists().withMessage(fieldErrorMessages.dontExist).bail()
    //     .isString().withMessage(fieldErrorMessages.wrongType('string')).bail()
    //     .trim().notEmpty().withMessage(fieldErrorMessages.isEmpty).bail(),


    body(name)
        .exists().withMessage(fieldErrorMessages.dontExist).bail()
        .isString().withMessage(fieldErrorMessages.wrongType('string')).bail()
        .trim().notEmpty().withMessage(fieldErrorMessages.isEmpty).bail()
        .isLength({ max: 15 }).withMessage(fieldErrorMessages.tooLong(15)),


    body(description)
        .exists().withMessage(fieldErrorMessages.dontExist).bail()
        .isString().withMessage(fieldErrorMessages.wrongType('string')).bail()
        .trim().notEmpty().withMessage(fieldErrorMessages.isEmpty).bail()
        .isLength({ max: 500 }).withMessage(fieldErrorMessages.tooLong(500)),


    body(websiteUrl)
        .exists().withMessage(fieldErrorMessages.dontExist).bail()
        .isString().withMessage(fieldErrorMessages.wrongType('string')).bail()
        .trim().notEmpty().withMessage(fieldErrorMessages.isEmpty).bail()
        .isLength({ max: 100 }).withMessage(fieldErrorMessages.tooLong(100)).bail()
        .matches('^https://([a-zA-Z0-9_-]+\\.)+[a-zA-Z0-9_-]+(\\/[a-zA-Z0-9_-]+)*\\/?$')
        .withMessage(fieldErrorMessages.mustBeURL),
]




