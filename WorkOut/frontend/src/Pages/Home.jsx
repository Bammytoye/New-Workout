import React, { useEffect } from 'react'
import { useWorkoutContext } from '../hooks/UseWorkoutContent'
import { useAuthContext } from '../hooks/UseAuthContext'

// Components
import WorkoutDetails from '../Component/WorkoutDetails'
import WorkoutForm from '../Component/Workoutform'

const Home = () => {
    const { workouts, dispatch } = useWorkoutContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:5010/api/Workout', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }

        if (user) {
            fetchWorkouts()
        }
    }, [dispatch, user])

    const totalLoad = workouts?.reduce((sum, w) => sum + Number(w.load || 0), 0)
    const totalReps = workouts?.reduce((sum, w) => sum + Number(w.reps || 0), 0)

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10">

                {/* ── Page Header ── */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        My Workouts
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Welcome back, <span className="text-green-600 font-medium">{user?.email}</span>
                    </p>
                </div>

                {/* ── Stats Row ── */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm text-center">
                        <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                            {workouts?.length ?? 0}
                        </p>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">Workouts</p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm text-center">
                        <p className="text-2xl sm:text-3xl font-extrabold text-green-600">
                            {totalLoad ?? 0}
                            <span className="text-sm font-semibold text-gray-400 ml-0.5">kg</span>
                        </p>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">Total Load</p>
                    </div>
                    <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm text-center">
                        <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                            {totalReps ?? 0}
                        </p>
                        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider mt-1">Total Reps</p>
                    </div>
                </div>

                {/* ── Main Layout ── */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

                    {/* ── Workout List ── */}
                    <div className="w-full lg:flex-1 order-2 lg:order-1">
                        {workouts && workouts.length > 0 ? (
                            <>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                        All Workouts
                                        <span className="ml-2 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                                            {workouts.length}
                                        </span>
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                                    {workouts.map((workout) => (
                                        <WorkoutDetails key={workout._id} workout={workout} />
                                    ))}
                                </div>
                            </>
                        ) : (
                            /* ── Empty State ── */
                            <div className="flex flex-col items-center justify-center bg-white border border-dashed border-gray-200 rounded-2xl py-16 px-6 text-center">
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-green-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z" />
                                    </svg>
                                </div>
                                <h3 className="text-gray-800 font-bold text-base mb-1">No workouts yet</h3>
                                <p className="text-gray-400 text-sm max-w-xs">
                                    Add your first workout using the form. Every rep starts somewhere.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* ── Workout Form ── */}
                    <div className="w-full lg:w-80 xl:w-96 flex-shrink-0 order-1 lg:order-2 lg:sticky lg:top-24">
                        <WorkoutForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home