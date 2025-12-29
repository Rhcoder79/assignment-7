import { useState } from 'react'
import './App.css'
  import { ToastContainer } from 'react-toastify';
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
  const [ticketProgress,setTicketProgress]=useState(0);
   const [ticketChoose,setTicketChoose]=useState([])
   console.log(ticketChoose);
  return (
    <>
    {/* <h1>Vite + React</h1> */}
   <Navbar></Navbar>
    <Banner ticketProgress={ticketProgress}></Banner>
    <MainSection ticketChoose={ticketChoose} setTicketChoose={setTicketChoose} ticketProgress={ticketProgress} setTicketProgress={setTicketProgress} ticketPromise={ticketPromise}></MainSection>
    <Footer></Footer>  
    <ToastContainer />
    </>
  )
}

export default App
