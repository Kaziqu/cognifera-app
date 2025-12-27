"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 

    if (password !== "123") {
      alert("Incorrect password! Please use the demo password: 123");
      return;
    }

    if (email.includes("admin")) {
      router.push("/dashboard/admin");
    } else if (email.includes("member")) {
      router.push("/dashboard/member");
    } else {
      alert("Gunakan email 'admin' atau 'member' untuk demo!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 ">
      <div className="w-full max-w-md rounded-xl shadow-lg p-8 border border-orange-100">
        <h2 className="text-2xl font-bold text-center text-base-600 mb-6">
          Login Cognifera
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 ">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-base-300 rounded-lg p-2 bg-base-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-base-300 rounded-lg p-2 bg-base-100 focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Enter password"
              required
            />
          </div>
          <p className="text-sm font-bold text-red-200">
            {email && password ? "Demo password is '123'" : ""}

          </p>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-white-500">
          admin@cognifera.com / member@gmail.com (pw: 123)
        </p>
      </div>
    </div>
  );
}