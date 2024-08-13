import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

export const metadata = {
  title: "Dashboars Page",
  description: "This is Dashbboard Page",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Hello, Dashboard Page</h1>
      {/* <ServerComponent /> */}
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}
