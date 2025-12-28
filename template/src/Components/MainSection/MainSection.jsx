import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const MainSection = ({ticketPromise}) => {
 // console.log(ticketPromise);
 const ticketData=use(ticketPromise);
  return (
   <section className='mt-3 bg-amber-300 max-w-[90%] mx-auto  '>
    <h1 className='text-2xl font-bold opacity-90 ml-1'>Customer Tickets</h1>
   <div className='grid grid-cols-4 gap-2'>
      <div className="cardContainer ml-1 grid-span col-span-3 grid grid-cols-2 gap-4 ">
   
   {
        ticketData.map(ticket=><TicketCard key={ticket.id} ticket={ticket} ></TicketCard> )
   }
      
     </div>
     <div className='col-span-1 bg-white mr-1 '>
      <div className='bg-[#CCE7D2] mt-2 max-w-[90%] mx-auto rounded-xl'>
       <div className='ml-2'>
         <h1 className='font-bold text-xl'>Task Status</h1>
      <p className='opacity-90'>Select a ticket to add to Task Status</p>
       </div>
      </div>
      <div className='bg-[#CCE7D2] mt-2  w-[90%] mx-auto rounded-xl'>
        <div className='ml-2'>
          <h1 className='font-bold text-xl'>Resolved Task</h1>
        <p className='opacity-90'>No resolved tasks yet.</p>
        </div>
      </div>
     </div>
   </div><br />
     </section>
  
  );
};

export default MainSection;
