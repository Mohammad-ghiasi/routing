import Link from 'next/link'

export default function PrpductPage() {
    return (
        <div className="flex flex-col space-y-5 m-10">
            <div>Wellcome PrpductPage...</div>

            <Link href='/' className="text-lg font-bold transition hover:underline hover:text-blue-700">Home</Link>
            <Link href='/blogs' className="text-lg font-bold transition hover:underline hover:text-blue-700">Blog</Link>
        </div>
    )
}
