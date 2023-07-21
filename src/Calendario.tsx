import {Calendar} from "./Calendar";
import {getMercatiniByDate} from "./FirebaseUtils/CRUDmercatini";
import {useState} from "react";

export default function CalendarByMonth() {
    const [mercatini, setMercatini] = useState([])
    getMercatiniByDate().then((mercatini) => {
        setMercatini(mercatini)
    });
    return (
        <div>
            <h1>CalendarByMonth</h1>
            <Calendar mercatini={mercatini} />
        </div>
    )
}