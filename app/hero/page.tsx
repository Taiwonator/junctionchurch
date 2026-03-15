import React from "react";
import { Hero } from "@/components/primitives/hero";

export default async function HeroPage() {
    return (
        <>
            <nav className="min-h-[10vh] fixed bg-black/35 w-full flex items-center justify-start px-4 z-modal">
                <img src="https://junctionchurch.net/wp-content/uploads/2023/01/FA29609C-B3AC-46F2-BFA8-E3250B53531A.png" className="max-w-25" />
            </nav>
            <Hero />
            <footer className="min-h-[20vh] bg-black">Footer</footer>
        </>
    )
}
