"use client"
import { useState } from "react";
// import "./envConfig"
type inputs = {
  email: string
  firstName: string
  lastName: string
  amount: number
}
export default function Home() {
  const [data, setData] = useState<inputs>({
    email: "",
    firstName: "",
    lastName: "",
    amount: 0,
  })

  // ==== handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setData({
      ...data,
      [name]: value

    })
  }
  // ====== Make payment
  const completePayment = () => {
    alert(process.env.PAY_SECRETKEY)
  }

  return (
    <>
      <div className="flex items-center justify-center my-[10%]">
        <form action="" className="border border-white border-solid bg-white p-10">
          <div className="pb-5">
            <input type="email"
              value={data.email}
              onChange={handleChange}
              className="bg-black p-2" 
              placeholder="Email address" 
            />
          </div>
          <div className="pb-5">
            <input type="text"
              value={data.amount}
              onChange={handleChange} 
              className="bg-black p-2" 
              placeholder="Enter Amount" 
            />
          </div>
          <div className="pb-5">
            <input type="text"
              value={data.firstName}
              onChange={handleChange} 
              className="bg-black p-2" 
              placeholder="First Name" 
            />
          </div>
          <div className="">
            <input type="text"
              value={data.lastName}
              onChange={handleChange} 
              className="bg-black p-2" 
              placeholder="Last Name" 
            />
          </div>
          {/* ==== Submit button ==== */}
          <div className="my-5 flex items-center justify-center text-black">
            <input type="submit"
              onClick={completePayment} 
              className="border-[2px] border-black border-solid py-2 px-10 rounded-md" 
              value="Make payment" 
            />
          </div>
        </form>
      </div>
    </>
  )
}
