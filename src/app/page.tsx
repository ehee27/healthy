// import Image from 'next/image'
'use client'

import { Exo } from 'next/font/google'
import { FormEvent, useState } from 'react'
import Loading from '@/components/Loading'
import Results from '@/components/results/Results'
import Form from '@/components/Form'
import { FaLaptopMedical } from 'react-icons/fa'
import { FaBrain, FaPersonRunning } from 'react-icons/fa6'

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

  // set loading state, 2s to render Loader, setResults triggers <Result/>, OPTIONAL push
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setResults(true)
    }, 2000)
  }

  // render determined by multiple ternary, if loading check results, if results false render Loader
  // results true, render the results comp with data
  return (
    <div className="flex justify-center h-screen py-20">
      <main className="w-[80%]">
        {loading ? (
          results === false ? (
            <Loading />
          ) : (
            <span>
              <Results name={name} age={age} gender={gender} />
            </span>
          )
        ) : (
          <div className="w-[100%]">
            <Form
              name={name}
              age={age}
              gender={gender}
              setName={setName}
              setAge={setAge}
              setGender={setGender}
              handleSubmit={handleSubmit}
            />
            <div className="flex justify-around text-9xl mt-40">
              <div className="flex flex-col justify-center items-center gap-2">
                <FaLaptopMedical className="text-secondary" />
                <p className="text-xl font-bold">Health</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <FaPersonRunning className="text-accent" />
                <p className="text-xl font-bold">Fitness</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-2">
                <FaBrain className="text-blue-300" />
                <p className="text-xl font-bold">Wellbeing</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
