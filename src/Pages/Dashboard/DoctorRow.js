import React from 'react';
import toast from 'react-hot-toast';

const DoctorRow = ({doctor,index,refetch}) => {
    const {name,img,specialty,email} = doctor
    
    const handleDelete = async(email) =>{
        const deleteConfirm = window.confirm('Are your sure Delete!!')

        if(deleteConfirm){
            fetch(`http://localhost:5000/doctor/${email}`,{
            method:"DELETE",
            headers:{
                "authorization":`bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success(`Doctor ${name} is deleted`)
                refetch()
            }
        })
        }
    }
    return (
        <tr>
        <th>{index + 1}</th>
        <td><div className="avatar">
  <div className="w-16 rounded">
    <img src={img} alt={name} />
  </div>
</div></td>
        <td>{name}</td>
        <td>{specialty}</td>
        <td><button  onClick={()=> handleDelete(email) } className="btn btn-sm btn-error">Delete</button></td>
      </tr>
    );
};

export default DoctorRow;