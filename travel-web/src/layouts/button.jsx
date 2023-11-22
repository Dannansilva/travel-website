import React from 'react'

const button = (Props) => {
  return (
    <div>
    <button className={'${props.backgroundColor} text-black rounded-full px-8 font-medium  hover:bg-[#8482ff] hover:text-white transition-all'}>
        {props.title}
    </button>
    </div>
  )
}

export default button