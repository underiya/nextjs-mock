import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <Link href="/" className="text-white text-xl font-bold">
            Bug Tracker
          </Link>
        </div>
        <div className="flex space-x-4 text-white">
          <Link href="/auth">Auth</Link>
          <Link href="/api/bugs">Bugs</Link>
          <Link href="/api/chat">Chat</Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
