import React from 'react'
import { Link } from 'react-router-dom'

const features = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        title: 'High Intensity',
        desc: 'Every session is designed to push your cardiovascular and muscular limits through smart, progressive overload.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'All Fitness Levels',
        desc: 'Whether you\'re a beginner or an advanced athlete, workouts are scalable to match your current ability.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
            </svg>
        ),
        title: 'Track Progress',
        desc: 'Log every set, rep, and weight. Watch your performance improve week over week with real data.',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ),
        title: 'Full Body Focus',
        desc: 'Combines strength, cardio, and flexibility training targeting every major muscle group in each session.',
    },
]

const stats = [
    { value: '50+', label: 'Exercise Types' },
    { value: '100%', label: 'Free to Use' },
    { value: '24/7', label: 'Access Anytime' },
    { value: '∞', label: 'Progress to Make' },
]

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* ── Hero Section ── */}
            <section className="bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 text-center">
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        About Zeke Workout
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
                        Train Smarter.<br />
                        <span className="text-green-600">Get Stronger.</span>
                    </h1>

                    <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                        Zeke Workout is a high-intensity training platform designed to help you build strength,
                        endurance, and flexibility all in one place. Log your workouts, track your progress,
                        and push your limits every single day.
                    </p>

                    <Link
                        to="/home"
                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 no-underline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                        Start Working Out
                    </Link>
                </div>
            </section>

            {/* ── Stats Bar ── */}
            <section className="bg-green-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
                        {stats.map(({ value, label }) => (
                            <div key={label} className="py-2">
                                <p className="text-white font-extrabold text-2xl sm:text-3xl">{value}</p>
                                <p className="text-green-200 text-xs font-medium uppercase tracking-wider mt-0.5">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── What Is Zeke Workout ── */}
            <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            What is Zeke Workout?
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
                            The Zeke Workout is a comprehensive fitness program combining bodyweight exercises,
                            resistance training, and cardiovascular workouts. Every session delivers a full-body
                            challenge pushing participants through movements like push-ups, squats, deadlifts,
                            and burpees in structured circuit formats.
                        </p>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                            With a focus on proper form and technique, the program encourages you to push your
                            limits safely. Whether you're training for aesthetics, performance, or general health,
                            Zeke Workout adapts to your goals and helps you stay consistent.
                        </p>
                    </div>

                    {/* Visual card */}
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-3">
                        {[
                            { label: 'Strength Training', pct: 'w-4/5', color: 'bg-green-500' },
                            { label: 'Cardio & Endurance', pct: 'w-3/5', color: 'bg-green-400' },
                            { label: 'Flexibility & Mobility', pct: 'w-2/5', color: 'bg-green-300' },
                            { label: 'Recovery & Form', pct: 'w-3/4', color: 'bg-green-200' },
                        ].map(({ label, pct, color }) => (
                            <div key={label}>
                                <div className="flex justify-between text-xs font-medium text-gray-500 mb-1">
                                    <span>{label}</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2">
                                    <div className={`${pct} ${color} h-2 rounded-full`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Features Grid ── */}
            <section className="bg-white border-y border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-16">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 tracking-tight text-center">
                        Why Zeke Workout?
                    </h2>
                    <p className="text-gray-400 text-sm text-center mb-10">Everything you need to train effectively.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
                        {features.map(({ icon, title, desc }) => (
                            <div key={title} className="flex gap-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:shadow-sm transition-shadow duration-200">
                                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    {icon}
                                </div>
                                <div>
                                    <h3 className="text-gray-900 font-semibold text-sm mb-1">{title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-16 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                    Ready to start?
                </h2>
                <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-md mx-auto">
                    Log your first workout today and start building the habit of showing up every rep counts.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        to="/signup"
                        className="w-full sm:w-auto text-center bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-8 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 no-underline"
                    >
                        Create Free Account
                    </Link>
                    <Link
                        to="/home"
                        className="w-full sm:w-auto text-center bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold text-sm px-8 py-3 rounded-xl transition-all duration-200 no-underline"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About