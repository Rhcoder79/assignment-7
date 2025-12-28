import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import MainSection from './Components/MainSection/MainSection'
import Navbar from './Components/Navbar/Navbar'

const fetchTickets=async()=>{
  const res=await fetch("/tickets.json")
  return res.json()
}
const ticketPromise=fetchTickets();

function App() {
  

  return (
    <>
    {/* <h1>Vite + React</h1> */}
   <Navbar></Navbar>
    <Banner></Banner>
    <MainSection ticketPromise={ticketPromise}></MainSection>
    <Footer></Footer>  
    </>
  )
}

export default App
