"use client";

import { signIn, signOut, useSession } from "next-auth/react";
// import { Session } from "next-auth";

export default function ProtectedPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You need to be authenticated to view this page.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Protected Page</h1>
      {session && (
        <>
          <p>Welcome, {session.user?.name}!</p>
          <p>Your email: {session.user?.email}</p>
          <img src={session.user?.image || ""} alt="Profile" />
        </>
      )}
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
