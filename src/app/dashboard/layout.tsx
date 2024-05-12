import { Aside, NavbarDashboard } from "@/components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-row justify-between sm:flex-col ">
        <Aside />
        <NavbarDashboard />
      </div>
      {children}
    </>
  );
}
