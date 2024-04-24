import { useEffect } from 'react';
import './Users.css';
import UserStore from '../../../store/UserStore';
import { Table } from 'react-bootstrap';

const Users = () => {

    const {AllUsersRequest, AllUsers} = UserStore();

    useEffect(()=>{
        (async()=>{
            await AllUsersRequest();
        } )()
    },[])


    if(AllUsers === null){
        return <h3>Loading...</h3>
    }


    const handleChangeStatus = (e) =>{
        console.log(e.target.value);

    }


    return (
        <section className='bg-white p-5 rounded-4'>
            <h1 className='mb-3'>All Users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Mobile</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       AllUsers.map ( (user, index) =>{
                        return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <select onChange={handleChangeStatus} className="form-select" >
                                        <option selected>{user.status}</option>
                                        <option value="active">active</option>
                                        <option value="suspend">sudpand</option>
                                        <option value="pending">pending</option>
                                    </select>
                                </td>
                                <td>{user.mobile}</td>
                                <td>{user.role}</td>
                                <td> <button className='btn btn-danger'>Delete</button></td>
                            </tr>

                        
                       }) 
                    }



                   
                    
                   
                </tbody>
                </Table>
        </section>
    );
};

export default Users;