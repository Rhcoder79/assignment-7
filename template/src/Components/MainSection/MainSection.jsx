import React from 'react';
import Calender from "../../assets/Vector.png"
import Dot from "../../assets/Ellipse-22.png"
const MainSection = () => {
  return (
   <section className='mt-3 bg-amber-300 max-w-[90%] mx-auto grid grid-cols-4 gap-2 '>
     <div className="cardContainer grid-span col-span-3 grid grid-cols-2 gap-4 ">
        <div className="card bg-white rounded-xl ">
         <div className='m-3'>
          <div className=' flex gap-1 justify-between '>
          <h1 className='font-bold text-xl'> Payment Processing Error at Checkout</h1>
          <button className='btn rounded-3xl bg-[#B9F8CF]'><img src={Dot} alt="" /> In Progress </button>
        </div>
        <p className='opacity-90'>Users are receiving 'Transaction Declined' messages despite having sufficient funds.</p>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex justify-around'>
            <h3>#1001 </h3>
            <h3>High</h3>
          </div>
          <div className='flex justify-around'>
          <div>  <p>customer</p></div>
         <div className='flex gap-1'>     <img  src={Calender} alt="" /> <span> date</span>  </div>
          </div>
        </div>
         </div>
       </div>
         <div className="card bg-white rounded-xl ">
         <div className='m-3'>
          <div className=' flex gap-1 justify-between '>
          <h1 className='font-bold text-xl'> Payment Processing Error at Checkout</h1>
          <button className='btn rounded-3xl bg-[#B9F8CF]'><img src={Dot} alt="" /> In Progress </button>
        </div>
        <p className='opacity-90'>Users are receiving 'Transaction Declined' messages despite having sufficient funds.</p>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex justify-around'>
            <h3>#1001 </h3>
            <h3>High</h3>
          </div>
          <div className='flex justify-around'>
          <div>  <p>customer</p></div>
         <div className='flex gap-1'>     <img  src={Calender} alt="" /> <span> date</span>  </div>
          </div>
        </div>
         </div>
       </div>
         <div className="card bg-white rounded-xl ">
         <div className='m-3'>
          <div className=' flex gap-1 justify-between '>
          <h1 className='font-bold text-xl'> Payment Processing Error at Checkout</h1>
          <button className='btn rounded-3xl bg-[#B9F8CF]'><img src={Dot} alt="" /> In Progress </button>
        </div>
        <p className='opacity-90'>Users are receiving 'Transaction Declined' messages despite having sufficient funds.</p>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex justify-around'>
            <h3>#1001 </h3>
            <h3>High</h3>
          </div>
          <div className='flex justify-around'>
          <div>  <p>customer</p></div>
         <div className='flex gap-1'>     <img  src={Calender} alt="" /> <span> date</span>  </div>
          </div>
        </div>
         </div>
       </div>
         <div className="card bg-white rounded-xl ">
         <div className='m-3'>
          <div className=' flex gap-1 justify-between '>
          <h1 className='font-bold text-xl'> Payment Processing Error at Checkout</h1>
          <button className='btn rounded-3xl bg-[#B9F8CF]'><img src={Dot} alt="" /> In Progress </button>
        </div>
        <p className='opacity-90'>Users are receiving 'Transaction Declined' messages despite having sufficient funds.</p>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex justify-around'>
            <h3>#1001 </h3>
            <h3>High</h3>
          </div>
          <div className='flex justify-around'>
          <div>  <p>customer</p></div>
         <div className='flex gap-1'>     <img  src={Calender} alt="" /> <span> date</span>  </div>
          </div>
        </div>
         </div>
       </div>
     </div>
     <div className='col-span-1'>
      <div>
        <h1>Task Status</h1>
      <p>Select a ticket to add to Task Status</p>
      </div>
      <div>
        <h1>Resolved Task</h1>
        <p>No resolved tasks yet.</p>
      </div>
     </div>
     </section>
  );
};

export default MainSection;
