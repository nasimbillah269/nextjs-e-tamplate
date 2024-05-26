import Link from "next/link";

export default function Profile() {
  return (
    <div>
        <div className="py-5">Profile</div> 
        <Link className="border bg-red-200 py-2 px-3 text-white" href="/dashboard/profile/cheange-password"> Cheange Password</Link> 
        <Link  className="border bg-purple-400 py-2 px-3 text-white" href="/dashboard/profile/edit-profile"> Edit Profile</Link> 
    </div>
  )
}
