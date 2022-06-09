import axios from "axios"

export default async function getData(userID) {
    const { data: user } = await axios.get("https://jsonplaceholder.typicode.com/users/" + userID)
    const { data: post } = await axios.get("https://jsonplaceholder.typicode.com/posts/" + userID)

    user["posts"] = post
    return user
}


