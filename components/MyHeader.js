import './MyHeader.css'
import { Row, Col, Tooltip } from 'antd'
import { MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

import { copyEmail } from '../helpers/copyEmail.js'

export default () => (
    <Row type='flex' justify='space-between' align='middle' className='header'>
        <img src='../static/images/me.jpg' className='avatar' />
        <Col span={16} className="heading">
             <Row>Jaime Salazar Lahera</Row>
             <Row>RPA Developer @ JBT Corp</Row>
        </Col>
        <Col span={8} className='contact'>
            <Row>
                Email
                <Tooltip placement='right' title='Copy my email to your clipboard' autoAdjustOverflow={false} >
                    < MailOutlined className='logo' onClick={copyEmail} />
                </Tooltip>
            </Row>
            <Row>
                Connect
                <Tooltip placement='right' title='Open my profile in a new tab' autoAdjustOverflow={false} >
                    <a href='https://linkedin.com/in/jaime-salazar-lahera' target='_blank'><LinkedinOutlined className='logo' /></a>
                </Tooltip>
            </Row>
            <Row>
                Checkout
                <Tooltip placement='right' title='Open my repo in a new tab' autoAdjustOverflow={false} >
                    <a href='https://github.com/jsalaz1989' target='_blank'><GithubOutlined className='logo' /></a>
                </Tooltip>
            </Row>
        </Col>
    </Row>
)