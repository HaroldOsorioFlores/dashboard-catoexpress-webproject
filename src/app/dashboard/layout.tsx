import { Aside, NavbarDashboard } from "@/components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Aside />
      <NavbarDashboard />
      {children}
    </>
  );
}
