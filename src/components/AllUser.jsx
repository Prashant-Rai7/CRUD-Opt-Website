import { useEffect,useState } from "react";

import {Table, TableHead, TableRow, TableCell , TableBody, styled, Button} from "@mui/material";

import {getUser, delete_user_api} from '../services/api'

import {Link} from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
    background: #000;
    & > th{
        color: #fff;
        font-size: 20px;
    }
`;

const TBody = styled(TableRow)`
    & > td{
        font-size: 18px;
    }
`;

const AllUser = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        getUsersDetails();
    }, [])

    const getUsersDetails = async () => {
        let response = await getUser();
        console.log(response);
        setUsers(response.data);
    }

    const delete_user_data = async (id) => {
        await delete_user_api(id);
        getUsersDetails();
    }

    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TBody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:15}} onClick={() => delete_user_data(user.id)}>Delete</Button>
                                <Button variant="contained" color="secondary" component={Link} to={`/edit/${user.id}`} >Edit</Button>
                            </TableCell>
                            
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;