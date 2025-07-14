"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Breadcrumb = () => {
  const pathname = usePathname()

  if (pathname === "/") return null

  const segments = pathname.split("/").filter(Boolean)


  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const label = decodeURIComponent(segment).replace(/-/g, " ")
    const isLast = index === segments.length - 1

    return (
      <span key={href} className="flex items-center justify-center gap-4">
        <span className="text-gray-400"> / </span>
        {isLast ? (
          <span className="capitalize text-gray-500">{label}</span>
        ) : (
          <Link href={href} className="capitalize text-blue-600 hover:underline">
            {label}
          </Link>
        )}
      </span>
    )
  })

  return (
    <nav aria-label="breadcrumb" className="text-sm my-2 flex justify-center w-full">
      <div className="flex items-center justify-center gap-4">
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        {crumbs}
      </div>
    </nav>
  )
}

export default Breadcrumb
