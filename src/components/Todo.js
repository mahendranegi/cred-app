import React, { useContext, useState } from 'react'
import '../components/common.css';
import { tableData } from './Data';
import Form from './Form';
import DataContext, { UserContext } from '../context/DataContext';
function Todo() {
    const {user,handleBgm} = useContext(UserContext)
    const[val,setVal] = useState(tableData);
    const [showForm, setShowForm] = useState(false);
    const [editData, setEditData] = useState(null);
    const [nodata, setNodata] = useState();
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
//For update value

const handleUpdate = (updatedData) => {

  const newData = val.map((item) => {
    if (item.id === updatedData.id) {
      return updatedData;
    }
    return item;
  });

  setVal(newData);
  setShowForm(false);
  setShowtodo(true);
};
  return (
    <>
    {showtodo && <section className='mainContainer'>   
        <button className='switchBtn' onClick={handleBgm}>click me</button>    
        <h1>CRUD REACT APP</h1>
        {user}
        <aside>
        <table cellPadding='0' cellPadding='0' align='center'>
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
        </aside>
         {val.length ===0 ? <p className='nodata'>No - data</p> : null}
    </section>}
    {showForm && <Form editData={editData} handleUpdate={handleUpdate}/>}
    {success && <p className='deleteMsg'>{success}</p>}
    </>
  )
}

export default Todo