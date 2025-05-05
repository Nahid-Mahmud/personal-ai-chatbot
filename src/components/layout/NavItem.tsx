"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem({ icon, label, url }: { icon: React.ReactNode; label: string; url: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={url}
      className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ${
        pathname === url
          ? "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
          : "text-gray-700 dark:text-gray-300"
      } `}
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
