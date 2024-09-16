"use client"
import { useState } from "react"

export default function Home() {
  const [email, setEmail] = useState("")
  const [amount, setfirst] = useState("")
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  return (
    <>
      <div className="flex items-center justify-center my-[10%]">
        <form action="" className="border border-white border-solid bg-white p-10">
          <div className="pb-5">
            <input type="text"
              value={email}
              className="bg-black p-2" 
              placeholder="Email address" 
            />
          </div>
          <div className="pb-5">
            <input type="text"
              value={amount} 
              className="bg-black p-2" 
              placeholder="Enter Amount" 
            />
          </div>
          <div className="pb-5">
            <input type="text"
              value={firstName} 
              className="bg-black p-2" 
              placeholder="First Name" 
            />
          </div>
          <div className="">
            <input type="text"
              value={lastName} 
              className="bg-black p-2" 
              placeholder="Last Name" 
            />
          </div>
          {/* ==== Submit button ==== */}
          <div className="my-5 flex items-center justify-center text-black">
            <input type="submit" className="border-[2px] border-black border-solid py-2 px-10 rounded-md" value="Make payment" />
          </div>
        </form>
      </div>
    </>
  )
}
