"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", { email, password, redirect: false });
    
    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Moderator Login</h1>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700">
          Sign In
        </button>
      </form>
    </div>
  );
}
