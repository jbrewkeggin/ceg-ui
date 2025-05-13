import Image from "next/image";
import cegpic from "@/public/CEG2025.jpg";

export default function CegImage() {
    return (
        <div className="flex h-16 shrink-0 items-center">
            <Image
                alt="Your Company"
                src={cegpic}
                width={50}
                height={50}
                className="w-auto"
            />
        </div>
    )
}