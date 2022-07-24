import Link from 'next/link'
import Image from 'next/image'


export default function Logo() {
    return (
        <div className="flex-grow">
            <Link href="#">
              <a>
                <Image
                  src="/alura-geek.svg"
                  alt="AluraGeek"
                  width={100}
                  height={28}
                  className="w-24 h-auto"
                />
              </a>
            </Link>
          </div>
    )
}