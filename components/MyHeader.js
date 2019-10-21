import './MyHeader.css'
import { Row, Col, Icon, Tooltip } from 'antd'

import { copyEmail } from '../helpers/copyEmail.js'

export default () => (
    <Row type='flex' justify='space-between' align='middle' className='header'>
        <img src='../static/images/me.jpg' className='avatar' />
        <Col span={16} className="heading">
             <Row>Jaime Salazar Lahera</Row>
             <Row>Master of Engineering</Row>
             {/* <Row>
                 <span className='master'>Master </span> 
                 of
                 <span className='engineering'> Engineering</span> 
             </Row> */}
        </Col>
        <Col span={8} className='contact'>
            <Row>
                Email
                <Tooltip placement='right' title='Copy my email to your clipboard' autoAdjustOverflow={false} >
                    <Icon type='mail' className='logo' onClick={copyEmail} />
                </Tooltip>
            </Row>
            <Row>
                Connect
                <Tooltip placement='right' title='Open my profile in a new tab' autoAdjustOverflow={false} >
                    <a href='https://linkedin.com/in/jaime-salazar-lahera' target='_blank'><Icon type='linkedin' className='logo' /></a>
                </Tooltip>
            </Row>
            <Row>
                Checkout
                <Tooltip placement='right' title='Open my repo in a new tab' autoAdjustOverflow={false} >
                    <a href='https://github.com/jsalaz1989' target='_blank'><Icon type='github' className='logo' /></a>
                </Tooltip>
            </Row>
        </Col>
    </Row>
)