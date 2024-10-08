import ServerComponent from "@/components/ServerComponent";
import ClientComponent from "@/components/ClientComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-400 flex min-h-screen flex-col items-center">
    
    <div class="bg-gray-600 rounded py-24 sm:py-32 text-justify">
  <div class="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
  <ul role="list" class="flex sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
      <li>
        <div class="flex items-center gap-x-6">
          <img class="h-16 w-16 rounded-full" src="https://profile-images.xing.com/users/42caec9908e9e534dff8edc5a92a8aeb-6/image.1024x1024.jpg" alt=""/>
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-200">Abdulkadir Tartilaci</h3>
            <p class="text-sm font-bold leading-6 text-red-400">Co-Founder / CEO</p>
          </div>
        </div>
      </li>

    </ul>
    <div class="max-w-2xl">
      <h2 class="text-3xl font-bold tracking-tight text-amber-400 sm:text-4xl">Meet our leadership</h2>
      <p class="mt-6 text-lg leading-8 text-white">Our team foresees a collaboration based on trust and dedication above all else. Our projects are carried out in this context and all our collaborations are realized through this teamwork.</p>
    </div>
   
  </div>
</div>

    {/* <ServerComponent /> */}
    <ServerComponent/>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}

