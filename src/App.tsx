import {NavBar} from "./Pages/NavBar.tsx";
import {RoutesComponent} from "./RoutesComponent.tsx";

export default function App() {
    return (
        <div>
            <NavBar/>
            <div className='flex w-screen justify-center'>
                <div className='w-2/3 bg-slate-800 h-screen'>
                    <RoutesComponent/>
                </div>
            </div>
        </div>)
}
