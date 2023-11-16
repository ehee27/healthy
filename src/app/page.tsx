// import Image from 'next/image'
'use client'

import { Exo } from 'next/font/google'

import { FormEvent, useState } from 'react'
import Loading from '@/components/Loading'
import Results from '@/components/results/Results'
import { useRouter } from 'next/navigation'
import Form from '@/components/Form'

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

  // const { push } = useRouter()

  // set loading state, 2s to render Loader, setResults triggers <Result/>, OPTIONAL push
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setResults(true)
      // push(`/results/${name}`)
    }, 2000)
  }

  // render determined by multiple ternary, if loading check results, if results false render Loader
  // results true, render the results comp with data
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
            COGA
          </h1>
          <Form
            name={name}
            age={age}
            gender={gender}
            setName={setName}
            setAge={setAge}
            setGender={setGender}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </main>
  )
}
