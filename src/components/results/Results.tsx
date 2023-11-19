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
  faHeartPulse,
  faPersonWalking,
  faPersonRunning,
} from '@fortawesome/free-solid-svg-icons'
import { IoPersonCircleSharp } from 'react-icons/io5'
import Accordion from '../Accordion'
import HealthTab from '../HealthTab'

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
  const [activities, setActivities] = useState([])
  // const [weights, setWeights] = useState('')
  // const [cardio, setCardio] = useState('')

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
        if (item?.age === age) {
          // REFACTOR?
          setTrainingSummary(item?.summary)
          setHealthChecks(item?.healthChecks)
          setActivities(item?.activities)
        }
      })
    } else {
      results = dataWoman
      // checkAge(results)
      results.forEach(item => {
        if (item.age === age) {
          // REFACTOR?
          setTrainingSummary(item.summary)
          setHealthChecks(item.healthChecks)
          setActivities(item?.activities)
        }
      })
    }
  }, [])
  console.log(healthchecks)

  return (
    <div className="border-2 rounded-xl p-3 shadow-2xl">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 py-5">
        <div className="flex flex-col justify-center items-center text-3xl font-bold">
          <IoPersonCircleSharp className="text-9xl text-neutral" />
          <h1>{name}</h1>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
          <h3 className="text-3xl">
            <span className="font-bold text-secondary">{gender}</span>
          </h3>
          <h3 className="text-3xl">
            <span className="font-bold text-secondary">{age}</span>
          </h3>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* icons for recomended programming  */}
      <div className="bg-neutral rounded-lg my-3">
        <h3 className="text-primary text-3xl font-extrabold px-5 py-3">
          Fitness Recommendations
        </h3>
        <div className="grid sm:grid-cols-2 bg-neutral gap-3 pb-7 text-white my-2 rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <FontAwesomeIcon
              icon={faDumbbell}
              className="text-8xl text-secondary animate-pulse mb-3"
            />
            <p>{activities.weights}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <FontAwesomeIcon
              icon={faHeartPulse}
              className="text-8xl text-secondary animate-pulse mb-3"
            />
            <p>{activities.cardio}</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral text-white p-5 my-2 rounded-lg">
        <h3 className="text-primary text-3xl font-extrabold mb-3">
          Strength Training
        </h3>
        <p>{trainingSummary}</p>
      </div>

      {/* ------------------------------------------------ */}
      <div className="bg-neutral rounded-lg p-3">
        {healthchecks?.map((item, i) => {
          return (
            <HealthTab
              key={i}
              title={item.title}
              description={item.description}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Results
