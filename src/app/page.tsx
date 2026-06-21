import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">
        Study Smarter with PeakGrades
      </h1>
      <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl">
        Access IGCSE, IAS, and IAL past papers and resources in one place.
      </p>
      <div className="flex gap-4">
        <Link href="/papers" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Browse Papers
        </Link>
        <Link href="/login" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
          Moderator Login
        </Link>
      </div>
    </div>
  );
}
