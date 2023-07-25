import { useState } from 'react';
import './App.css';
import { Weather } from './Components/Weather';
import { Card } from "./Components/Card";
import { Header } from "./Components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from './Components/Footer';

function App() {
  const [dark, setDark] = useState(true);
  const [stats, setStats] = useState()

  return (
    <>
    <main className={dark ? "dark": ""}>
      <Header setDark={setDark} dark={dark}/>
      <ToastContainer/>
      
      <section className='dark:bg-gray-900'>

        <div className={` max-w-[1000px] w-full mx-auto min-h-[95vh] flex-wrap flex items-center justify-center gap-4`}>
        
        {
          stats ? (
            <>

            <div className='col-1 mt-10 flex flex-wrap gap-2 items-center justify-center'>
              <Card title="Temperature" value={stats?.temp}/>
              <Card title="Feels Like" value={stats?.feels_like}/>
              <Card title="Pressure" value={stats?.pressure}/>
              <Card title="Humidity" value={stats?.humidity}/>
              <Card title="Maximum Temperature" value={stats?.temp_max}/>
              <Card title="Minimum Temperature" value={stats?.temp_min}/>

          </div>
            </>
          ) : (
            <div className='col-1 px-2' >
              <h2 className='sm:text-5xl text-2xl text-center dark:text-white mt-5 sm:mt-0 font-bold head-text'>Find Weather of your neighbourhoods and city</h2>
            </div>
          )
        }
        
        <div className='col-2 max-w-[1000px] w-full mx-auto px-3 py-5'>
            <Weather setStats={setStats} dark={dark}/>
        </div>
        </div>
      </section>

    </main>

        <Footer/>

    </>
  );
}

export default App;
