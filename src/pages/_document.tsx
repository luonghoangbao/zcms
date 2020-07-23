import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import dynamic from 'next/dynamic';

const PublicLayout = dynamic(() => import('../components/layouts/public/Layout'));

export default class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { 
            ...initialProps 
        };
    }

    render() {
        return (
            <PublicLayout/>
        )
    }
}