import Image from "next/image"
import { Button } from "./ui/button"
import { MailIcon, MessageSquarePlus } from "lucide-react"
import { Separator } from "./ui/separator"
import Link from "next/link"


export const Footer = () => {
    console.log("Footer")
    return (
        <div className="flex min-h-[40vh] flex-col bg-primary px-6 py-8 lg:py-4  text-white space-y-6 items-center justify-center">
            <div className="flex flex-col w-full justify-between lg:flex-row max-w-6xl">
                <div className="flex flex-col space-y-4 lg:max-w-96">
                    <Image src="/logo.svg" alt="logo" width={250} height={250} />
                    <p className="font-sm  font-medium text-left">
                        Join Our Community: Connect with like-minded individuals and grow your network.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6">
                    <div className="flex-col">
                        <p className="font-semibold  my-3">
                            ProElevate&apos;s
                        </p>
                        <ul className="space-y-2">
                            <li><Link href="privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="terms-of-service">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div className="flex-col">
                        <p className="font-semibold  my-3">
                            Useful Links
                        </p>
                        <ul className="space-y-2">
                            <li><Link href={"/dsa-practice"}>DSA Practice</Link></li>
                            <li>Interviews</li>
                            <li>Jobs</li>
                            <li>Competitions</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                    <div className="flex-col">
                        <p className="font-semibold  my-3">
                            Follow us on
                        </p>
                        <div className="flex-row space-x-2">
                            <Button variant={"outline"} size={"icon"} className="hover:bg-transparent">
                                <Image src="/icons/instagram.svg" alt="instagram" width={20} height={20} />
                            </Button>
                            <Button variant={"outline"} size={"icon"} className="hover:bg-transparent">
                                <Image src="/icons/youtube.svg" alt="yt" width={20} height={20} />
                            </Button>
                            <Button variant={"outline"} size={"icon"} className="hover:bg-transparent">
                                <Image src="/icons/x.svg" alt="x" width={20} height={20} />
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <p className="font-semibold  my-3">
                            Contact Us
                        </p>
                        <ul className="space-y-2 flex flex-col">
                            <li className="inline-flex"> <MailIcon className="mr-1" />arshagoyal98@gmail.com</li>
                            <li className="inline-flex"> <MessageSquarePlus className="mr-1" /> Feedback</li>
                        </ul>
                    </div>

                </div>
            </div>
            <Separator className="w-full bg-white/50" />
            <div className="flex items-center justify-center h-full">
                <p className="text-sm font-semibold">Copyright© 2024 ProElevate. All rights reserved.</p>
            </div>
        </div>
    )
}