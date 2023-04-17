import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 sticky top-0 bg-gray-400">
      <Link href="/">
        <h1 className="text-3xl">Disney Made Easy</h1>
      </Link>
      <Link href="/">
        <img 
          src="/headshot.png"
          alt="user-image" 
          className="icon h-14 rounded-full cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
        />
      </Link>
    </header>
  )
}

export default Header