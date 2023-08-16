import "./form.css";

function Button({text,type,disabled,size, cl,event}) {
  // adding special class to button
  let spacialClass = cl === undefined ? "": cl
  return (
    <button onClick={event && event} className={`btn-${type} btn-${size} ${spacialClass}`} disabled={disabled}>
        {text}
    </button>
  )
}

export default Button