import SideNav from "@/components/SideNav";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="h-screen">
        <SideNav />
        <div className="">
          {children}
        </div>
      </div>
    )
  }