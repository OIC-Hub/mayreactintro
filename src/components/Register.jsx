import { useState } from "react"
function Register() {
const [title, setTitle] = useState('Registraion')
const [user, setUser]=useState({
    name:'',
    phone:'',
    password:''
})
const [errors, setErrors] = useState([])
const submitData = (e)=>{
    e.preventDefault()
   if(user.name == ""){
     setErrors((err)=>{
        return {...err,
             nameErr: 'Your name is required'}
     })
   }
   if(user.password ==""){
    setErrors(function(errors){
      return {...errors, passwordErr:'Your password is required'}
    })
   }else if(user.password.length <6){
    setErrors(function(errors){
        return {...errors, passwordErr:"Your password must be greater  6 charaters"}
    })
   }
   if(user.phone ==""){
    setErrors((errors)=>{
        return {...errors, phoneErr: 'Your phone is required'}
    })
   }else if(user.phone.length != 11){
    setErrors((err)=>{
        return   {...err, phoneErr: 'Your phone is invalid'}
    })
   }
 console.log(errors)
  if(errors.length === 0){

  }
}
  return (
    <div className="container">
        <div className="col-md-6 offset-md-3">
          <h2> {JSON.stringify(errors)} </h2> 
            <form onSubmit={submitData }> 
                <div classsName="form-group">
                    <label htmlFor="Name"> Name</label>
                    <input type="text" name="name" className="form-control"
                     onChange={(e)=>{
                        setUser({...user,  name: e.target.value})
                     }}/>
                     {errors.nameErr}
                </div>
                <div classsName="form-group">
                    <label htmlFor="Name">Phone</label>
                    <input type="tel" name="phone" className="form-control" onChange={(e)=>{
                        setUser({...user,  phone: e.target.value})
                    }} />
                    {errors.phoneErr}
                </div>
                <div classsName="form-group">
                    <label htmlFor="Name">Password</label>
                    <input type="password" name="password" className="form-control"
                    onChange={(e)=>{
                        setUser({...user,  password: e.target.value})
                    }}
                    />
                    {errors.passwordErr}
                </div>
               <button type="submit" className="btn btn-success" >Register</button>
                
                
                </form>
        </div>
    </div>
  )
}

export default Register