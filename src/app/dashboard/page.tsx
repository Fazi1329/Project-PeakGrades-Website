"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-center mt-20 text-xl text-slate-500">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Dashboard</h1>
      <p className="text-slate-600 mb-6">Welcome back, {session?.user?.email}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border p-4 rounded-lg hover:shadow-md transition">
          <h2 className="font-semibold text-lg mb-2">Upload Paper</h2>
          <p className="text-sm text-slate-500">Add new past papers to the database.</p>
        </div>
        <div className="border p-4 rounded-lg hover:shadow-md transition">
          <h2 className="font-semibold text-lg mb-2">Manage Subjects</h2>
          <p className="text-sm text-slate-500">Edit or add new subjects and categories.</p>
        </div>
        <div className="border p-4 rounded-lg hover:shadow-md transition">
          <h2 className="font-semibold text-lg mb-2">Activity Logs</h2>
          <p className="text-sm text-slate-500">View recent moderator actions.</p>
        </div>
      </div>
    </div>
  );
}
