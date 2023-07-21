import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <div className='flex space-x-3 py-1 px-2 w-screen bg-slate-700 text-white'>
            <Link to={'/'}>Home</Link>
            <Link to={'/mercatini'}>Mercatini</Link>
            <Link to={'/myaccount'}>Account</Link>
            <Link to={'/mercatini/pubblica'}>Pubblica mercatino</Link>
            <Link to={'/mercatini/calendario'}>Calendario</Link>
        </div>
    )
}