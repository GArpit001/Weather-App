import React, { useContext, useState } from 'react'
import Sider from './Sider'
import { MyContext } from '../context/MyContext'



const FullPage = () => {

    const { search } = useContext(MyContext)

    let ss = JSON.parse(localStorage.getItem("data"))
    // console.log(ss)

    let hours, minutes, seconds, months, years, date, days
    let dateAndTime = new Date()
    hours = dateAndTime.getHours()
    minutes = dateAndTime.getMinutes()
    seconds = dateAndTime.getSeconds()


    if (hours > 12) {
        hours = hours - 12
    } else if (hours === 0) {
        hours = 12
    } else {
        hours
    }


    years = dateAndTime.getFullYear()
    months = dateAndTime.getMonth()
    date = dateAndTime.getDate()
    days = dateAndTime.getDay()

    let monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]



    // console.log(years , months , date)


    return (
        <div className='overflow-y-hidden flex justify-between h-full text-white'>

            <div className='sm:flex hidden flex-col h-full justify-between w-full p-4  '>

                <div className='text-center '>
                    <h1 className='text-5xl text-white'>
                        {/* {ss.name} */}
                    </h1>

                </div>

                <div className='flex justify-between'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='text-4xl'>
                            {hours}:{minutes}:{seconds}
                        </h2>
                        <h3 className='text-3xl'>
                            {dayName.map((day, index) => (days === index ? day : ""))}, {date} {monthName.map((val, index) => (months === index ? val : ""))} {years}
                        </h3>
                    </div>

                    <div>
                        <h1 className='text-7xl'>
                            {/* {Math.round(ss.main.temp)}°C */}
                        </h1>

                    </div>
                </div>

            </div>


            <div className='bg-[rgba(0,0,0,0.90)]  h-full w-[650px] backdrop'>

                <Sider />

            </div>



        </div>
    )
}

export default FullPage