// import 'antd/dist/antd.css'
import './custom-antd.css'

import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout

import MyMenu from '../components/MyMenu'
import MyHeader from '../components/MyHeader'
import MyContent from '../components/MyContent'
import MyFooter from '../components/MyFooter'


import './index.css'


export default () => {
    return (
        <Layout hasSider={true} className='big-layout'>
            <Sider 
                // trigger={null}
                // collapsed={false}
                defaultCollapsed={false}
                collapsedWidth={100} 
                collapsible={true}
                className='side'
            >
                <MyMenu />
            </Sider>
            <Layout>
                <Header className='head'><MyHeader /></Header>
                <Content><MyContent /></Content>
                <Footer><MyFooter /></Footer>
            </Layout>
        </Layout>
    )
}