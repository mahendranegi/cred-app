import React, { useState } from 'react'
import '../components/common.css';
function Form({editData,handleUpdate }) {
    console.log(handleUpdate,editData,'handleUpdate')
     const [name, setName] = useState(editData?.name || '');
     const [age, setAge] = useState(editData?.age || '');
     const [remark, setRemark] = useState(editData?.remark || '');
   const submitData = () => {
    const updatedData = {
      ...editData,
      name,
      age,
      remark
    };

    handleUpdate(updatedData);
  };
  return (
    <section className='formData'>
        <h3>Student Form</h3>
        <div>
        <label>Name</label>
        <input placeholder='Enter Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div>
        <label>Age</label>
        <input placeholder='Enter Name' value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        </div>

        <div>
        <label>Remark</label>
        <input placeholder='Enter Name' value={remark} onChange={(e)=>{setRemark(e.target.value)}}/>
        </div>

        <button onClick={submitData}>Submit</button>
    </section>
  )
}

export default Form