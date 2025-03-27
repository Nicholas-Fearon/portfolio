import Link from "next/link";

export default function Nav() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/cv">CV</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
}
