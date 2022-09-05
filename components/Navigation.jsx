import Logo from '../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="container mx-auto">
      {' '}
      <div className="flex justify-between space-y-4 px-4 py-4">
        <Link href="/">
          <a>
            <Image src={Logo} />
          </a>
        </Link>
        <div className="flex flex-row items-center space-x-4 font-SourceSansPro">
          <Link href="/account">
            <a className="text-white">Account</a>
          </Link>
          <div className="text-white text-xs">Helo</div>
          <div className="text-white text-xs">
            <img
              className="inline-block h-10 w-10 rounded-full border-white border-2"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}
