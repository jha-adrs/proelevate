import { Button } from "@/components/ui/button"
import { BreadCrumb } from "./breadcrumb"
import Link from "next/link"

interface HeroProps {

}

export const Hero = ({ }: HeroProps) => {
    return (
        <div className="flex flex-col w-full h-full p-6 lg:px-64 justify-between bg-gradient-to-tr from-gray-200 via-gray-200 to-orange-50">
            <BreadCrumb className="hidden lg:flex" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full lg:mt-8">
                <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-6">
                    <h1 className="font-bold text-3xl">
                        Ready to conquer? Dive into epic events from around the world!
                    </h1>
                    <p className="text-normal">
                        Ready to conquer? Dive into epic events from around the world! Join us for an exhilarating journey through thrilling festivals, grand celebrations, and unforgettable experiences. Uncover the best places to be, witness incredible spectacles, and make memories that will last a lifetime. Adventure awaits!
                    </p>
                </div>
            </div>
            <div className="flex flex-row items-center py-8 space-x-2">
                <Link href={"/events"}>
                <Button variant={"default2"}>View Events</Button>
                </Link>
                <Button variant={"outline2"} className="bg-white">Host an event</Button> {/*Add scroll to effect */}
            </div>
        </div>
    )
}