import React from 'react';
import { Layout } from 'antd';
import type { AppProps } from 'next/app'
import '../public/styles.scss';

const { Header, Footer, Content } = Layout;

const metadata = {
    title: 'Story',
    description: 'Tell your story',
}

export default function RootLayout({ Component, pageProps }: AppProps) {
    return (
        <Layout className='layout'>
            <Header className='header'>
                <div className="logo"><p>Logo</p></div>
            </Header>
            <Content className='content'>
                <Component {...pageProps} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Next Js Footer
            </Footer>
        </Layout>
    )
}
