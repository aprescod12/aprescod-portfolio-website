import Link from "next/link";
import Container from "./Container";

export default function Nav() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex justify-between py-4">
          <Link href="/" className="font-semibold">
            Your Name
          </Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/track">Track</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
