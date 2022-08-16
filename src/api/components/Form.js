import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import { Users } from "./Users"; 
import uuid from 'react-uuid';
import axios from "axios";


const Form = ()=>{
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isChanged, setIsChanged] = useState(false);

    const getUsers = async ()=>{
            setIsLoading(true);
            axios.get('http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/users', {headers:{
                'xc-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI'
            }}).then((res)=>{setUsers(res.data);
                setIsLoading(false);
            });


    }

    useEffect(()=>{
        getUsers()
    },[isChanged]);

    
    


    const handleSubmit = async(e)=>{
        try{
            e.preventDefault();
            await axios.post('http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/users',{'name':name, 'email':email, 'title7':phoneNumber},{
                headers:{
                    'xc-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI'
                },
                
            });
            setName('')
            setEmail('')
            setPhoneNumber('');
            setIsChanged(uuid());

        }
            catch(err){
            console.log(err);
        }

    }

    const handleSearch  = (e)=>{
        
    }

    return(<>
        <form className="form" onSubmit={(e)=>handleSubmit(e)}>
            <h3>New User</h3>
            <input required value={name} onChange={(e)=>setName(e.target.value)} className ='form--input' type='text' placeholder="Name"></input>
            <input required value={email} onChange={(e)=>setEmail(e.target.value)} className ='form--input' type='email' placeholder="Email"></input>
            <input required value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className ='form--input' type='text' placeholder="Phone"></input>
            <button className='form--button' type="submit" >Add user</button>
        </form>
        <div className="labels">
            <p className="labels_text">Name</p>
            <p className="labels_text">Email</p>
            <p className="labels_text">Phone</p>
            <input className="search-user" placeholder="search with name" onChange={(e)=>handleSearch(e)}></input>
        </div>
        {isLoading && <h1>Loading...</h1>}
        { users && <div className="table">
            <div className="table-user-container">
            {users.map((user)=> <UserInfo key={uuid()} {...user} users={users} setUsers={setUsers} setIsChanged={setIsChanged}/>)}
            </div>
            
        </div>}
        
        
    </>
    )
}

export default Form;