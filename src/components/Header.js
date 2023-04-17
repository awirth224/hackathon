import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-center items-center py-5 sticky top-0 bg-gray-400">
      <Link href="/">
        <h1 className="text-3xl">Disney Made Easy</h1>
      </Link>
    </header>
  )
}

export default Header