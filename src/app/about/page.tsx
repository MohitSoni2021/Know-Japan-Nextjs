import React, { Suspense } from "react";
import Section1AboutPage from "./components/Section1";
import OptionsSectionAboutPage from "./components/OptionsSection";
import DeveloperSectionAboutPage from "./components/DeveloperSection";
import LoaderComponenet from "@/components/loader";

function AboutPage() {
    return (
        <>
            <main className="OuterContainer">
                <Suspense fallback={<LoaderComponenet/>}>
                    <Section1AboutPage />
                    <OptionsSectionAboutPage />
                    <DeveloperSectionAboutPage />
                </Suspense>
            </main>
        </>
    );
}

export default AboutPage;