import { Menu, Icon, Tooltip, Anchor } from 'antd'
import GraduationIcon from '../static/graduation-hat.svg'
import BriefcaseIcon from '../static/briefcase.svg'


import './MyMenu.css'

const { SubMenu } = Menu
const { Link } = Anchor


import { copyEmail } from '../helpers/copyEmail'

import { useState } from 'react'

import { tiles } from '../components/MyContentData'

export default () => {
	const handleClick = e => { console.log('click ', e) }

	const [submenuHovered, setSubmenuHovered] = useState(null)

	function openHighlight(id) {
		document.getElementById(id).click()
	}

	return (
		<div className='menu-border'>
			<Menu
				onClick={handleClick}
				// style={{ width: 256 }}
				// defaultSelectedKeys={['1']}
				defaultSelectedKeys={[]}
				defaultOpenKeys={['highlights']}
				mode="inline"
			>
				<SubMenu
					key="contact"
					title={<><Icon type="mail" /><span>Contact</span></>}
				>
					<Menu.Item key="email" onClick={copyEmail}>
						<Tooltip placement='right' title='Copy my email to your clipboard' autoAdjustOverflow={false} >
						<a>
							Email
						</a>
						</Tooltip>
					</Menu.Item>
					<Menu.Item key="linkedin">
						<Tooltip placement='right' title='Open my profile in a new tab' autoAdjustOverflow={false} >
						<a href='https://linkedin.com/in/jaime-salazar-lahera' target='_blank'>
							LinkedIn
						</a>
						</Tooltip>
					</Menu.Item>
					<Menu.Item key="github">
						<Tooltip placement='right' title='Open my repo in a new tab' autoAdjustOverflow={false} >
						<a href='https://github.com/jsalaz1989' target='_blank'>
							GitHub
						</a>
						</Tooltip>  
					</Menu.Item>
				</SubMenu>
				<SubMenu
					key="bio"
					title={<><Icon type="user" /><span>Bio</span></>}
				>
					<Menu.Item key="about">
						<Anchor offsetTop={30} affix={false}>
							<Link href="#bio" title='About' />
						</Anchor>
					</Menu.Item>
					<Menu.Item key="cv">
						<Tooltip placement='right' title='Download as PDF' autoAdjustOverflow={false} >
							<a href='../static/cv.pdf' title='CV - Jaime Salazar Lahera' download='CV - Jaime Salazar Lahera'>
								CV
							</a> 
						</Tooltip>
					</Menu.Item>
				</SubMenu>
				<SubMenu
					key="highlights"
					title={<><Icon type="trophy" /><span>Highlights</span></>}
				>
					<Menu.Item key="master"	onClick={() => openHighlight(tiles.robot.title)}>Master's Thesis</Menu.Item>
					<Menu.Item key="solar" onClick={() => openHighlight(tiles.solar.title)}>Solar</Menu.Item>
					<Menu.Item key="rpa" onClick={() => openHighlight(tiles.rpa.title)}>RPA</Menu.Item>
					<Menu.Item key="english" onClick={() => openHighlight(tiles.english.title)}>English</Menu.Item>
					<Menu.Item key="plc" onClick={() => openHighlight(tiles.bollos.title)}>PLC</Menu.Item>
					<Menu.Item key="dobot" onClick={() => openHighlight(tiles.dobot.title)}>Dobot</Menu.Item>
				</SubMenu>
				<SubMenu
					key="academics"
					title={
						<div
							onMouseOver={()=>setSubmenuHovered('academics')} 
							onMouseOut={()=>setSubmenuHovered(null)}
						>
							<GraduationIcon 
								className={`custom-icon ${submenuHovered === 'academics' ? 'custom-icon-hover' : 'custom-icon-nohover'}`} 
							/>
							<span>Academics</span>
						</div>
					}
				>
					<Menu.Item key="master">
						<Anchor offsetTop={30} affix={false}>
							<Link href="#masters" title="Master's Degree" />
						</Anchor>
					</Menu.Item>
					<Menu.Item key="undergrad">
						<Anchor offsetTop={30} affix={false}>
							<Link href="#undergrad" title="Bachelor's Degree" />
						</Anchor>
					</Menu.Item>
				</SubMenu>
				<SubMenu
					key="professional"
					title={
						<div
							onMouseOver={()=>setSubmenuHovered('professional')} 
							onMouseOut={()=>setSubmenuHovered(false)}
						>
							<BriefcaseIcon 
								className={`custom-icon ${submenuHovered === 'professional' ? 'custom-icon-hover' : 'custom-icon-nohover'}`} 
							/>
							<span>Professional</span>
						</div>
					}
				>
					<Menu.Item key="solar1">
						<Anchor offsetTop={30} affix={false}>
							<Link href="#solar1" title="PV Sales and Tech" />
						</Anchor>
					</Menu.Item>
					<Menu.Item key="solar2">
						<Anchor offsetTop={30} affix={false}>
							<Link href="#solar2" title="PV Apprentice" />
						</Anchor>
					</Menu.Item>
				</SubMenu>
				<SubMenu
					key="skills"
					title={<><Icon type='star' /><span>Skills</span></>}
				>
					<Menu.Item key="english">
						<Anchor offsetTop={30} affix={false}>
							<Link href="#english" title="Fluent English" />
						</Anchor>
					</Menu.Item>
					<Menu.Item key="rpa">
						<Anchor offsetTop={30} affix={false}>
							<Link href="#rpa" title="RPA" />
						</Anchor>
					</Menu.Item>
					<Menu.Item key="coding">
						<Anchor offsetTop={30} affix={false}>
							<Link href="#coding" title="Coding" />
						</Anchor>
					</Menu.Item>
				</SubMenu>
			</Menu>
		</div>
	)
}