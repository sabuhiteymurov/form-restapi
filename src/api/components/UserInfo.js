import { useEffect, useRef, useState } from "react";
import axios from "axios";
import uuid from 'react-uuid';



const UserInfo = ({name, email, title7, id, users, setUsers, setIsChanged})=>{
    const [Name, setName] = useState(name);
    const [Email, setEmail] = useState(email);
    const [Number, setNumber] = useState(title7);
    const nameEl = useRef();
    const emailEl = useRef();
    const numberEl = useRef();

    // useEffect(()=>{

    // },[name,email,phoneNumber])

    const handleDelete = ()=>{
        axios.delete(`http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/users/${id}`,{headers:{'xc-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI'}}).then(()=>setIsChanged(id)).catch((err)=>console.error(err))
        
    }

    const handleUpdate = ()=>{
        nameEl.current.classList.remove('hidden-input');
        emailEl.current.classList.remove('hidden-input');
        numberEl.current.classList.remove('hidden-input');

        if(name !== Name && email !== Email && title7 !== Number){
            axios.put(`http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/users/${id}`,{'name':Name, 'email':Email}, {headers:{'xc-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI'}}).then(()=>setIsChanged(uuid())).catch((err)=>console.error(err))
            setIsChanged(uuid());
        } else if(email !== Email){
            axios.put(`http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/users/${id}`,{'email':Email}, {headers:{'xc-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI'}}).then(()=>setIsChanged(uuid())).catch((err)=>console.error(err))
            setIsChanged(uuid());
        } else if(name !== Name){
            axios.put(`http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/users/${id}`,{'name':Name}, {headers:{'xc-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI'}}).then(()=>setIsChanged(uuid())).catch((err)=>console.error(err))
            setIsChanged(uuid());
        } else if(title7 !== Number){
            axios.put(`http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/users/${id}`,{'title7':Number}, {headers:{'xc-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI'}}).then(()=>setIsChanged(uuid())).catch((err)=>console.error(err))
            setIsChanged(uuid());
        }
    }

    const handleUpdateFormSubmit = (e)=>{
        e.preventDefault();
        // axios.put(`http://172.16.10.132:3574/nc/early_adapters_esxl/api/v1/users/${id}`,{'name':updatedName, 'email':updatedEmail}, {headers:{'xc-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1c2lmLmV5bnVsbGFiZXlsaUBmZXJydW1jYXBpdGFsLmF6IiwiZmlyc3RuYW1lIjpudWxsLCJsYXN0bmFtZSI6bnVsbCwiaWQiOjEsInJvbGVzIjoidXNlciIsImlhdCI6MTY1MjQzNzE1Nn0.pxaIoWn4TxMAZk5vF6DPCaSal9WjmKsQJeJqtugN6FI'}}).then(()=>setIsChanged(uuid())).catch((err)=>console.error(err))

    }

    return(
    <>
        
        <article className="user-info">
            <form className="update-form" onSubmit={(e)=>handleUpdateFormSubmit(e)}>
                <h3>User Details</h3>
                <input ref={nameEl} required value={Name} onChange={(e)=>setName(e.target.value)} className ='form--input hidden-input' type='text' placeholder="Name"></input>
                <input ref={emailEl} required value={Email} onChange={(e)=>setEmail(e.target.value)} className ='form--input hidden-input' type='email' placeholder="Email"></input>
                <input ref={numberEl} value={Number} onChange={(e)=>setNumber(e.target.value)} className ='form--input hidden-input' type='text' placeholder="Phone"></input>
            </form>
            <div className="user-info_buttons">
                <button className="user-info_update" onClick={handleUpdate}>Update</button>
                <button className="user-info_delete" onClick={handleDelete}>Delete</button>
            </div>
        </article>
        
    </>
     
)
}

export default UserInfo;