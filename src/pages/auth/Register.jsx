import { useState } from "react";
import { showPassword,getValues} from "./auth";
import { Link } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import Input from "../../components/Input"
import Button from "../../components/form/Button"

function Register() {
  const [type,setType] = useState("password")
  const [disabled,setDisabled] = useState(true);
  const [data,setData] = useState({email:"",password:"",fullname:""})

    function passwordTrigger(){
        showPassword({type,setType})
    }
    function registerData({e}){
      e.preventDefault()
      console.log(data)
    }
  return (
    <div className="bg-gray-100 h-screen">
       <div className="flex items-center justify-center h-full">
        {/* <form onSubmit={(e)=>registerData({e})} className="bg-white p-4 rounded-md grid gap-4 w-full max-w-sm">
          <h2 className="text-xl font-bold">Register</h2>
          <Input getValue={(e)=>getValues({e,data,setData,setDisabled})} value={data.fullname} type="text" placeholder="Fullname" name="fullname"/>
          <Input getValue={(e)=>getValues({e,data,setData,setDisabled})} value={data.email} type="text" placeholder="Email" name="email"/>
          <div className="relative">
          <span onClick={passwordTrigger} className="b cursor-pointer text-gray-400">
                {type === "password" ? <BiShow/> : <BiHide/>}
              </span>
            <Input getValue={(e)=>getValues({e,data,setData,setDisabled})} value={data.password} type={type} placeholder="******" name="password"/>
          </div>
          <span className="text-sm text-gray-400">Already have an account? <Link to='/login' className="text-purple-700">login.</Link></span>
          <Button text="Login" disabled={disabled} type='primary' size="lg"/>
        </form> */}
      </div>
    </div>
  )
}

export default Register