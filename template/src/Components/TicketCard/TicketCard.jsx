import React, { useState } from 'react';
import Calender from "../../assets/Vector.png"
import Dot from "../../assets/Ellipse-22.png"
import { toast } from 'react-toastify';


const TicketCard = ({ticket,ticketProgress,setTicketProgress,ticketChoose,setTicketChoose}) => {
     const [isSelected,setIsSelected]=useState(false);
    const handleCard=()=>{
        setIsSelected(true)
        if(isSelected){
            toast(` you have already included ${ticket.title} `)
            return
        }
        const updateTicket=ticketProgress+1;
        setTicketProgress(updateTicket)
        toast(` ${ticket.status}! `)
        setTicketChoose([...ticketChoose,ticket])
    }
    //` ${ticket.status} `
  //console.log(ticket);
    return (
         <div onClick={handleCard}  className="card bg-white rounded-xl ">
         <div className='m-3'>
          <div className=' flex gap-1 justify-between '>
          <h1 className='font-bold text-xl'>{ticket.title}</h1>
          <button  className='btn rounded-3xl bg-[#B9F8CF]'><img src={Dot} alt="" /> {ticket.status}</button>
        </div>
        <p className='opacity-90'>{ticket.description}</p>
        <div className='flex justify-around '>
          <div className='flex gap-4'>
            <h3>{ticket.id} </h3>
            <h3>{ticket.priority}</h3>
          </div>
          <div className='flex gap-4 '>
          <div>  <p>{ticket.customer}</p></div>
         <div className='flex gap-1'>     <img  src={Calender} alt="" /> <span>{ticket.createdAt} </span>  </div>
          </div>
        </div>
         </div>
       </div>
    );
};

export default TicketCard;
