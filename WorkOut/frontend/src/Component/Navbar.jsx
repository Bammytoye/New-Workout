import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLogOut } from '../hooks/UseLogOut'
import { useAuthContext } from '../hooks/UseAuthContext'

const Navbar = () => {
    const { logOut } = useLogOut()
    const { user } = useAuthContext()
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    const handleClick = () => {
        logOut()
        setMenuOpen(false)
    }

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false)
    }, [location])

    const navLinks = [
        { to: '/home', label: 'Home' },
        { to: '/about', label: 'About Us' },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-md'
                    : 'bg-white border-b border-gray-100'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex items-center justify-between h-16">

                    {/* ── Logo ── */}
                    <Link to="/" className="flex items-center gap-2 no-underline group">
                        <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
                            </svg>
                        </div>
                        <span className="text-gray-900 font-extrabold text-lg tracking-tight">
                            Zeke<span className="text-green-600">Workout</span>
                        </span>
                    </Link>

                    {/* ── Desktop Nav Links ── */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                                    isActive(to)
                                        ? 'text-green-600 bg-green-50 font-semibold'
                                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                                }`}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* ── Desktop Auth ── */}
                    <div className="hidden md:flex items-center gap-3">
                        {user ? (
                            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full pl-3 pr-1 py-1">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-green-700 text-xs font-bold uppercase">
                                        {user.email?.[0]}
                                    </span>
                                </div>
                                <span className="text-gray-700 text-sm font-medium max-w-[140px] truncate">
                                    {user.email}
                                </span>
                                <button
                                    onClick={handleClick}
                                    className="bg-gray-900 hover:bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ml-1 cursor-pointer"
                                >
                                    Log out
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    to="/login"
                                    className="text-gray-600 hover:text-gray-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 no-underline"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 no-underline"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* ── Mobile Hamburger ── */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-200 gap-1.5"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </div>

            {/* ── Mobile Menu ── */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">

                    {/* Mobile Nav Links */}
                    {navLinks.map(({ to, label }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 no-underline ${
                                isActive(to)
                                    ? 'text-green-600 bg-green-50 font-semibold'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                        >
                            {label}
                        </Link>
                    ))}

                    <div className="border-t border-gray-100 mt-2 pt-3 flex flex-col gap-2">
                        {user ? (
                            <>
                                <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-xl">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <span className="text-green-700 text-sm font-bold uppercase">
                                            {user.email?.[0]}
                                        </span>
                                    </div>
                                    <span className="text-gray-700 text-sm font-medium truncate">
                                        {user.email}
                                    </span>
                                </div>
                                <button
                                    onClick={handleClick}
                                    className="w-full bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200 cursor-pointer"
                                >
                                    Log out
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="w-full text-center text-gray-700 text-sm font-medium py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors duration-200 no-underline"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200 no-underline"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar