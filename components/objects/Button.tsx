import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  href: string
  target?: string
  variant?: "primary" | "rounded"
  className?: string
  icon?: React.ReactNode
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ href, target, variant, className, icon, children }) => {
  if (!variant || variant === "primary") {
    return (
      <Link
        href={href}
        className={`inline-flex items-center bg-gray-800 text-white font-bold py-2 px-4 rounded-sm shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 gap-2 ${className}`}
        target={target}
      >
        {icon}
        {children}
      </Link>
    )
  } else if (variant === "rounded") {
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors inline-flex items-center justify-center gap-2 whitespace-nowrap ${className}`}
      >
        {icon}
        {children}
      </Link>
    )
  }
}

export default Button