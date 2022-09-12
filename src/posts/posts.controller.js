const uuid = require("uuid");

const postDB = [
    {
        "id": "test",
        "title": "Test tittle of a post",
        "content": "Vivamus fringilla mollis sapien, non consectetur metus accumsan at. Suspendisse et imperdiet nunc. Fusce scelerisque in justo sed pretium. Morbi finibus, nunc ac accumsan sagittis, tortor diam luctus justo, sit amet elementum turpis nulla sit amet lorem. Proin sodales, elit eget consequat molestie, felis velit tristique lorem, et porttitor tortor ex vel lectus. Donec varius et massa ut tincidunt. Curabitur eget ex tincidunt, finibus mi a, pretium mi. Nulla gravida magna sed felis volutpat, eget mollis dolor vulputate.",
        "header_image": "https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        "user_id": "uuid of the user",
        "published": true
    },
]

const getAllPosts = () => {
    return postDB;
}

const getPostById = (id) => {
    const data = postDB.filter((item) => item.id === id);
    return data.length ? data[0] : false
}

const getPostByIdLogged = (id, user_id) => {
    const data = postDB.filter((item) => item.id === id && item.user_id === user_id);
    return data.length ? data[0] : false
}

const getPostByUserID = (user_id) => {
    const data = postDB.filter((item) => item.user_id === user_id);
    return data.length ? data : false
}

const createPost = (data) => {
    const newPost = {
        id: uuid.v4(), //required and unique,
        title: data.title, // mandatory
        content: data.content, // mandatory
        header_image: data.header_image ? data.header_image : "",
        user_id: data.user_id, // mandatory and unique
        published: true, // mandatory and by default true
    };
    postDB.push(newPost);
    return newPost;
};

const editPost = (id, data) => {
    const index = postDB.findIndex((post) => post.id === id && post.user_id === data.user_id);
    if (index !== -1) {
        postDB[index] = {
            id: id, //mandatory and unique,
            title: data.title, // mandatory
            content: data.content, // mandatory
            header_image: data.header_image, //mandatory 
            user_id: data.user_id, // mandatory and unique
            published: data.published, // mandatory and by default true
        };
        return postDB[index];
    } else {
        return createPost(data);
    }
}

const deletePost = (id) => {
    const index = postDB.findIndex(post => post.id === id)
    if (index !== -1) {
        postDB.splice(index, 1)
        return true
    } else {
        return false
    }
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    getPostByUserID,
    editPost,
    deletePost,
    getPostByIdLogged
}