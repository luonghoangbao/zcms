import React from 'react';
import { NextPageContext } from 'next';
import Link from 'next/link'
import PostData from '../data/posts.json';
export default class Home extends React.Component {
    static async getInitialProps({ req }: NextPageContext) {
        const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
        return { userAgent }
    }

    render() {
        return (
            <>
                <div className={`img`}>
                    <h1 className = {`red`}>Welcome to my team. This is ChatBox</h1>
                    <Link href="/login"><a>Go to login page</a></Link>
                    {PostData.map((postDetail, index) => {
                        return <h1>{postDetail.username}</h1>
                    })}
                </div>
            </>
        )
    };
}