// import Image from 'next/image'
'use client'

import { Exo } from 'next/font/google'

import { FormEvent, useState } from 'react'
import Loading from '@/components/Loading'
import Results from '@/components/Results'
import { useRouter } from 'next/navigation'

const exo = Exo({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(false)

  const { push } = useRouter()

  // set's loading state for 2s to render Loader
  // set's results to trigger Results comp
  // OPTIONAL - push to a page
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setResults(true)

      // push(`/results/${name}`)
    }, 2000)
  }

  // page render determined by multiple ternary statement
  // if loading then check results, if results false render Loader
  // when results true, render the results comp with data
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-r from-gray-900 to-black">
      {loading ? (
        results === false ? (
          <Loading />
        ) : (
          <span>
            <Results name={name} age={age} gender={gender} />
          </span>
        )
      ) : (
        <>
          <h1 className={`${exo.className} text-7xl text-gray-50 mb-10`}>
            Let's get healthy
          </h1>

          <div className="rounded p-2 m-2 border-2 border-gray-50">
            <div className="flex rounded p-2 m-2">
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                  className="p-2 my-2 rounded border-2 text-gray-50 bg-transparent"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <input
                  className="p-2 my-2 rounded border-2 text-gray-50 bg-transparent"
                  type="text"
                  placeholder="Your gender"
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                />
                <input
                  className="p-2 my-2 rounded border-2 text-gray-50 bg-transparent"
                  type="number"
                  placeholder="Your age"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                />
                <button
                  className={`${exo.className} transition ease-in-out delay-50 bg-green-500 hover:scale-105 text-white p-2 rounded w-200 hover:bg-gray-50 hover:text-green-500`}
                  type="submit"
                >
                  GET RESULTS
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </main>
  )
}
