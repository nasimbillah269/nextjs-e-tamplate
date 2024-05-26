import Link from "next/link";

export default function GlobalNotFountPage() {
  return (
    <div className="text-center bg-slate-100 p-4 w-56 mx-auto mt-40 rounded-lg">
      <h1 className="text-center font-bold pb-4">This is page Not-Found</h1>
      <Link className=" bg-red-400 p-2 text-white mt-2 rounded-lg" href="/">
        Go Back Home
      </Link>
    </div>
  );
}
