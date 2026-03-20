import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UseSignUp } from '../hooks/UseSignUp'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const { signUp, error, isLoading } = UseSignUp()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signUp(email, password)
    }

    const passwordStrength = () => {
        if (password.length === 0) return null
        if (password.length < 6) return { label: 'Weak', color: 'bg-red-400', width: 'w-1/3', text: 'text-red-500' }
        if (password.length < 10) return { label: 'Fair', color: 'bg-yellow-400', width: 'w-2/3', text: 'text-yellow-500' }
        return { label: 'Strong', color: 'bg-green-500', width: 'w-full', text: 'text-green-600' }
    }

    const strength = passwordStrength()

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-sm sm:max-w-md">

                {/* ── Card ── */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-6 py-8 sm:px-8 sm:py-10">

                    {/* ── Logo + Header ── */}
                    <div className="text-center mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 no-underline mb-6">
                            <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-sm">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
                                </svg>
                            </div>
                            <span className="text-gray-900 font-extrabold text-lg tracking-tight">
                                Zeke<span className="text-green-600">Workout</span>
                            </span>
                        </Link>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                            Create an account
                        </h1>
                        <p className="text-gray-400 text-sm mt-1.5">
                            Start tracking your workouts today it's free
                        </p>
                    </div>

                    {/* ── Form ── */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Create a strong password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-green-400 focus:ring-2 focus:ring-green-100 focus:bg-white rounded-xl px-4 py-3 pr-11 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                                    tabIndex={-1}
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            {/* Password strength bar */}
                            {strength && (
                                <div className="mt-1">
                                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                                        <div className={`${strength.width} ${strength.color} h-1.5 rounded-full transition-all duration-300`} />
                                    </div>
                                    <p className={`text-xs font-medium mt-1 ${strength.text}`}>
                                        {strength.label} password
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs font-medium px-4 py-3 rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                                </svg>
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-1 bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-green-100 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                    </svg>
                                    Creating account...
                                </>
                            ) : (
                                'Create Account'
                            )}
                        </button>
                    </form>

                    {/* ── Footer ── */}
                    <p className="text-center text-gray-400 text-sm mt-6">
                        Already have an account?{' '}
                        <Link to="/login" className="text-green-600 font-semibold hover:text-green-700 no-underline transition-colors duration-200">
                            Log in here
                        </Link>
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default SignUp