import axios from "axios";

const API_URL = "http://127.0.0.1:3002/users"

export const addUser = async (data) => {
    try {
        return await axios.post(API_URL, data);
    }
    catch (error) {
        console.log("Error While calling addUser api",error.message)
    }
}

export const getUser = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.log("Error while calling user data edit page from edit button i.e, get_user_api",error.message)
    }
}


export const getUsers = async (data) => {
    try {
        return await axios.get(`${API_URL}/${data}`);
    } catch (error) {
        console.log("Error while calling particular user data in input field i.e, get_users_api",error.message)
    }
}

export const edituserapi = async (data, id) => {
    try {
        return await axios.put(`${API_URL}/${id}`,data);
    } catch (error) {
        console.log("Error while Updating Data in edit_user_data_api",error.message)
    }
}

export const delete_user_api = async (id) => {
    try {
        return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log("Error while deleting user in delete_user_api",error.message)
    }
}