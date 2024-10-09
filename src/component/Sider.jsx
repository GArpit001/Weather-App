import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Sider = () => {

    const {error , search, setSearch, handleClick } = useContext(MyContext)

    let ss = JSON.parse(localStorage.getItem("data"))
    // console.log(ss)

    return (
        <div className='p-4'>
            <div className='flex flex-col items-center h-[220px]  justify-between pb-3'>
                <img src={`https://openweathermap.org/img/wn/${ss.weather[0].icon}@2x.png`} className="w-[100px] h-[100px] rounded-full border border-white" alt="..." />
                <h1 className='text-4xl font-semibold uppercase' >
                    {ss.weather[0].main}
                </h1>
            </div>

            <hr />

            <div className='py-2 flex '>
                <input type="search" className='w-[85%] outline-none border-none bg-transparent px-3' value={search} onChange={(e) => setSearch(e.target.value)} />
                {/* <span className='bg-slate-300 p-2 rounded-full inline-block'> */}
                <span className='bg-[#212020]  flex w-[40px] h-[40px] rounded-full justify-center items-center p-2  cursor-pointer transition-shadow duration-200 hover:shadow-inner hover:shadow-blue-500/50' onClick={handleClick}>
                    <i className="fa fa-search text-xl" aria-hidden="true"></i>
                </span>
            </div>

            <hr />

            <div className='py-3'>
                <div className='text-center pb-3'>
                    <h1 className='text-lg'>
                        {error ? error : ss.name} , {ss.sys.country}
                    </h1>
                </div>

                <table className='w-full text-base'>
                    <thead>

                        <tr className='border-y border-[#dee2e647] '>
                            <td className='pl-3'>Temperature</td>
                            <td className='text-right py-1.5 pr-3 text-red-600'>{ss.main.temp} ({ss.weather[0].main})</td>
                        </tr>

                        <tr className='border-y border-[#dee2e647]'>
                            <td className='pl-3'>Humidity</td>
                            <td className='text-right py-1.5 pr-3 text-red-600'>{ss.main.humidity}</td>
                        </tr>


                        <tr className='border-y border-[#dee2e647]'>
                            <td className='pl-3'>Visibility</td>
                            <td className='text-right py-1.5 pr-3 text-red-600'>{ss.visibility} ml</td>
                        </tr>

                        <tr className='border-y border-[#dee2e647]'>
                            <td className='pl-3'>Wind Speed</td>
                            <td className='text-right py-1.5 pr-3 text-red-600'>{ss.wind.speed}Km/h</td>
                        </tr>
                        <tr className='border-y border-[#dee2e647]'>
                            <td className='pl-3'>Pressure</td>
                            <td className='text-right py-1.5 pr-3 text-red-600'>{ss.main.pressure} Km/h</td>
                        </tr>
                        <tr className='border-y border-[#dee2e647]'>
                            <td className='pl-3'>Real Feel</td>
                            <td className='text-right py-1.5 pr-3 text-red-600'>{Math.round(ss.main.feels_like)} Km/h</td>
                        </tr>
                    </thead>



                </table>
            </div>


        </div>
    )
}

export default Sider