import Link from 'next/link'

export default function BlogPage() {
    return (
        <div className="flex flex-col space-y-5 m-10">
            <div>Wellcome BlogPage...</div>

            <Link href='/' className="text-lg font-bold transition hover:underline hover:text-blue-700">Home</Link>
            <Link href='/product' className="text-lg font-bold transition hover:underline hover:text-blue-700">product</Link>
        </div>
    )
}
