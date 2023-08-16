function showPassword({type,setType}){
    if(type === "password"){
        return setType("text")
    }
    setType("password")
}

let validEmail = false;
let validPassword=false;
let validFullname = true;

const email = (e,setDisabled)=>{
    if(e.target.value ===""){
        validEmail = false
    }else{
        validEmail=true
    }
    button(setDisabled)
}
const password = (e,setDisabled)=>{
    if(e.target.value ===""){
        validPassword = false
    }else{
        validPassword=true
    }
    button(setDisabled)
}
const fullname = (e,setDisabled)=>{
    if(e.target.value ===""){
        validFullname = false
    }else{
        validFullname=true
    }
    button(setDisabled)
}
const button = (setDisabled)=>{
    if(validEmail && validPassword && validFullname){
        setDisabled(false)}
    else{
        setDisabled(true)
    }

        console.log(validFullname,validEmail,validPassword)
    }

function getValuesLogin({e,data,setData,setDisabled}){
    const input = e.target.name
    const value = e.target.value
    setData({...data, [input]:value});

    switch(input){
        case "email":
            email(e,setDisabled)
            break;
        case 'password':
            password(e,setDisabled);
        case "fullname":
            fullname(e,setDisabled)
            break;
        default : return;
    }
}
export {showPassword,getValuesLogin}