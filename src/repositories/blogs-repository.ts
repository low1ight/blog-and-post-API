import {genRandomId} from "../utils/generateRandomId";
import {blogsDB, BlogType} from "../db/blog-database";
import {CreateBlogModel} from "../models/CreateBlogModel";
import {UpdateBlogModel} from "../models/UpdateBlogModel";







export const blogRepository = {

    getBlogs() {
        return blogsDB
    },

    getBlogById(id:string) {

        const foundBlog: BlogType | undefined = blogsDB.find(i => i.id === id)
        return foundBlog ? foundBlog : null
    },

    createBlog(newBlogData:CreateBlogModel) {
        const newBlog:BlogType = {id: genRandomId(), ...newBlogData}
        blogsDB.push(newBlog)
        return newBlog
    },

    deleteBlog(id:string) {

        const blogIndex = blogsDB.findIndex(item => item.id === id)

        if(blogIndex === -1) return false

        blogsDB.splice(blogIndex,1)
        return true

    },

    updateBlog(id:string, newBlogData:UpdateBlogModel) {

        const blogIndex = blogsDB.findIndex(item => item.id === id)

        if(blogIndex === -1) return false

        // const updatingBlog:BlogType | undefined = blogsDB.find(item => item.id === id)
        // const updatedBlog = {...updatingBlog,...newBlogData}
        const updatedBlog:BlogType = {id,...newBlogData}
        blogsDB.splice(blogIndex,1,updatedBlog)
        return true
    }

}
