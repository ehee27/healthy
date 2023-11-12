'use client'
import { Exo } from 'next/font/google'
import { dataMen, dataWoman } from '../../resultsData'
import { useState, useEffect } from 'react'

const exo = Exo({
  subsets: ['latin'],
  display: 'swap',
})

interface ResultsProps {
  name: string
  gender: string
  age: number
}

const Results = ({ name, gender, age }: ResultsProps) => {
  const [content, setContent] = useState([])
  const [healthchecks, setHealthChecks] = useState([])

  useEffect(() => {
    let content
    let target
    if (gender === 'man') {
      content = dataMen
      // setHealthChecks(content[0].healthChecks)
      // if (age < 30) {
      //   target = content.filter(item => item.cohort === 'man20')
      // }
    } else {
      content = dataWoman
    }
    console.log(content)
    console.log(healthchecks)
    // setContent(target)
  }, [])

  // console.log(content)
  return (
    <div className={`${exo.className} flex flex-col rounded p-2`}>
      <h1 className="text-7xl text-gray-50 font-bold mb-5 text-center">
        {name}'s Evalution
      </h1>
      <div className="grid grid-cols-3 border-2 rounded p-4">
        {/* --------------- */}
        <div className="sm:col-span-3 md:col-span-1 border-2 rounded p-4">
          <p className="text-2xl text-gray-50 my-2">
            Age: <span className="font-bold text-green-500">{age}</span>
          </p>
          <p className="text-2xl text-gray-50 my-2">
            Gender: <span className="font-bold text-green-500">{gender}</span>
          </p>
        </div>
        {/* --------------- */}
        <div className="sm:col-span-3 md:col-span-2 flex flex-col justify-center border-2 p-4 text-xl bg-transparent rounded">
          <h3 className="text-3xl text-gray-50 font-bold">
            Recommended Activity Levels
          </h3>
          <p className="my-2 text-gray-50">
            Minutes per week:{' '}
            <span className="font-bold text-green-500">150+</span>
          </p>
          <p className="my-2 text-gray-50">
            Sessions: <span className="font-bold text-green-500">3-5</span>
          </p>
          <p className="my-2 text-gray-50">
            Recovery between sessions:{' '}
            <span className="font-bold text-green-500">1-2 days</span>
          </p>
        </div>
      </div>
      {/* --------------- */}

      <div className="sm:col-span-3 border-2 p-4 my-1 bg-transparent rounded">
        <h3 className="flex flex-col justify-center items-center text-4xl text-gray-50 font-bold">
          Fitness Recomendation
        </h3>
        <p className="text-sm leading-relaxed my-3 px-5 text-gray-50">
          A man in his 40's must maintain a realistic approach to strength gains
          and muscle growth. Recovery time is longer than the previous decades
          and injury risk is real. More than 2 heavy lifting sessions per week
          is not advised. The mindest should shift from growth and size to
          functional strength and joint mobility. You can still get plenty
          strong and maintain a youthful physique but being mindful of risks and
          injury is paramount. If you get injured in your 40's, it could mean a
          lifelong ailment.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 p-4 bg-transparent rounded">
        <h3 className="text-6xl  text-gray-50 font-bold my-2">
          Healthchecks/screenings
        </h3>
        <button
          className="transition ease-in-out delay-50 bg-green-500 hover:scale-105 text-white p-2 rounded w-80 hover:bg-gray-50 hover:text-green-500 my-2"
          type="submit"
        >
          Yearly evalution by primary doctor
        </button>
        <button
          className="transition ease-in-out delay-50 bg-green-500 hover:scale-105 text-white p-2 rounded w-80 hover:bg-gray-50 hover:text-green-500 my-2"
          type="submit"
        >
          Skin cancer screening
        </button>
        <button
          className="transition ease-in-out delay-50 bg-green-500 hover:scale-105 text-white p-2 rounded w-80 hover:bg-gray-50 hover:text-green-500 my-2"
          type="submit"
        >
          Mental health evalution
        </button>
        <button
          className="transition ease-in-out delay-50 bg-green-500 hover:scale-105 text-white p-2 rounded w-80 hover:bg-gray-50 hover:text-green-500 my-2"
          type="submit"
        >
          Cholesterol check
        </button>
        <button
          className="transition ease-in-out delay-50 bg-green-500 hover:scale-105 text-white p-2 rounded w-80 hover:bg-gray-50 hover:text-green-500 my-2"
          type="submit"
        >
          Cardioscan
        </button>
        <button
          className="transition ease-in-out delay-50 bg-green-500 hover:scale-105 text-white p-2 rounded w-80 hover:bg-gray-50 hover:text-green-500 my-2"
          type="submit"
        >
          Colonoscopy
        </button>
        <button
          className="transition ease-in-out delay-50 bg-green-500 hover:scale-105 text-white p-2 rounded w-80 hover:bg-gray-50 hover:text-green-500 my-2"
          type="submit"
        >
          Bloodwork/Hormonal panel
        </button>
      </div>
    </div>
  )
}

export default Results
