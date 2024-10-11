import React from "react"
import  Hero  from "./LandingPageComp/Hero"
import FirstComponents from "./LandingPageComp/firstComponents"
import SecondComp from "./LandingPageComp/SecondCompo"
import Box from "../components/static/Box"
// import LastComponents from "./LandingPageComp/lastComponents"

const LandingPage = () => {
    return (
        <div>
            <Hero />
            <FirstComponents />
            <SecondComp />
            <Box text="Hello world" bg="pink" />
            <Box text="Hello world2" bg="blue" />
            <Box text="Hello world3" bg="yellow" />
            <Box text="Hello world4" bg="green" />
            <Box text="Hello world5" bg="white" />
            {/* <LastComponents /> */}
        </div>
    )
}

export default LandingPage