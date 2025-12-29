import React, { useState } from 'react';

const ChooseTicket = ({choose, removeCard}) => {
   // console.log(choose)
//    const [click,setClick]=useState(false);
const complete=()=>{
removeCard(choose)

}
    return (
        <div className='bg-[#CCE7D2] mb-2'>
            <h1 className='text-lg font-bold'>{choose.title}</h1>
            <button onClick={complete} className='btn  w-full rounded-2xl bg-[#02A53B] text-white'>complete</button>
        </div>
    );
};

export default ChooseTicket;
