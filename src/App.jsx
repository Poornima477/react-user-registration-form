
import React, { useState } from 'react';

const App = () => {

  const [FormData, setFormData] = useState({
    fullName:'',
    email:'',
    password:'',
    confirmPassword:'',
  })


  const [error, seterror] = useState('')

  const [Users, setUsers] = useState([])

  const handleChanges = (e)=>{
    const {name,value} = e.target

    setFormData((prevData)=>({
     ...prevData,
     [name]:value
    }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
   

    if(FormData.password.length<8){
      seterror('Password must be contain 8 characters long')
      return;
    }

    if(FormData.password !== FormData.confirmPassword){
      seterror('password and confirm password must same')
      return;
    }

    if(!/[!@#$%^&*()<>,"]/.test(FormData.password)){
      seterror('password must contain any speical character')
      return;
    }

    if(!/[A-Z]/.test(FormData.password)){
      seterror('Password must contain Capital letters')
      return;
    }

    setUsers((prevUSers)=>[
      ...prevUSers,{
        fullName:FormData.fullName,
        email:FormData.email,
        password:FormData.password
      }
    ])

    seterror('')
    setFormData({
      fullName:'',
      email:'',
      password:'',
      confirmPassowrd:''
    })


  }

  return (
   <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">

        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Create an Account
        </h2>

        <form  onSubmit={submitHandler}
        className="flex flex-col gap-4">
          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500"
            type="text"
            name='fullName'
            required
            placeholder="Enter Name Here"
            value={FormData.fullName}
           onChange={handleChanges} 
          />

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500"
            type="email"
            name='email'
            required
            placeholder="Enter Email Here"
            value={FormData.email}
            onChange={handleChanges}
          />

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500"
            type="password"
            name='password'
            required
            placeholder="Enter Password Here"
            value={FormData.password}
           onChange={handleChanges}
          />

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500"
            type="password"
            name='confirmPassword'
            required
            placeholder="Enter Confirm Password Here"
            value={FormData.confirmPassword}
            onChange={handleChanges}
          />
          {error && (
            <p className='text-red-500 text-small text-center font-medium'>{error}</p>
          )}

          <button
            type="submit"
            className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500"
          >
            Submit
          </button>
        </form>

        <p className="text-xs text-gray-600 mt-4 text-center">
          By registering, you agree to our{' '}
          <span className="text-indigo-600">
            Terms and Conditions
          </span>
        </p>

      </div>

      {Users.map((elem, idx) => (
  <div key={idx} className="mt-4">
    <p>Name: {elem.fullName}</p>
    <p>Email: {elem.email}</p>
  </div>
))}
    </div>
   </>
  );
};

export default App;
