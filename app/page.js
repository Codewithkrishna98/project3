import Link from "next/link";

export default function Home() {
  return (
       <div className=" p-5  flex justify-center  border text-2xl font-bold ">
        <div className=" mt-40 border w-fit p-4 rounded-md bg-gray-500 hover:bg-slate-400 cursor-pointer  shadow-md">

        <Link href={"/user-management"}>

        Manage Your Users
        </Link>
        </div>
       </div>
  );
}
