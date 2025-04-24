import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  href: string;
  label: string;
  icon?: React.ElementType;
  target?: string;
}

const Button: React.FC<ButtonProps> = ({ href, label, icon, target }) => {
  return (
    <Link
      href={href}
      className="inline-flex items-center bg-gray-800 text-white font-bold py-2 px-4 rounded-sm shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      target={target}
    >
      {icon && React.createElement(icon, { size: 20, className: "mr-2" })}
      {label}
    </Link>
  );
};

export default Button