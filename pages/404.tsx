import Head from "next/head";
import React from "react";
import Router from "next/router"
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Oopsie, 404! | Genemator's</title>
            </Head>
            <Header subtitle="404"/>
            <div className="h-auto">
                <div className="flex mb-4 justify-center mt-64">
                    <div className="text-white text-center text-center xl:text-6xl lg:text-5xl text-4xl border rounded hover:bg-white hover:text-black">
                        404
                    </div>
                </div>
                <div className="flex mb-4 justify-center">
                    <div className="text-white text-center xl:text-3xl lg:text-2xl text-1xl">
                        I'm so sorry, this page might be unavailable or underconstruction! Stay stunned for new updates...
                    </div>
                </div>
                <div className="flex mb-4 justify-center mb-64">
                    <a onClick={() => Router.back()} className="text-white text-center xl:text-3xl lg:text-2xl text-1xl hover:underline cursor-pointer">
                        {"<-"} Go back to hell 🖤
                    </a>
                </div>
            </div>
            <Footer />
        </>

    )
}
