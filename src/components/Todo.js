import React, { useState } from 'react'
import '../components/common.css';
import { tableData } from './Data';
import Form from './Form';
function Todo() {
    const[val,setVal] = useState(tableData);
    const [showForm, setShowForm] = useState(false);
    const [editData, setEditData] = useState(null);
    const [nodata, setNodata] = useState('No data');
    const [success, setSuccess] = useState("");
    const [showtodo, setShowtodo] = useState(true);
    const handleClick = (elem) =>{
        setShowForm(true);
        setShowtodo(false);
        setEditData(elem)
    }

//Delete
const handleDelete = (index) =>{
    const deleteItem = val.filter((item,i)=>{
        return i !== index;
    })
    
    setVal(deleteItem)
   setSuccess('Successfully Deleted')
   setTimeout(() => {
    setSuccess('')
   }, 2000);
}
  return (
    <>
    {showtodo && <section className='mainContainer'>       
        <h1>CRED REACT APP</h1>
        
        <table cellPadding='0' cellPadding='0'>
            <tr>
                <th>
                    Sr.N
                </th>
                <th>
                    Name
                </th>
                <th>
                    Age
                </th>
                <th>
                    Remark
                </th>
                <th>
                    Action
                </th>
               

            </tr>
            {val.map((elem,index)=>{
                return <tr>
                <td>
                    {index + 1}
                </td>
                <td>
                    {elem.name}
                </td>
                <td>
                    {elem.age}
                </td>
                <td>
                    {elem.remark}
                </td>
                 <th>
                    <button onClick={()=> handleClick(elem)}>Edit</button>
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                </th>

            </tr>
            })}
           
        </table>
         {val.length ===0 ? <p className='nodata'>No - data</p> : null}
    </section>}
    {showForm && <Form editData={editData} />}
    {success && <p className='deleteMsg'>{success}</p>}
    </>
  )
}

export default Todo