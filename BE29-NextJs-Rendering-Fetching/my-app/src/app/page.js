import ServerComponent from "@/components/ServerComponent";
import ClientComponent from "@/components/ClientComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Hi! Here is Dashboard Page</h1>
    {/* <ServerComponent /> */}
    <ServerComponent/>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}

