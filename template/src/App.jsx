import './App.css'
function App() {
  

  return (
    <>
    {/* <h1>Vite + React</h1> */}
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
    <div className='banner max-w-[90%] font-bold mx-auto text-white flex justify-center gap-4 bg-gray-400 mt-4'>
      <div className=" w-[40%] p-10 text-center rounded-xl "
      style={{backgroundImage:`url('/images/vector1.png'),linear-gradient(to right,#632ee3,#9f62f2)`}}>
        <p className='text-2xl'>In-progress</p>
        <h1 className='text-3xl'>0</h1>
        </div>
      <div className=" w-[40%] p-10 text-center rounded-xl"
       style={{backgroundImage:`url('/images/vector1.png'),linear-gradient(to right,#54CF68,#00827A)`}}>
        <p className='text-2xl' >Resolved</p>
        <h1 className='text-3xl' >0</h1>
      </div>
    </div>

      
    </>
  )
}

export default App
