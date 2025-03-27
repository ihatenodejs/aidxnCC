import { default as NextLink } from 'next/link'

interface LinkProps {
  href: string
  className?: string
  target?: string
  rel?: string
  children: React.ReactNode
}

export default function Link(props: LinkProps) {
  return (
    <NextLink
      href={props.href}
      className={`text-blue-400 hover:underline ${props.className}`}
      target={props.target}
      rel={props.rel}
    >
      {props.children}
    </NextLink>
  )
}