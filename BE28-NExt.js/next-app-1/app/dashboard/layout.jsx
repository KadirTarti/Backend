import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
    return (
      <section>
        {
            <Sidebar/>
        }
      </section>
    );
  }
  