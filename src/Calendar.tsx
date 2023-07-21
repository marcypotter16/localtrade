import {Mercatino} from "./Models/Mercatino";
import {MercatinoCardForCalendar} from "./MercatinoCardForCalendar";
import {getNextMonth, getPreviousMonth, numberToMonth} from "./Utils/DateUtil";
import {Link} from "react-router-dom";

const mese = Date.now().toString().slice(0, 6)
const giorni = new Date(parseInt(mese.slice(0, 4)), parseInt(mese.slice(4, 6)), 0).getDate()


export const Calendar = ({mercatini} : { mercatini: Mercatino[] }) => {


    return (
        <>
            <div className='flex space-x-3'>
                &larr;
                <h1>{numberToMonth[(new Date().getMonth() + 1).toString()]}</h1>
                &rarr;
            </div>
            <div className='grid grid-cols-7'>
                {Array(giorni).fill(0).map((_, i) => {
                    const mercatiniGiorno = mercatini.filter(merc => merc.data.split('-')[2] == (i + 1).toString())
                    if (mercatiniGiorno.length == 0) {
                        return <div key={i} className='relative border h-52'>
                            <div key={i} className='absolute top-1 left-1'>{i + 1}</div>
                        </div>
                    } else if (mercatiniGiorno.length == 1) {
                        return <div key={`cont${i}`} className='relative p-5 border h-52'>
                            <div key={i} className='absolute top-1 left-1'>{i + 1}</div>
                            <MercatinoCardForCalendar key={i}
                                                      mercatino={mercatiniGiorno[0]}/>
                        </div>
                    } else {
                        return <div key={`cont${i}`} className='relative flex flex-col p-5 h-52 border'>
                            <div key={i} className='absolute top-1 left-1'>{i + 1}</div>
                            {mercatiniGiorno.map(merc => <MercatinoCardForCalendar key={i} mercatino={merc}/>)}
                        </div>
                    }
                })}
            </div>
        </>
    )
}