import React from 'react';
import { NextPageContext } from 'next';



export default class Home extends React.Component {
    static async getInitialProps({ req }: NextPageContext) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent }
    }

    render() {
        return (
            <h1>This is home page</h1>
        )
    };
}