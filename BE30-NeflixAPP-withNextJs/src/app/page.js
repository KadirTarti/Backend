import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <div className="text-white text-center relative m-auto top-2/4">
          <h1 className="text-4xl font-[900] text-center mb-3">
          All the Movies of the World with One Click
          </h1>
          <p className="text-2xl font-[400]">There's Something For Everyone</p>
          <Link href='/register'>
          <button className="btn-danger w-[250px]">Get Started</button>
          </Link>
        </div>
      </div>
      
    </main>
  );
}
