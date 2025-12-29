import React from 'react';

const CompleteTask = ({ct}) => {
  //  console.log(ct)
    return (
       <div className='bg-[#CCE7D2] mb-2'>
            <h1 className='text-lg font-bold'>{ct.title}</h1>
            <button className='  max-w-[90%]  text-[#02A53B] text-lg'>completed task</button>
        </div>
    );
};

export default CompleteTask;