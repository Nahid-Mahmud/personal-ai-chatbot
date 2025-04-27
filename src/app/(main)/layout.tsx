import type React from "react"; // Import React

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="">{children}</main>
    </div>
  );
}
