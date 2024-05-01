import React from 'react'
import './DeptId.css'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

 const Deptid = () => {
 
  return (
    
   
    <div className='container'>
     <div className='header'>
        <div className='text'>Registration Form</div>
        <div className='underline'></div>
     </div>
     <div className='inputs'>

{/* borderrrrrrrrrr*/}
        <div className='input'>
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Your Id...' />
        </div>
     </div>
     <div className='submit-container'>
        <div className='submit' to = "SignUpStudent.jsx">
            Submit
             </div>

     </div>
    </div>
  )
}
export default Deptid;