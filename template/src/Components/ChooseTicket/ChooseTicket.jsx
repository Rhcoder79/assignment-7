import { toast } from 'react-toastify';

const ChooseTicket = ({choose, removeCard,ticketProgress,setTicketProgress,solveTicket,setSolveTicket}) => {
   // console.log(choose)
//    const [click,setClick]=useState(false);
const complete=()=>{
     toast(`Completed  ${choose.id}! `)
removeCard(choose)
const updateTicket=ticketProgress-1
setTicketProgress(updateTicket);
 setSolveTicket(solveTicket+1);
 
}
    return (
        <div className='bg-[#CCE7D2] mb-2'>
            <h1 className='text-lg font-bold'>{choose.title}</h1>
            <button onClick={complete} className='btn  w-full rounded-2xl bg-[#02A53B] text-white'>complete</button>
        </div>
    );
};

export default ChooseTicket;
