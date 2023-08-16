import Input from "../../components/Input"
import Button from "../../components/form/Button"
import { useState } from "react";
import { showPassword,getValues} from "./auth";
import { Link } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";


function Login() {
  const [type,setType] = useState("password")
  const [disabled,setDisabled] = useState(true);
  const [data,setData] = useState({email:"",password:""})

  function passwordTrigger(){
    showPassword({type,setType})
  }
    

  function loginData({e}){
    console.log(data)

  }
   return (
      <div className="bg-gray-100 h-screen">
        <div className="flex items-center justify-center h-full">
          <form onSubmit={(e)=>loginData({e})} className="bg-white p-4 rounded-md grid gap-4 w-full max-w-sm">
            <h2 className="text-xl font-bold">Login</h2>
            <Input getValue={(e)=> getValues({e,setData,data,setDisabled})}  value={data.email} type="text" placeholder="Email" name="email"/>
            <div className="relative">
              <span onClick={passwordTrigger} className="b cursor-pointer text-gray-400">
                {type === "password" ? <BiShow/> : <BiHide/>}
              </span>
              <Input getValue={(e)=> getValues({e,setData,data,setDisabled})} value={data.password} type={type} placeholder="******" name="password"/>
            </div>
            <span className="text-sm text-gray-400">Don't have an account? <Link to="/register" className="text-purple-700">register.</Link></span>
            <Button text="Login" disabled={disabled} type="primary" size="lg"/>
          </form>
        </div>
      </div>
   )
  }

export default Login