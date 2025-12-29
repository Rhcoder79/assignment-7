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
  const [solveTicket,setSolveTicket]=useState(0)
   const [ticketChoose,setTicketChoose]=useState([])
   const [completeTask,setCompleteTask]=useState([]);
   const removeCard=(rc)=>{
  //  console.log(rc)
  const filterInfo=ticketChoose.filter(tic=>tic.id!==rc.id)
 setTicketChoose(filterInfo);
 setCompleteTask([...completeTask,rc])
   }

//   console.log(ticketChoose);
  return (
    <>
    {/* <h1>Vite + React</h1> */}
   <Navbar></Navbar>
    <Banner ticketProgress={ticketProgress} solveTicket={solveTicket} ></Banner>
    <MainSection ticketChoose={ticketChoose} solveTicket={solveTicket} setSolveTicket={setSolveTicket} completeTask={completeTask} setTicketChoose={setTicketChoose} ticketProgress={ticketProgress}
    removeCard={removeCard} setTicketProgress={setTicketProgress} ticketPromise={ticketPromise} ></MainSection>
    <Footer></Footer>  
    <ToastContainer />
    </>
  )
}

export default App
