export function SignUp(){
    

    return(
        <form className="m-4 mt-6 p-4 border-2 w-[50%] mx-auto border-pink-6 bg-pink-3 rounded-xl
        flex flex-col gap-4">
            <div className="flex gap-1 justify-center">
                <div className="w-[30%] mt-2 flex justify-end"><label htmlFor="name" className="">Name :</label></div>
                <input type="text" name="name" id="name" placeholder="Your name"
                className="w-[70%] p-2 border-2 bg-pink-3 border-pink-12 rounded-lg" />
            </div>
            <div className="flex gap-1 justify-center">
                <div className="w-[30%] mt-2 flex justify-end"><label htmlFor="email" className="">Email :</label></div>
                <input type="email" name="email" id="email" placeholder="exemple@gmail.com"
                className="w-[70%] p-2 border-2 bg-pink-3 border-pink-12 rounded-lg" />
            </div>
            <div className="flex gap-1 justify-center">
                <div className="w-[30%] mt-2 flex justify-end"><label htmlFor="password" className="">Password :</label></div>
                <input type="password" name="password" id="password" placeholder="password"
                className="w-[70%] p-2 border-2 bg-pink-3 border-pink-12 rounded-lg" />
            </div>
            <div className="flex gap-1 justify-center">
                <div className="w-[30%] mt-2 flex justify-end"><label htmlFor="confirmPassword" className="">Confirm Password :</label></div>
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder="confirm password"
                className="w-[70%] p-2 border-2 bg-pink-3 border-pink-12 rounded-lg" />
            </div>
            <div className="flex justify-center">
                <button className="bg-pink-8 hover:bg-pink-9 text-white font-bold py-2 px-4 rounded-lg">Sign Up</button>
            </div>      
        </form>
    )

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;
    }
    
}