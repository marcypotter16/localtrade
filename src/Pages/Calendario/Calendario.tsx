import {Mercatino} from "../../Models/Mercatino.ts";
import {MercatinoCardForCalendar} from "../../MercatinoCardForCalendar.tsx";
import {numberToMonth} from "../../Utils/DateUtil.ts";
import {useState} from "react";
import {getMercatiniByDate} from "../../DbUtils/CRUDmercatini.ts";
import {Calendario} from "../../Models/Calendario.ts";


export default function Calendar() {
    const [calendario, setCalendario] = useState<Calendario>(new Calendario())
    const [mercatini, setMercatini] = useState<Mercatino[]>([])
    getMercatiniByDate().then(mercatini => setMercatini(mercatini))

    return (
        <>
            {/** MONTH SELECTOR */}
            <div className='flex space-x-3'>
                <button onClick={() => {
                    const newCalendario = calendario.copy()
                    // Ricorda che getCurrentMonth() ha il +1
                    newCalendario.setDate(new Date(calendario.getCurrentYear(), calendario.getCurrentMonth() - 2, calendario.getCurrentDate().getDate()))
                    setCalendario(newCalendario)
                }}>&larr;</button>
                <h1>{numberToMonth[calendario.getCurrentMonth().toString()]}</h1>
                <button onClick={() => {
                    const newCalendario = calendario.copy()
                    newCalendario.setDate(new Date(calendario.getCurrentYear(), calendario.getCurrentMonth(), calendario.getCurrentDate().getDate()))
                    setCalendario(newCalendario)
                }}>&rarr;</button>
            </div>

            {/** DAYS */}
            <div className='grid grid-cols-7'>
                {calendario.getDaysArrayInMonth().map((_, i) => {
                    const mercatiniGiorno = mercatini.filter(merc => merc.data.split('-')[2] == (i + 1).toString())
                    if (mercatiniGiorno.length == 0) {
                        return <div key={i} className='relative border h-52'>
                            <div key={i} className='absolute top-1 left-1'>{i + 1}</div>
                        </div>
                    } else if (mercatiniGiorno.length == 1) {
                        return <div key={mercatiniGiorno[0].id} className='relative p-5 border h-52'>
                            <div key={i} className='absolute top-1 left-1'>{i + 1}</div>
                            <MercatinoCardForCalendar key={i}
                                                      mercatino={mercatiniGiorno[0]}/>
                        </div>
                    } else {
                        return <div key={mercatiniGiorno[0].id} className='relative flex flex-col p-5 h-52 border'>
                            <div key={i} className='absolute top-1 left-1'>{i + 1}</div>
                            {mercatiniGiorno.map(merc => <MercatinoCardForCalendar key={i} mercatino={merc}/>)}
                        </div>
                    }
                })}
            </div>
        </>
    )
}