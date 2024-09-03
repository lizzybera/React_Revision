import React from "react"
import { Hero } from "./LandingPageComp/Hero"
import FirstComponents from "./LandingPageComp/firstComponents"
import LastComponents from "./LandingPageComp/lastComponents"

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <FirstComponents />
            {/* <LastComponents /> */}
        </div>
    )
}

export default LandingPage