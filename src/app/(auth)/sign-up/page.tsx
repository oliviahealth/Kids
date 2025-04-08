import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import the SignupContent component with suspense enabled
const SignupContent = dynamic(() => import("./SignupContent"), {
  suspense: true,
  ssr: false,
});

export default function SignupPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
}
