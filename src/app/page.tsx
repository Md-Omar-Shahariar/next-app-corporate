import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      <Link href={"/performance"}>Performance</Link>
      <h1 className="h-dvh text-3xl ">LandingPage</h1>
    </div>
  );
}
