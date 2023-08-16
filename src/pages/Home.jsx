import Quotes from "../components/Quotes"
import Container from "../components/Container"

function Home({likeQuote,removeQuote}) {
  return (
    <>    
      <div className="bg-gray-100 py-8 min-h-screen">
        <Container>
          <Quotes likeQuote={likeQuote} removeQuote={removeQuote}/>
        </Container>
      </div>
    </>
  )
}

export default Home
