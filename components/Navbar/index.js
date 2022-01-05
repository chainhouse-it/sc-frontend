export default function Navbar() {
    return (
        <div className="w-screen flex flex-row justify-between items-center cursor-pointer px-48 pt-8 text-[#C1C1C1] font-sans" >
            <p className="font-extraLight text-3xl" >BSH</p>
            <div className="flex flex-row justify-between items-center w-1/3 font-medium text-md">
                <span className="hover:underline underline-offset-2">About</span>
                <span className="hover:underline underline-offset-2">Contact</span>
                <span className="hover:underline underline-offset-2">Community</span>
                <span className="hover:underline underline-offset-2">Work</span>
                <span className="hover:underline underline-offset-2">ENG</span>
            </div>
        </div>
    )
}