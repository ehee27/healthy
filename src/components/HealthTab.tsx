import React from 'react'

interface HealthCardProps {
  title: string
  description: string
}

const HealthTab = ({ title, description }: HealthCardProps) => {
  return (
    <>
      <div
        tabIndex={0}
        className="collapse border-4 border-primary bg-white mb-2"
      >
        <div className="collapse-title text-xl font-medium text-black">
          {title}
        </div>
        <div className="collapse-content flex flex-col gap-5">
          {description}
          <button className="btn btn-primary w-1/2 text-white">Link</button>
        </div>
      </div>
    </>
  )
}

export default HealthTab
