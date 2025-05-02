export default function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}
