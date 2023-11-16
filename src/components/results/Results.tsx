'use client'
import { Exo } from 'next/font/google'
import { dataMen, dataWoman } from '../../../resultsData'
import { useState, useEffect } from 'react'
import ChecksScreenings from './ChecksScreenings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaSolid, FaDumbell } from '@fortawesome/free-solid-svg-icons'
import { FaBeer } from 'react-icons/fa'
import {
  faDumbbell,
  faHeart,
  faPersonWalking,
  faPersonRunning,
} from '@fortawesome/free-solid-svg-icons'

const exo = Exo({
  subsets: ['latin'],
  display: 'swap',
})

interface ResultsProps {
  name: string
  gender: string
  age: string
}

const Results = ({ name, gender, age }: ResultsProps) => {
  // 2 state vars - summary and healthchecks
  const [trainingSummary, setTrainingSummary] = useState('')
  const [healthchecks, setHealthChecks] = useState([])

  // WHY DOES THIS NOT WORK IN USEEFFECT????

  // checkAge function sets state once we've determined gender
  // const checkAge = ({ arr }: any) => {
  //   arr.forEach(item => {
  //     if (item.age === age) {
  //       setTrainingSummary(item.summary)
  //       setHealthChecks(item?.healthChecks)
  //     }
  //   })
  // }

  // isolates gender and then runs checkAge to pinpoint cohort
  useEffect(() => {
    let results
    if (gender === 'man') {
      results = dataMen
      // checkAge(results)
      results.forEach(item => {
        if (item.age === age) {
          setTrainingSummary(item.summary)
          setHealthChecks(item.healthChecks)
        }
      })
    } else {
      results = dataWoman
      // checkAge(results)
      results.forEach(item => {
        if (item.age === age) {
          setTrainingSummary(item.summary)
          setHealthChecks(item.healthChecks)
        }
      })
    }
  }, [])

  return (
    <div className={`${exo.className} flex flex-col rounded p-2`}>
      <h1 className="text-7xl text-gray-50 font-bold mb-5 text-center">
        {name}'s Evalution
      </h1>
      <h3 className="text-3xl text-white">
        Gender: <span className="text-3xl text-green-500">{gender}</span>
      </h3>
      <h3 className="text-3xl text-white">
        Age: <span className="text-3xl text-green-500">{age}</span>
      </h3>
      <div className="sm:col-span-3 border-2 p-4 my-1 bg-transparent rounded">
        <h3 className="flex flex-col items-center text-4xl text-gray-50 font-bold">
          Fitness Recomendation
        </h3>
        <p className="text-sm leading-relaxed my-3 px-5 text-gray-50">
          {trainingSummary}
        </p>
      </div>

      {healthchecks?.map((item, i) => {
        return (
          <button
            key={i}
            className="transition ease-in-out delay-50 bg-green-500 hover:scale-105 text-white p-2 rounded w-80 hover:bg-gray-50 hover:text-green-500 my-2"
          >
            {item}
          </button>
        )
      })}
      {/* icons for recomended programming  */}
      <div className="flex gap-3 text-green-500 text-5xl">
        <div className="flex flex-col gap-2 justify-center items-center p-3">
          <FontAwesomeIcon icon={faDumbbell} />
          <span className="text-xl text-white">Weight Training</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center p-3">
          <FontAwesomeIcon icon={faPersonWalking} />
          <span className="text-xl text-white">Walking</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center p-3">
          <FontAwesomeIcon icon={faPersonRunning} />
          <span className="text-xl text-white">Running</span>
        </div>
      </div>
    </div>
  )
}

export default Results

{
  /* <div className="grid grid-cols-3 border-2 rounded p-4">
       
        <div className="sm:col-span-3 md:col-span-1 border-2 rounded p-4">
          <p className="text-2xl text-gray-50 my-2">
            Age: <span className="font-bold text-green-500">{age}</span>
          </p>
          <p className="text-2xl text-gray-50 my-2">
            Gender: <span className="font-bold text-green-500">{gender}</span>
          </p>
        </div>
        
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
      </div> */
}
{
  /* --------------- */
}

{
  /* <ChecksScreenings /> */
}
