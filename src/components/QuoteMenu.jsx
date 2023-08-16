import Button from "./form/Button"

function QuoteMenu({position,quote,setEditQuote,deleteQuote}) {
  return (
    <div className={`absolute bg-white shadow-md p-2 rounded-sm right-0 w-max z-10`} style={
        {top:`${position.top}px`,left:`${position.right}px`}}>
        <Button text="Edit" type="slate" size="xsm" cl="block mb-2" event={()=> setEditQuote(quote)}/>
        <Button text="Delete" type="danger" size="xsm" cl="block" event={()=> deleteQuote({id:quote.id})}/>
    </div>
  )
}
export default QuoteMenu
