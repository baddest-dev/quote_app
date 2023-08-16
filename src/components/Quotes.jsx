import Quote from "../components/Quote"
import FormQuote from "../components/FormQuote"
import { useState,useReducer} from "react";
import QuoteMenu from "../components/QuoteMenu";
import { INITIAL, reducer } from "./QuotesReducer";
import datas from "./quotesData";

function Quotes() {
    const [quotes,setQuote]= useState(datas);
    const [body,setQuoteValue] = useState("");
    const [state,dispatcher] = useReducer(reducer,INITIAL)
    // trigger the menu
    function showMenu ({e,quote}){
      // Grab position of the triggered item
      let {top,right} = e.target.getBoundingClientRect();
      // for scrolling situation;
      const offsetTop = window.scrollY;
      // set position of the menu
      // 24 is just extra added so the menu dos not display directly on thr trigger;
      // 70 width of the menu added to push the menu away not to fload on the right edge.
      // adding other element might require an increasement. 
      const menuPosition = {top:top+offsetTop+24,right:right - 70}
      // case menu was closed
      if(!state.menuActive){
          dispatcher({type:"OPEN_MENU", openFor:quote, menuPosition})
        }
      // case menu was opened and targeted item is the same;
      // like if it was opened for item one and item one trigger is clicked once more time;
      if(state.menuActive && quote.id === state.openFor.id){
        dispatcher({type:"CLOSE_MENU"})
      }
      if(state.menuActive && quote.id !== state.openFor.id){
        dispatcher({type:"OPEN_MENU",openFor:quote, menuPosition})
      }
    };
    
    // handle Update Quote
    function setEditQuote(quote){
      // If 
      if(state.editingQuote){
        dispatcher({type:"CHANGE_QUOTE", resetEditingQuote:(prev)=>{ delete prev.freeze; return null}});
      }
      
      // Prevent the current quote from being deleting.
      quote.freeze = true
      dispatcher({type:"EDITING_QUOTE", editingQuote:quote})
       // Grap quote body to textearea field
      setQuoteValue(quote.body);
      // enable button so it can be submitted
    };

    function submition(e){
      e.preventDefault();
      // case for creating a quote
      if(body.trim() !== "" && !state.editingQuote){
        // create new quote
          const newQuote = {
            id:new Date().getTime().toString(),user:"Default user"
            ,body
            ,likes:0,isLiked:false}
          const newQuoteList = [newQuote,...quotes];
          setQuote(newQuoteList)
        }
        // case editing a quote
        if(state.editingQuote && body.trim() !== ""){
          quotes.reduce((acc,quote)=>{
              let item = quote
              if(item.id === state.editingQuote.id){
                    item.body = body;
                }
              
              acc.push(item)
              return acc;
              },[])
              dispatcher({type:"SUBMIT", resetEditingQuote:(prev)=>{ delete prev.freeze; return null}});
            }
      setQuoteValue('')
    }
    // Detele quote
    function deleteQuote({id}){
      // Create a copy of quotes without the one that has the provided ID
        const newQuoteList = quotes.filter((quote)=> quote.id !== id);
        setQuote(newQuoteList)
        // close menu
        dispatcher({type:"DELETE_QUOTE"});
    }
    function clearEditing(){
      dispatcher({type:"RESET_EDITING",resetEditingQuote:(prev)=>{ delete prev.freeze; return null}})
      setQuoteValue("");
    }
    function likeQuote({id}){
        const newQuotes = quotes.reduce((acc,quote)=>{
            if(quote.id === id && quote.isLiked){
              quote.isLiked = false
              quote.likes -=1
            }
            else if(quote.id === id && !quote.isLiked){
              quote.isLiked = true
              quote.likes +=1
            }
            else{}
            acc.push(quote)
            return acc
        },[])
        setQuote(newQuotes)
      }
    return (
      <>
          {state.menuActive && <QuoteMenu quote={state.openFor} deleteQuote={deleteQuote} setEditQuote={setEditQuote} position={state.menuPosition}/>}

          <FormQuote focus={state.focus} quoteValue={body} setQuoteValue={setQuoteValue} submition={submition} editing={state.editingQuote} clearEditing={clearEditing}/>
          <div className="grid gap-4 " >
              {quotes.map(quote=>{
                  return  <Quote key={quote.id} quote={quote} showMenu={showMenu} likeQuote={likeQuote}/>
              })}
          </div>
      </>
      )
}

export default Quotes