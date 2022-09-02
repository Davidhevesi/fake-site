import React from 'react'
import Image from 'next/image'
import Logo from '../public/assets/logo.png'

export default function NavBar() {
  return (
    <div className="relative container mx-auto px-4 py-6 items-center">
      <div className="flex justify-between">
        <Image src={Logo} />
        <ul className="flex space-x-6 items-center">
          <li className="text-white text-xs">Account</li>
          <li className="text-white text-xs">Helo</li>
          <li className="text-white text-xs">
            <img
              className="inline-block h-10 w-10 rounded-full border-white border-2"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </li>
        </ul>
      </div>
    </div>
  )
}
