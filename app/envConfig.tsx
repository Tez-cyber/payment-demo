"use client"
import { useState } from "react";
import { PaystackButton } from "react-paystack";

export default function Home() {
    const publicKey = "pk_test_0666a34b32f00f0a11861b4e4730e8757f393352"
    
    // ====== useState
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(1000000);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // ====== reset form
    const resetForm = () => {
        setEmail('');
        setAmount(0);
        setFirstName('');
        setLastName('');
    }

    const componentProps = {
        email,
        amount: +amount*100,
        publicKey,
        text: 'Pay Now',
        onSuccess: (reference: any) => {
            alert(
                `Your purchase was successful! Transaction reference: ${reference}`
            );
            resetForm();
        },
        onClose: () => alert("Try again!!!!"),
    };

    return (
        <>
            <div className="flex items-center justify-center my-[10%]">
                <form action="" className="border border-white border-solid bg-white shadow-xl p-10 w-1/3">
                    <div className="pb-5">
                        <input type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input_box"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="pb-5">
                        <input type="text"
                            name="amount"
                            value={amount}
                            onChange={(e) => setAmount(10)}
                            className="input_box"
                            placeholder="Enter Amount"
                        />
                    </div>
                    <div className="pb-5">
                        <input type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="input_box"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="">
                        <input type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="input_box"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="my-5 flex items-center justify-center text-black">
                        <PaystackButton
                            className="border-[2px] border-black border-solid py-2 px-10 rounded-md"
                            {...componentProps}
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
