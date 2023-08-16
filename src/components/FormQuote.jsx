import Button from "./form/Button";
import { useEffect, useState} from "react";
import { BiPlus } from "react-icons/bi";

function FormQuote({submition,quoteValue,setQuoteValue,editing,clearEditing}) {
    const[disabled,setDisabled] = useState(true)
    useEffect(()=>{
        if(quoteValue.trim() === ''){
            return setDisabled(true);
        }
        setDisabled(false)
    },[quoteValue])

    function handleChange(e){
        setQuoteValue(e.target.value)
    }
    
    return (
        
        <form onSubmit={submition} className="mb-4 relative max-h-max bg-white rounded-md">
            <label htmlFor="quote" className="sr-only">Quote</label>
            <textarea  value={quoteValue} onChange={handleChange} className="w-[85%] h-20 p-2 resize-none" id="quote" placeholder="Write your quote..."></textarea>
                {editing && <span onClick={clearEditing} className="bg-gray-100 p-1 rounded-full cursor-pointer absolute shadow-md left-[79%] top-[4px]">
                    <BiPlus className="pointer-events-none rotate-45"/>
                </span>}
            <div className="button absolute">
                <Button text="Post" type="primary" size="lg" disabled={disabled}/>
            </div>
        </form>
    )
}

export default FormQuote;