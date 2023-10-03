import React, {useState, useEffect} from 'react'
import "./CountDown.css"

const CountDown = ({newYear}) => {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setminutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    // useEffect(()=>{
    //     const timerId = setInterval(() =>{
    //         const now = new Date().getTime()
    //         const distance = (newYear - now) / 1000

    //         if(distance > 0 ){
    //             const days = Math.floor(distance / 60 / 60 / 24)
    //             setDays(days)
    //         }
    //         else{
    //             clearInterval(timerId)
    //         }
    //     }, 1000)
    //     return clearInterval(timerId)
    // }, [newYear])

    useEffect(() => {
        const timerId = setInterval(() => {
            const now = new Date().getTime()
            const distance = (newYear - now) / 1000
            if (distance > 0) {
                const days = Math.floor(distance / 60 / 60 / 24)
                const hours = Math.floor(distance / 60 / 60 % 24)
                const minutes = Math.floor((distance / 60) % 60)
                const seconds = Math.floor(distance % 60)
                setDays(days)
                setHours(hours)
                setminutes(minutes)
                setSeconds(seconds)
            } else {
                clearInterval(timerId)
            }
        }, 1000)
        return () => clearInterval(timerId)
    }, [newYear])
  return (
    <>
    <div className="responsive">
    <div className="full">
    <p className='head App top'>Countdown</p>
    <p className='head App'>To</p>
    <p className='head App new'>New Year</p>
    </div>

    <div className="countdown">
        <div className="time">
            <div className='days'>{days}</div>
            <p className='p'>Days</p>
        </div>
        <div className="time">
            <div className='days'>{hours}</div>
            <p className='p'>Hours</p>
        </div>
        <div className="time">
            <div className='days'>{minutes}</div>
            <p className='p'>Minutes</p>
        </div>
        <div className="time">
            <div className='days'>{seconds}</div>
            <p className='p'>Seconds</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default CountDown