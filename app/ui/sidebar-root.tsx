import CegImage from "@/app/ui/ceg-image";
import NavigationMain from "@/app/ui/navigation-main";

export default function SidebarRoot() {
    {/* Static sidebar for desktop */}
    return(
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                <CegImage/>
                <NavigationMain/>
            </div>
        </div>
    )
}