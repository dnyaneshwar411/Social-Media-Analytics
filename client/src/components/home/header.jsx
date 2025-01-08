import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          SocialAnalytics
        </Link>
        <nav className="hidden md:flex space-x-4">

        </nav>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </header>
  )
}

