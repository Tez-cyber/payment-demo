"use client"
import { useState } from "react";
import { PaystackButton } from "react-paystack";


// ======== Input type
type inputProp = {
  email: string
  firstName: string
  lastName: string
  amount: string
}
export default function Home() {
  // ====== useState
  const [data, setData] = useState<inputProp>({
    email: "",
    firstName: "",
    lastName: "",
    amount: "",
  })
  // ====== reset form
  const resetForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.value]: ""
    }))
  }

  // ======= payment props
  const payComponent = {
    email: data.email,
    amount: +data.amount * 100,
    // metadata: {
    //   firstName: data.firstName,
    //   lastName: data.lastName
    // },
    publicKey: process.env.PAY_PUBLICKEY as string,
    text: "Make Payment",
    onSuccess: (ref: string) => {
      alert(`Your payment was successful! Transaction reference: ${ref}`)
      resetForm
    },
    onClose: () => {
      alert("Payment cancelled.");
    }
  }
  // ==== handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value

    }))
  }
  // ====== Make payment
  const completePayment = () => {
    alert(data.firstName)
  }

  return (
    <>
      <div className="flex items-center justify-center my-[10%]">
        <form action="" className="border border-white border-solid bg-white p-10">
          <div className="pb-5">
            <input type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="bg-black p-2"
              placeholder="Email address"
            />
          </div>
          <div className="pb-5">
            <input type="text"
              name="amount"
              value={data.amount}
              onChange={handleChange}
              className="bg-black p-2"
              placeholder="Enter Amount"
            />
          </div>
          <div className="pb-5">
            <input type="text"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              className="bg-black p-2"
              placeholder="First Name"
            />
          </div>
          <div className="">
            <input type="text"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              className="bg-black p-2"
              placeholder="Last Name"
            />
          </div>
          {/* ==== Submit button ==== */}
          {/* <div className="my-5 flex items-center justify-center text-black">
            <input type="submit"
              onClick={completePayment}
              className="border-[2px] border-black border-solid py-2 px-10 rounded-md"
              value="Make payment"
            />
          </div> */}
          <div className="my-5 flex items-center justify-center text-black">
            <PaystackButton
              className="border-[2px] border-black border-solid py-2 px-10 rounded-md"
              {...payComponent}
            />
          </div>
        </form>
      </div>
    </>
  )
}
