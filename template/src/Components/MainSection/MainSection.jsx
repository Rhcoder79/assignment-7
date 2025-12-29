import React, { use, useState } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const MainSection = ({ticketPromise,ticketProgress,setTicketProgress,ticketChoose,setTicketChoose}) => {
 // console.log(ticketPromise);
 const ticketData=use(ticketPromise);
 //const [click,setClick]=useState(false);
  return (
   <section className='mt-3 bg-amber-300 max-w-[90%] mx-auto  '>
    <h1 className='text-2xl font-bold opacity-90 ml-1'>Customer Tickets</h1>
   <div className='grid grid-cols-4 gap-2'>
      <div className="cardContainer ml-1 grid-span col-span-3 grid grid-cols-2 gap-4 ">
   
   {
        ticketData.map(ticket=><TicketCard ticketProgress={ticketProgress} setTicketProgress={setTicketProgress}
           key={ticket.id} ticket={ticket} ticketChoose={ticketChoose} setTicketChoose={setTicketChoose} ></TicketCard> )
   }
      
     </div>
     <div className='col-span-1 bg-white mr-1 '>
      <div className=' mt-2  rounded-xl'>
       <div className='ml-2'>
         <h1 className='font-bold text-xl'>Task Status</h1>
      <button className='btn opacity-90 bg-[#CCE7D2] w-full rounded-2xl'>Select a ticket to add to Task Status</button>
       </div>
       {/* Select a ticket to add to Task Status */}
      </div>
      <div className=' mt-2   rounded-xl'>
        <div className='ml-2'>
          <h1 className='font-bold text-xl'>Resolved Task</h1>
        <button className='btn opacity-90 bg-[#CCE7D2] w-full rounded-2xl'>No resolved tasks yet.</button>
        </div>
      </div>
     </div>
   </div><br />
     </section>
  
  );
};

export default MainSection;
