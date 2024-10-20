// src/app/404.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Oops! Block not found.
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Looks like this page got lost in the blockchain. Maybe it&apos;s stuck in
            a transaction that never confirmed. 🤷‍♂️
          </p>
          <Link href="/" passHref>
            <Button>Go Back Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
