import React, { use, useState } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import ChooseTicket from '../ChooseTicket/ChooseTicket';
import CompleteTask from '../CompleteTask/CompleteTask';

const MainSection = ({ticketPromise,ticketProgress,setTicketProgress,ticketChoose,setTicketChoose, removeCard,completeTask,solveTicket,setSolveTicket}) => {
 // console.log(ticketPromise);
 const ticketData=use(ticketPromise);

 //const [click,setClick]=useState(false);
  return (
   <section className='mt-3 bg-amber-300 max-w-[90%] mx-auto  '>
    <h1 className='text-2xl font-bold opacity-90 ml-1'>Customer Tickets</h1>
   <div className='grid grid-cols-1 lg:grid-cols-4 gap-2'>
      <div className="cardContainer ml-1 col-span-1  lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 ">
   
   {/* 
   {
        ticketData.map(ticket=><TicketCard ticketProgress={ticketProgress} setTicketProgress={setTicketProgress}
           key={ticket.id} ticket={ticket}  ticketChoose={ticketChoose} setTicketChoose={setTicketChoose} ></TicketCard> )
   } 
    */}
    {
        ticketData.map(ticket=>{
          const isAlreadyDone=completeTask.find(item=>item.id===ticket.id);
          if(!isAlreadyDone){
            return(
            <TicketCard ticketProgress={ticketProgress} setTicketProgress={setTicketProgress}
           key={ticket.id} ticket={ticket}  ticketChoose={ticketChoose} setTicketChoose={setTicketChoose} ></TicketCard>
            )
          }
          return null;
        }
            )
   } 
      
     </div>
     <div className='col-span-1 bg-white mr-1 '>
      <div className=' mt-2  rounded-xl'>
       <div className='ml-2'>
         <h1 className='font-bold text-xl'>Task Status</h1>
     {ticketChoose.length===0 && (<button className='btn opacity-90 bg-[#CCE7D2] w-full rounded-2xl'>Select a ticket to add to Task 
      Status</button>)}
      {/* <button className={`btn opacity-90 bg-[#CCE7D2] w-full rounded-xl ${isSelected?"hidden":""} `}>Select a ticket to add to Task Status</button> */}
      {/* <button className='btn opacity-90 bg-[#CCE7D2] w-full rounded-2xl'>Select a ticket to add to Task Status</button> */}
           {/* <ChooseTicket></ChooseTicket> */}
           {
           ticketChoose.map(choose=><ChooseTicket solveTicket={solveTicket} setSolveTicket={setSolveTicket} ticketProgress={ticketProgress} setTicketProgress={setTicketProgress} removeCard={ removeCard}   key={choose.id} choose={choose}></ChooseTicket>)
           }
       </div>
       {/* Select a ticket to add to Task Status */}
      </div>
      <div className=' mt-2   rounded-xl'>
        <div className='ml-2'>
          <h1 className='font-bold text-xl'>Resolved Task</h1>
        {/* <button className='btn opacity-90 bg-[#CCE7D2] w-full rounded-xl'>No resolved tasks yet.</button> */}
 {completeTask.length===0 && <button className='btn opacity-90 bg-[#CCE7D2] w-full rounded-xl'>No resolved tasks yet.</button>}
    {completeTask.map(ct=><CompleteTask key={ct.id}  ct={ct}></CompleteTask>)}
        </div>
      </div>
     </div>
   </div><br />
     </section>
  
  );
};

export default MainSection;
      