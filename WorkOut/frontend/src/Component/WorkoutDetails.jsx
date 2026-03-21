import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/UseWorkoutContent'
import { useAuthContext } from '../hooks/UseAuthContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutContext()
    const { user } = useAuthContext()
    const [deleting, setDeleting] = useState(false)
    const [confirmDelete, setConfirmDelete] = useState(false)

    const handleClick = async () => {
        if (!user) return

        setDeleting(true)
        setDeleting(true)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/Workout/${workout._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
        setDeleting(false)
        setConfirmDelete(false)
    }

    return (
        <div className="group relative bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">

            {/* ── Top Row: Title + Delete ── */}
            <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5 min-w-0">
                    {/* Green accent bar */}
                    <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full flex-shrink-0" />
                    <h4 className="text-gray-900 font-bold text-base sm:text-lg lg:text-xl truncate leading-tight capitalize">
                        {workout.title}
                    </h4>
                </div>

                {/* Delete button */}
                {!confirmDelete ? (
                    <button
                        onClick={() => setConfirmDelete(true)}
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-all duration-200 opacity-0 group-hover:opacity-100"
                        title="Delete workout"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                ) : (
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button
                            onClick={handleClick}
                            disabled={deleting}
                            className="text-xs font-semibold px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 disabled:opacity-60"
                        >
                            {deleting ? '...' : 'Delete'}
                        </button>
                        <button
                            onClick={() => setConfirmDelete(false)}
                            className="text-xs font-semibold px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>

            {/* ── Stats Row ── */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
                {/* Load */}
                <div className="flex-1 bg-green-50 border border-green-100 rounded-xl p-3 sm:p-3.5 text-center">
                    <p className="text-green-700 font-extrabold text-lg sm:text-xl lg:text-2xl leading-none">
                        {workout.load}
                        <span className="text-xs font-semibold ml-0.5 opacity-70">kg</span>
                    </p>
                    <p className="text-green-600 text-xs font-medium mt-1 uppercase tracking-wide">Load</p>
                </div>

                {/* Divider dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-gray-200 flex-shrink-0" />

                {/* Reps */}
                <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-3 sm:p-3.5 text-center">
                    <p className="text-gray-800 font-extrabold text-lg sm:text-xl lg:text-2xl leading-none">
                        {workout.reps}
                        <span className="text-xs font-semibold ml-0.5 opacity-50">x</span>
                    </p>
                    <p className="text-gray-400 text-xs font-medium mt-1 uppercase tracking-wide">Reps</p>
                </div>
            </div>

            {/* ── Footer: timestamp ── */}
            <div className="flex items-center gap-1.5 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className="text-xs font-medium">
                    {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
                </p>
            </div>
        </div>
    )
}

export default WorkoutDetails