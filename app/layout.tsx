import React from 'react';
import { Layout, Flex } from 'antd';
import { Header, Footer, Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import '../public/styles.scss';

//const { Header, Sider, Footer, Content } = Layout;

const metadata = {
  title: 'Story',
  description: 'Tell your story',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout className='layout'>
          <Header className='header'>
            <div className="logo"><p>Logo</p></div>
          </Header>
          <Content className='content'>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Next Js Footer
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
