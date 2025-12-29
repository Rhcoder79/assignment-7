import React from 'react';

const Banner = ({ticketProgress,solveTicket}) => {
    return (
        <div className='banner max-w-[90%] font-bold mx-auto text-white flex flex-col md:flex-row justify-center gap-4  mt-4'>
      <div className="w-full  md:w-[40%] p-10 text-center rounded-xl "
      style={{backgroundImage:`url('/images/vector1.png'),linear-gradient(to right,#632ee3,#9f62f2)`}}>
        <p className='text-2xl'>In-progress</p>
        <h1 className='text-3xl'>{ticketProgress}</h1>
        </div>
      <div className="w-full md:w-[40%] p-10 text-center rounded-xl"
       style={{backgroundImage:`url('/images/vector1.png'),linear-gradient(to right,#54CF68,#00827A)`}}>
        <p className='text-2xl' >Resolved</p>
        <h1 className='text-3xl' >{solveTicket}</h1>
      </div>
    </div>
    );
};

export default Banner;
