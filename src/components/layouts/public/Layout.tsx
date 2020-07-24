import React from "react";
import { Html, Main, NextScript, Head } from "next/document";
import dynamic from "next/dynamic";

const Header = dynamic(() => import('../../layouts/public/Header'));
const Footer = dynamic(() => import('../../layouts/public/Footer'));

export default class Layout extends React.Component {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Header/>
                    <Main />
                    <Footer/>
                    <NextScript />
                </body>
            </Html>
        );
    }
}