import React from 'react'

export const Card = ({title, value}) => {
  return (
    <>
    <div className='card w-[200px] dark:bg-gray-700 bg-gray-300 p-4 flex flex-col items-center justify-center rounded-md min-h-[100px]'>
        <i className='fas fa-cloud dark:text-white text-xl'></i>

        <h2 className='text-xl font-semibold dark:text-white mb-1 mt-2 text-center'>{title}</h2>
        <p className='text-md dark:text-gray-400 text-center font-semibold'>{value}</p>

    </div>
    </>
  )
}
