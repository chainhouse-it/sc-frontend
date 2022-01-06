import {
    IoLogoGithub,
    IoMailSharp,
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoLinkedin
} from "react-icons/io5"

export default function Footer() {
    return (
        <div className="w-100 h-40 text-white flex flex-col justify-around items-center">
            <span className="font-bold text-2xl">
                chainhouse.io
            </span>
            {/* Działało tylko z w-screen */}
            <div className="flex flex-row w-screen justify-around items-center">
                <div className="flex flex-row justify-around items-center w-1/4 text-md">
                    <p>About</p>
                    <p>Work with us!</p>
                    <p>Contact</p>
                    <p>Privacy policy</p>
                </div>
                <div className="flex flex-row justify-around items-center w-1/4">
                    <IoLogoGithub size="25" />
                    <IoMailSharp size="25" />
                    <IoLogoFacebook size="25" />
                    <IoLogoTwitter size="25" />
                    <IoLogoLinkedin size="25" />
                </div>
            </div>
        </div>
    )
}