import React from 'react'

const ChecksScreenings = () => {
  // let's map this shit
  return (
    <>
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
    </>
  )
}

export default ChecksScreenings
