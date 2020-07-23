import React from "react";
import { Html, Main, NextScript, Head } from "next/document";

export default class Layout extends React.Component {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    This is app layout
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}