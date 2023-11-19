import Link from 'next/link'
import React from 'react'
import { FaVihara } from 'react-icons/fa'

const NavBar = () => {
  return (
    <nav className="flex justify-around items-center bg-neutral text-white border-2 h-24">
      <div className="flex gap-2 text-4xl">
        <FaVihara className="text-primary" />
        <span>COGA</span>
      </div>
      <div className="flex gap-3">
        <Link
          href="/"
          className="border-2 p-2 rounded border-transparent hover:border-primary transition-all"
        >
          Home
        </Link>
        <Link
          href="/tools"
          className="border-2 p-2 rounded border-transparent hover:border-primary transition-all"
        >
          Tools
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
