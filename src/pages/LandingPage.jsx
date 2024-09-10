import React from "react"
import  Hero  from "./LandingPageComp/Hero"
import FirstComponents from "./LandingPageComp/firstComponents"
import SecondComp from "./LandingPageComp/SecondCompo"
// import LastComponents from "./LandingPageComp/lastComponents"

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <FirstComponents />
            <SecondComp />
            {/* <LastComponents /> */}
        </div>
    )
}

export default LandingPage