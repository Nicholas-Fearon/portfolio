import Image from "next/image";
export default function Home() {
  return (
    <>
      <p>Home</p>

      <Image
        src="/hc.png"
        width={800}
        height={800}
        alt="Basketball court"
      />
    </>
  );
}
