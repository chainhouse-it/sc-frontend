import LargeHeader from "../../shared/LargeHeader";
import PrimaryButton from "../../shared/PrimaryButton";
import SmallHeader from "../../shared/SmallHeader";
import Title from "../../shared/Title";

const projects = [
    {
        companyName: "everdome.io",
        title: "Metaverse"
    },
    {
        companyName: "everdome.io",
        title: "Metaverse"
    },
    {
        companyName: "everdome.io",
        title: "Metaverse"
    },
    {
        companyName: "everdome.io",
        title: "Metaverse"
    },
    {
        companyName: "metahero.io",
        title: "Metaverse"
    }
]

export default function Experience() {
    return (
        <div className="w-full h-screen flex flex-row justify-between relative md:flex-col">

            <div className="w-full h-screen flex flex-col justify-evenly items-start">

                <div className="flex flex-col pl-32 sm:pl-4  lg:pl-10">
                    <Title text="Experience" />
                    <div className="py-4">
                        <SmallHeader text="Project we have created" />
                    </div>
                    <div className="w-max self-end">
                        <PrimaryButton text="More About Us" link="#" />
                    </div>
                </div>

                <div className="h-1/2"></div>

                <div className="w-1/3 self-start absolute top-20 sm:w-4/5 md:w-2/5 md:top-20 lg:w-4/5 xl:top-40">
                    <img src="/images/fingerprint-image.svg" />
                </div>
            </div>

            <div className="w-screen h-screen flex flex-col justify-start pr-32 relative sm:pr-0 ">
                <div className="absolute w-1/3 right-0 bottom-0 sm:w-1/2">
                    <img src="/images/eclipse.svg" />
                </div>
                <div className = " absolute left-44 bottom-20">
                    {projects.map(project => {
                        return (
                            <div className = "py-4">
                                <Title text={project.companyName} />
                                <SmallHeader text={project.title} />
                            </div>
                        )


                    })}
                </div>

            </div>

        </div>
    )
}