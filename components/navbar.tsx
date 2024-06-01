import { siteConfig } from "@/config/siteConfig"
import { ChevronDown, MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"


export const Navbar = () => {
    console.log("Navbar")
    return (
        <div className="h-20 bg-gray-100 flex  px-4 md:px-16 lg:px-16 xl:px-36 items-center justify-between">
            <Link href="/">
                <Image src="/logo-color.svg" alt="logo" width={200} height={200} />
            </Link>
            <div className="lg:hidden">
                {/* Can add a shadcn sheet here */}
                <MenuIcon className="w-8 h-8 " />
            </div>
            <div className="hidden lg:flex lg:flex-row ">
                {
                    siteConfig.navbarItems.map((item, index) => (
                        <Link href={item.href} key={index} className="text-sm text-nowrap font-medium text-gray-500 px-4 py-2 inline-flex items-center">
                            {item.label} {item.expandable && <ChevronDown className="w-4 h-4" />}
                        </Link>
                    ))
                }
            </div>
            <div className="hidden lg:flex lg:flex-row space-x-2">
                <Button size={"lgRounded"} variant={"default2"}>Log in</Button>
                <Button size={"lgRounded"} variant={"outline2"}>Join Free</Button>
            </div>
        </div>
    )
}