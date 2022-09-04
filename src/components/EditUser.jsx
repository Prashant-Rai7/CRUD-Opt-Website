import {useState, useEffect} from 'react';

import {FormGroup, FormControl, InputLabel, Input, Typography, Button, styled} from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, edituserapi } from '../services/api';


const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {

        margin-top: 20px;
    }
`

const initialValue = {
    name: "",
    username: "",
    email: "",
    phone: ""
}


const EditUser = () => {

    const [user, setUser] = useState(initialValue);
    const navigate = useNavigate();
    const { id }  = useParams();

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        let response = await getUsers(id)
        // console.log(response)
        setUser(response.data)
    }

    const onValueChange = (e)  => {
        // console.log(e.target.name,e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value})
        console.log(user)

    }

    const EditUserDetails = async () => {
        await edituserapi(user, id);
        navigate('/all');
    }

    return(

        <Container>

            <Typography variant="h4">Edit User</Typography>

            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
            
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>

            <FormControl>
            <Button onClick={() => EditUserDetails()} variant="contained">Update</Button>
            </FormControl>

        </Container>
    )
}

export default EditUser;