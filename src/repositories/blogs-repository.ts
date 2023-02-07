import {genRandomId} from "../utils/generateRandomId";

type BlogType = {
    id:	string,
    name: string,
    description: string,
    websiteUrl:	string,

}

type CreateBlogModel = {
    name: string,
    description: string,
    websiteUrl:	string,
}



let blogsDB: BlogType[] = [{
    id:	"1",
    name:"Alex's blog",
    description:"my main blog",
    websiteUrl:	"https://www.lipsum.com/",
}]


export const blogRepository = {

    getBlogs() {
        return blogsDB
    },

    // getBlogsById(id:string) {
    //     let foundBlog: BlogType | undefined = blogsDB.find(i => i.id === id)
    //     return foundBlog
    // },

    createPosts(newObjectData:CreateBlogModel) {
        blogsDB.push({id: genRandomId(), ...newObjectData})
    },

}
