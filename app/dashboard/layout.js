import Link from "next/link";

export default function DashboardLayout({ children}) {
    return (
      <>
        <div className="flex">
            <div className="h-screen bg-black w-[15vw]">
                <ul className="px-10 py-5">
                    <li>
                        <Link className="text-white" href="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link className="text-white" href="/dashboard/profile">Profile</Link>
                    </li>
                    <li>
                        <Link className="text-white" href="/about">About</Link>
                    </li>
                </ul>
            </div>
            <div>{children}</div>
        </div>
        
      </>
    )
  }