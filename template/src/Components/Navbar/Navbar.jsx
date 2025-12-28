import React from 'react';

const Navbar = () => {
    return (
         <nav className=' flex   justify-around mt-4 items-center'>
      <div><h1 className='font-bold text-2xl'>CS — Ticket System</h1></div>
      <div className='flex   items-center gap-4 text-[#000000] opacity-90'>
        <div>Home</div>
        <div>FAQ</div>
        <div>Changelog</div>
        <div>Blog</div>
        <div>Download</div>
        <div>Contact</div>
        <div><button className='btn btn-primary '> + New Ticket</button> </div>
      </div>
    </nav>
    );
};

export default Navbar;