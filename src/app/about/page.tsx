import Image from "next/image";
import MenuBar from "../MenuBar";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-top p-12">
      <MenuBar currentPage="about" />
      <p>
        ...
      </p>
    </main>
  );
}
