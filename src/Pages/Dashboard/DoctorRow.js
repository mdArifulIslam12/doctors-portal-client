import React from 'react';
import toast from 'react-hot-toast';

const DoctorRow = ({doctor,index,refetch,setDeletingDoctor}) => {
    const {name,img,specialty,email} = doctor
    
  
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
        <td>
        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-comfirm-modal" className="btn btn-sm btn-error">
        Delete
      </label>
            
            </td>
      </tr>
    );
};

export default DoctorRow;