import React, { useState, useEffect } from 'react'
import { useWorkoutContext } from '../hooks/UseWorkoutContent'
import { useAuthContext } from '../hooks/UseAuthContext'

const Workoutform = () => {
    const { user } = useAuthContext()
    const { dispatch } = useWorkoutContext()

    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [emptyFields, setEmptyFields] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!error) return
        const timeout = setTimeout(() => setError(null), 5000)
        return () => clearTimeout(timeout)
    }, [error])

    useEffect(() => {
        if (!success) return
        const timeout = setTimeout(() => setSuccess(false), 3000)
        return () => clearTimeout(timeout)
    }, [success])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        setLoading(true)
        const workout = { title, load, reps }

        const response = await fetch('http://localhost:5010/api/Workout', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()
        setLoading(false)

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields || [])
        }

        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            setSuccess(true)
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }
    }

    const inputBase = "w-full bg-gray-50 border rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all duration-200 focus:bg-white focus:ring-2 focus:ring-green-400 focus:border-green-400"
    const inputError = "border-red-400 bg-red-50 focus:ring-red-300 focus:border-red-400"
    const inputNormal = "border-gray-200 hover:border-gray-300"

    return (
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 sm:p-6 w-full">

            {/* ── Header ── */}
            <div className="flex items-center gap-2.5 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-gray-900 font-bold text-base sm:text-lg leading-tight">New Workout</h3>
                    <p className="text-gray-400 text-xs">Fill in the details below</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* ── Title Field ── */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Workout Title
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Bench Press"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className={`${inputBase} ${emptyFields.includes('title') ? inputError : inputNormal}`}
                    />
                    {emptyFields.includes('title') && (
                        <p className="text-red-400 text-xs">Title is required</p>
                    )}
                </div>

                {/* ── Load + Reps Row ── */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {/* Load */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Load <span className="normal-case font-normal">(kg)</span>
                        </label>
                        <input
                            type="number"
                            placeholder="0"
                            value={load}
                            onChange={(e) => setLoad(e.target.value)}
                            className={`${inputBase} ${emptyFields.includes('load') ? inputError : inputNormal}`}
                        />
                        {emptyFields.includes('load') && (
                            <p className="text-red-400 text-xs">Load is required</p>
                        )}
                    </div>

                    {/* Reps */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Reps
                        </label>
                        <input
                            type="number"
                            placeholder="0"
                            value={reps}
                            onChange={(e) => setReps(e.target.value)}
                            className={`${inputBase} ${emptyFields.includes('reps') ? inputError : inputNormal}`}
                        />
                        {emptyFields.includes('reps') && (
                            <p className="text-red-400 text-xs">Reps is required</p>
                        )}
                    </div>
                </div>

                {/* ── Submit Button ── */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-1 bg-green-600 hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-green-100 flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Saving...
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Add Workout
                        </>
                    )}
                </button>

                {/* ── Error Message ── */}
                {error && (
                    <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                        {error}
                    </div>
                )}

                {/* ── Success Message ── */}
                {success && (
                    <div className="flex items-center gap-2.5 bg-green-50 border border-green-200 text-green-600 text-sm px-4 py-3 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        Workout added successfully!
                    </div>
                )}
            </form>
        </div>
    )
}

export default Workoutform