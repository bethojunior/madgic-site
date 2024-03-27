import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image
        src="/images/logo.webp"
        width={128}  // ajuste conforme necessário
        height={128} // ajuste conforme necessário
        alt="Logo"
      />
    </Link>
  )
}
