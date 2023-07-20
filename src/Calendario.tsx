import {Calendar} from "./Calendar";
import {getMercatiniByDate} from "./FirebaseUtils/CRUDmercatini";

export default async function CalendarByMonth({params}: { params: { month: string } }) {
    const month = params.month
    const mercatini = await getMercatiniByDate();
    return (
        <div>
            <h1>CalendarByMonth</h1>
            <Calendar mercatini={mercatini} mese={month}/>
        </div>
    )
}