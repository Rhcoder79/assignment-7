import React from 'react';

const Navbar = () => {
    return (
         <nav className=' flex flex-col md:flex-row  justify-around mt-4 items-center gap-1'>
      <div><h1 className='font-bold text-2xl'>CS — Ticket System</h1></div>
      <div className='flex flex-wrap justify-center text-sm md:text-lg  items-center gap-4 text-[#000000] opacity-90'>
        <div>Home</div>
        <div>FAQ</div>
        <div>Changelog</div>
        <div>Blog</div>
        <div>Download</div>
        <div>Contact</div>
        <div><button className='btn btn-primary btm-sm md:btn-md'> + New Ticket</button> </div>
      </div>
    </nav>
    );
};

export default Navbar;
