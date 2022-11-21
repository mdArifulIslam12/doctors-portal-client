import React from "react";
import toast from "react-hot-toast";

const DeleteComfirmModal = ({deletingDoctor,refetch,setDeletingDoctor}) => {
    const {name,email} = deletingDoctor
    const handleDelete = async(email) =>{

        if(email){
            fetch(`https://young-bayou-33287.herokuapp.com/doctor/${email}`,{
            method:"DELETE",
            headers:{
                "authorization":`bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res =>res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success(`Doctor ${name} is deleted`)
                setDeletingDoctor(null)
                refetch()
            }
        })
        }
    }
  return (
    <div>
      <input type="checkbox" id="delete-comfirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete {name}!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
          <button  onClick={()=> handleDelete(email) } className="btn btn-sm btn-error">Delete</button>
            <label htmlFor="delete-comfirm-modal" className="btn btn-sm">
              Cancle
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteComfirmModal;
