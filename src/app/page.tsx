import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className={"grid-cols-3 w-full h-full p-10"}>
        <Link href={"/rock-scissors-paper"}>
          <div
            className={
              "flex justify-center items-center w-50 h-50 rounded-md border border-gray-300 hover:border-gray-500 hover:bg-gray-50 hover:shadow-sm p-10 transition-all"
            }
          >
            가위바위보 추천
          </div>
        </Link>
      </section>
    </main>
  );
}
