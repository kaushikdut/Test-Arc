"use client";

import { signIn, getProviders, LiteralUnion } from "next-auth/react";
import { useEffect, useState } from "react";
import { ClientSafeProvider } from "next-auth/react";

export default function SignIn() {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  console.log(providers);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Sign in</h1>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={() => signIn(provider.id)}
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
}
