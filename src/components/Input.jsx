function Input({type,name,placeholder,getValue,value}) {
  const inputStyle = `border-2 p-2 w-full`

  return (
    <input value={value} onChange={getValue} type={type} name={name} placeholder={placeholder} className={inputStyle}/>
  )
}

export default Input