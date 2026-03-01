import {useState} from 'react';

function Square(){
  const [value,setValue]=useState(null)
  function handleClick(){
    setValue('X');
  }
  return (
    <button className="bg-white border border-gray-500 h-12 w-12 m-1 leading-9 text-lg"
    onClick={handleClick}
    >
      {value}
      </button>
  )
}


export default function Board(){
  return(
    <>
     <div className='flex'>
        <Square value="1"/>
        <Square value="2"/>
        <Square value="3"/>
      </div>

      <div className='flex'>
        <Square value="4"/>
        <Square value="5"/>
        <Square value="6"/>
      </div>
      <div className='flex'>
        <Square value="7"/>
        <Square value="8"/>
        <Square value="9"/>
      </div>
    </>
  )
}