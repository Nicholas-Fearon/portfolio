import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-6">My Projects 🚀</h1>
      <div className="bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">Courtside 3</h3>
          <p className="text-gray-600 mt-2">
            A brief description of the project goes here.
          </p>
          <Link href="https://courtside3.vercel.app/" className="block mt-4">
            <Image
              src="/cs3.png"
              alt="Project Preview"
              width={300}
              height={200}
              className="rounded-xl shadow-md hover:opacity-80 transition"
            />
          </Link>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">Guestbook</h3>
          <p className="text-gray-600 mt-2">
            A CRUD guestbook App with user authentication.
          </p>
          <Link href="https://guestbook-rosy.vercel.app/" className="block mt-4">
            <Image
              src="/guestbook.png"
              alt="Project Preview"
              width={300}
              height={200}
              className="rounded-xl shadow-md hover:opacity-80 transition"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
