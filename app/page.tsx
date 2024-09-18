

export default function Home() {
    return (
        <>
            <div className="flex items-center justify-center my-[10%]">
                <form action="" className="border border-white border-solid bg-white shadow-lg p-10 w-1/3">
                    <div className="pb-5">
                        <input type="email"
                            name="email"
                            className="input_box"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="pb-5">
                        <input type="text"
                            name="amount"
                            className="p-2"
                            placeholder="Enter Amount"
                        />
                    </div>
                    <div className="pb-5">
                        <input type="text"
                            name="firstName"
                            className="p-2"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="">
                        <input type="text"
                            name="lastName"
                            className="p-2"
                            placeholder="Last Name"
                        />
                    </div>
                </form>
            </div>
        </>
    )
}
