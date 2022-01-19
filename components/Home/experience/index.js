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
        <div className="w-full h-screen flex flex-row justify-between relative">

            <div className="h-screen flex flex-col justify-evenly items-start ">

                <div className="flex flex-col pl-32">
                    <Title text="Experience" />
                    <div className="py-4">
                        <LargeHeader text="Project we have created" />
                    </div>
                    <div className="w-max self-end">
                        <PrimaryButton text="More About Us" link="#" />
                    </div>
                </div>

                <div className="h-1/2"></div>

                <div className="w-1/3 self-start absolute top-20">
                    <img src="/images/fingerprint-image.svg" />
                </div>
            </div>

            <div className="w-1/2 h-screen flex flex-col justify-start pr-32 relative">
                <div className="absolute w-1/3 right-0 bottom-0">
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