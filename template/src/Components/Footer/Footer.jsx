import React from 'react';
import X from "../../assets/x.png"
import Facebook from "../../assets/facebook.png"
import Linkedin from "../../assets/linkedin.png"
import Gmail from "../../assets/gmail.png"
const Footer = () => {
    return (
        <footer className="bg-[#09090B] p-5 md:p-10  ">
   <section className='grid grid-cols-2 lg:grid-cols-5 gap-5 text-white max-w-[90%] mx-auto border-b-2 border-gray-300'>
    <nav className='col-span-2 lg:col-span-1' >
    <h3 className='font-bold'>CS — Ticket System</h3>
    <p className='opacity-70'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
   </nav>
   <nav >
   <h6 className='font-bold' >Company</h6>
   <ul className='opacity-70'>
    <li>About Us</li>
   <li>Our Mission</li>
   <li>Contact Sale</li>
   </ul>
   </nav>
   <nav >
    <h6 className='font-bold'>Services</h6>
    <ul className='opacity-70'>
        <li>Products & Services</li>
    <li>Customer Stories</li>
    <li>Download Apps</li>
    </ul>
   </nav>
   <nav>
    <h6 className='font-bold'>Information</h6>
    <ul className='opacity-70'>
     <li>Privacy Policy</li>
    <li>Terms & Conditions</li>
    <li>Join Us</li>  
    </ul>
   </nav>
   <nav >
    <h6 className='font-bold'>Social Links</h6>
    <ul className='opacity-70'>
    <li className='flex gap-2 items-center'><img src={X} alt="" /> @CS — Ticket System</li>
    <li className='flex gap-2 items-center' ><img className='w-4 h-4' src={Linkedin} alt="" /> @CS — Ticket System</li>
    <li className='flex gap-2 items-center'><img src={Facebook} alt="" /> @CS — Ticket System</li>
    <li className='flex gap-2 items-center'><img src={Gmail} alt="" /> support@cst.com</li>
    </ul>
   </nav>
   <br />
   </section>
   <br />
   <div className='text-center text-white opacity-90'><p>© 2025 CS — Ticket System. All rights reserved.</p></div>
</footer>
    );
};

export default Footer;

