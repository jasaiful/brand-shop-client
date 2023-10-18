import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-600 text-white underline font-semibold" : ""} >Home</NavLink></li>
        <li><NavLink to="/brand" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-600 text-white underline font-semibold" : ""} >Brand List</NavLink></li>
        <li><NavLink to="/addCar" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-600 text-white underline font-semibold" : ""} >Add Car</NavLink></li>
        <li><NavLink to="/cart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-600 text-white underline font-semibold" : ""} >My Cart</NavLink></li>
        <li><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-600 text-white underline font-semibold" : ""} >Login</NavLink></li>
    </>

    return (
        <div className="navbar border-red-600 border-b-8 rounded-b-3xl px-5 text-white bg-slate-950">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img className="bg-base-200 w-3/4 rounded-3xl" src={logo} alt="" />
                    <p className="text-2xl font-bold text-red-600">Alloy Dreams Ltd.</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;