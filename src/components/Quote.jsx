import { BiDotsVerticalRounded,BiSolidHeart,BiHeart,BiShareAlt} from "react-icons/bi";

function Quote({quote, showMenu,likeQuote}) {
  
  return (
    <div className="bg-white p-4  w-full rounded-md aria-disabled:opacity-70 aria-disabled:pointer-events-none" aria-disabled={quote.freeze}>
      <div className="flex items-center justify-between relative">
        <h2 className="text-lg font-medium">{quote.user}</h2>
        <span onClick={(e)=> showMenu({e, quote}) } className="bg-gray-100 p-1 rounded-full cursor-pointer">
            <BiDotsVerticalRounded className="pointer-events-none"/>
        </span>
      </div>
      <div className="text">{quote.body}</div>
      <div className="mt-4 flex items-center gap-4">
        <span className="inline-flex items-center gap-2">
            <span className="cursor-pointer" onClick={()=> likeQuote({id:quote.id})}>
              {quote.isLiked ? <BiSolidHeart className="text-purple-700"/> : <BiHeart className="text-purple-700"/> }
            </span>
            <span>{quote.likes}</span>
        </span>

        <span className="cursor-pointer">
          <BiShareAlt className="text-purple-700"/>
        </span>
      </div>
    </div>
  )
}

export default Quote
