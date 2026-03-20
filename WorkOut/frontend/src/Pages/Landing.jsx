import React from 'react'
import { Link } from 'react-router-dom'

const features = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: 'High Intensity',
        desc: 'Push your limits with structured circuits built for maximum calorie burn and muscle activation.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
        ),
        title: 'Track Progress',
        desc: 'Log every set, rep, and weight. Watch your numbers grow week over week with real data.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'All Fitness Levels',
        desc: 'Whether you\'re just starting out or a seasoned athlete, every workout scales to your level.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
            </svg>
        ),
        title: 'Full Body Focus',
        desc: 'Strength, cardio, and flexibility combined — hitting every muscle group every session.',
    },
]

const steps = [
    { step: '01', title: 'Create an account', desc: 'Sign up for free in seconds. No credit card needed.' },
    { step: '02', title: 'Log your workout', desc: 'Add your exercise, load, and reps after each session.' },
    { step: '03', title: 'Track your gains', desc: 'Watch your stats grow and crush your personal records.' },
]

const Landing = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* ── Hero ── */}
            <section className="relative overflow-hidden bg-white">
                {/* Background decoration */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-50 rounded-full opacity-60" />
                    <div className="absolute top-1/2 -left-32 w-64 h-64 bg-green-50 rounded-full opacity-40" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-20 sm:pt-24 sm:pb-28 text-center">

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Your fitness journey starts here
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                        Train Hard.<br />
                        <span className="text-green-600">Track Everything.</span>
                    </h1>

                    <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
                        Zeke Workout helps you log your exercises, monitor your progress,
                        and stay consistent one rep at a time.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
                        <Link
                            to="/signup"
                            className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-sm hover:shadow-lg hover:shadow-green-100 transition-all duration-200 hover:-translate-y-0.5 no-underline"
                        >
                            Get Started, It's Free
                        </Link>
                        <Link
                            to="/login"
                            className="w-full sm:w-auto text-center bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-200 no-underline"
                        >
                            Log In
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
                        {[
                            { value: '50+', label: 'Exercise Types' },
                            { value: '100%', label: 'Free Forever' },
                            { value: '24/7', label: 'Access Anytime' },
                        ].map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{value}</p>
                                <p className="text-gray-400 text-xs font-medium mt-0.5">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Features ── */}
            <section className="bg-gray-50 border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                            Everything you need to train
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
                            Simple, powerful tools built for people who take their fitness seriously.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {features.map(({ icon, title, desc }) => (
                            <div
                                key={title}
                                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                            >
                                <div className="w-11 h-11 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
                                    {icon}
                                </div>
                                <h3 className="text-gray-900 font-bold text-sm mb-2">{title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                        How it works
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base">
                        Up and running in under a minute.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 relative">
                    {/* Connector line (desktop only) */}
                    <div className="hidden sm:block absolute top-8 left-1/4 right-1/4 h-px bg-gray-100 z-0" />

                    {steps.map(({ step, title, desc }) => (
                        <div key={step} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-14 h-14 bg-green-600 text-white font-extrabold text-lg rounded-2xl flex items-center justify-center mb-4 shadow-md shadow-green-100">
                                {step}
                            </div>
                            <h3 className="text-gray-900 font-bold text-base mb-2">{title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA Banner ── */}
            <section className="bg-green-600 mx-4 sm:mx-6 lg:mx-10 mb-16 rounded-2xl overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12 sm:py-14 text-center">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                        Ready to start training?
                    </h2>
                    <p className="text-green-100 text-sm sm:text-base mb-8 max-w-md mx-auto">
                        Join today and log your first workout in minutes. No fees, no limits.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            to="/signup"
                            className="w-full sm:w-auto text-center bg-white hover:bg-gray-50 text-green-700 font-semibold text-sm px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg no-underline"
                        >
                            Create Free Account
                        </Link>
                        <Link
                            to="/about"
                            className="w-full sm:w-auto text-center border border-green-400 hover:border-white text-white font-semibold text-sm px-8 py-3 rounded-xl transition-all duration-200 no-underline"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Landing