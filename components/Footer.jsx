import React from 'react'
import Image from 'next/image'
import Logo from '../public/assets/logo.png'

export default function footer() {
  return (
    <>
      <footer className="font-SourceSansPro">
        <div className="container mx-auto flex flex-row space-x-24 pt-32 pl-4 md:pl-0">
          <div>
            <ul className="">
              <li className="text-redish font-bold">Fakesite</li>
              <li className="text-blueish">About us</li>
              <li className="text-blueish">Press</li>
              <li className="text-blueish">Policies</li>
              <li className="text-blueish">Help</li>
            </ul>
          </div>
          <div>
            <ul className="">
              <li className="text-redish font-bold">Account</li>
              <li className="text-blueish">Edit Profile</li>
              <li className="text-blueish">Friends</li>
              <li className="text-blueish">Social</li>
              <li className="text-blueish">Delete Profile</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto pt-24 ">
          <hr className="border- border-blueish cursor-pointer hover:border-red-500 duration-500" />
          <div className="flex justify-between  space-y-4 px-4 py-4 mb-12">
            <Image src={Logo} />
            <ul className="flex flex-row items-center space-x-4">
              <li className="text-blueish text-xs">Terms</li>
              <li className="text-blueish text-xs">Privacy</li>
              <li className="text-blueish text-xs">Site Map</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
