import React from 'react'
import {Alert} from 'antd'
import { useNavigate } from 'react-router-dom'
import "./SucessPage.css"

const SuccessPage = () => {
   const navigate = useNavigate();
    const handleClose = () =>{
        navigate("/")
    }
  return (
    <div className='success-container'>
         <Alert className='success-alert' onClose={handleClose}
      message="Book Successful"
      description="Hi there, You've Successful booked your ticket kindly check your gmail for more information from us.
      PS: Kindly Click the Cancel button to go back home"
      type="success"
      showIcon
      closable
    />
    </div>
  )
}

export default SuccessPage