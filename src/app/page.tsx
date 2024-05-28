import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-5 m-10">
      <p>Wellcome to Next.js 14</p>
      <p>Home Page...</p>
      <Link href='/product' className="text-lg font-bold transition hover:underline hover:text-blue-700">Product</Link>
      <Link href='/blogs' className="text-lg font-bold transition hover:underline hover:text-blue-700">Blog</Link>
    </div>
  );
}
