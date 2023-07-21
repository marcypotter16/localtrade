import {Route, Routes} from "react-router-dom";
import PublishMercatini from "./Pages/PubblicaMercatino.tsx";
import CalendarByMonth from "./Pages/Calendario/Calendario.tsx";

export const RoutesComponent = () => {
	return (
		<Routes>
			<Route path={'/mercatini/pubblica'} element={<PublishMercatini />}></Route>
			<Route path={'/'} element={<div>Home</div>}></Route>
			<Route path={'/mercatini/calendario'} element={<CalendarByMonth/>}></Route>
		</Routes>
	)
}