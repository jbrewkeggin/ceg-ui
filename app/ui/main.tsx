import SidebarRoot from "@/app/ui/sidebar-root";
import ContentRoot from "@/app/ui/content-root";

export default function Main() {


    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <div>
                <SidebarRoot/>
                <ContentRoot/>
            </div>
        </>
    )
}
