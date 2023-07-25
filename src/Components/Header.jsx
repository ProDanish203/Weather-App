import React from 'react'

export const Header = ({setDark, dark}) => {
  return (
    <>
    <header className='flex items-center justify-between dark:bg-gray-800 shadow-lg sm:px-10 px-5 py-3'>
        <div>
            <h2 className='text-2xl font-bold dark:text-white'>Weather App</h2>
        </div>

        <div>
            <i 
            className={`fas ${dark ? "fa-sun" : "fa-moon" } cursor-pointer text-2xl dark:text-white`}
            title={`${dark ? "Enable Light Mode" : "Enable Dark mode"}`}
            onClick={() => setDark(prev => !prev)}
            ></i>
        </div>
    </header>
    </>
  )
}
