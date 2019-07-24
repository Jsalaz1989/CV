import './MyContent.css'

import { Divider, Button, Row, Col, Icon, Modal, Carousel } from 'antd'

import GraduationIcon from '../static/graduation-hat.svg'
import BriefcaseIcon from '../static/briefcase.svg'

import { useState } from 'react'

import { tiles, experiences, skills } from './MyContentData'

// function enableTileOverflow() {
//     console.log('enableTileOverflow()')
//     document.getElementsByClassName('tiles-container')[0].style.overflow = 'visible'
// }

// function disableTileOverflow() {
//     console.log('disableTileOverflow()')
//     document.getElementsByClassName('tiles-container')[0].style.overflowY = 'visible'
//     document.getElementsByClassName('tiles-container')[0].style.overflowX = 'scroll'
// }

function enableTileOverflow() {
    console.log('enableTileOverflow()')
    document.getElementsByClassName('tiles-container')[0].style.clipath = '5%'
}

function disableTileOverflow() {
    console.log('disableTileOverflow()')
    document.getElementsByClassName('tiles-container')[0].style.left = 0
}



const Tile = ({ tile }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='tile' onClick={() => setOpen(!open)} id={tile.title} >
                <img className='tile-image' src={tile.source} />
                <div className='tile-details'>
                    <div className='tile-title'>{tile.title}</div>
                </div>
            </div>
            <Modal
                title={tile.title}
                centered
                visible={open}
                onOk={() => setOpen(true)}
                onCancel={() => setOpen(false)}
                zIndex={99999}
                mask={true}
                closable={false}
                footer={null}
            >
                <Row type="flex" justify="space-around" align='middle'>
                    <Col span={12}>
                        {tile.paragraphs.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
                        {tile.bullets && 
                            <ul>
                                {tile.bullets.map((bullet, key) => <li key={key}>{bullet}</li>)}
                            </ul>
                        }
                    </Col>
                    <Col span={12}>
                        <Carousel>
                            {tile.slides.map((slide, key) => 
                                <div key={key} 
                                // style={{ backgroundImage: `url(static/images/${slide.source})` }}
                                >
                                    {(slide.source.includes('jpg') || slide.source.includes('jpeg'))
                                        ? <div className='slide-image' style={{ backgroundImage: `url(static/images/${slide.source})` }} />
                                        : <iframe 
                                                // width={100} 
                                                height={400}
                                                src={slide.source} 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen
                                                title={slide.source}
                                                crossOrigin='true'
                                            />
                                    }
                                    <p>{slide.description}</p>
                                </div>
                            )}
                        </Carousel>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}


const Experience = ({ experience }) => (
    <div id={experience.id} className='exp-skill'>
        <Row type="flex" justify="space-between" align='middle' className='butt'>
            <div className='position'>{experience.position}</div>
            <div>{experience.date}</div>                
        </Row>
        <Row>
            {experience.organization}, <span className='location'>{experience.location}</span>
        </Row>
        <ul>
            {/* {experience.bullets.map((bullet, key) => <li key={key}>{bullet}</li>)} */}
            {experience.bullets.map((bullet, key) => <li key={key} dangerouslySetInnerHTML={{__html: bullet }} />)}
        </ul>
    </div>
)

const Skill = ({ skill }) => (
    <div id={skill.id} className='exp-skill'>
        <Row type="flex" justify="start" align='middle' className='position'>
            {skill.name}
        </Row>
        <ul>
            {skill.bullets.map((detail, key) => <li key={key} dangerouslySetInnerHTML={{__html: detail }} />)}
        </ul>
    </div>
)

export default () => (
    <div className='content-container'>
        <div className='entry'>
            <Divider className='divide'><Icon type="user" className='divider-icon' id='bio' />Bio</Divider>
            <p>Graduate in MS Electromechanical Engineering at UPM (Spain) with a diverse background.</p>
            <p>Interested in programming, robotics, automation (especially RPA), solar energy, and the environment.</p>
            <p>Continuous learner.</p>
            <p className='cv-container'>
                Feel free to <a href='../static/CV - Jaime Salazar Lahera.pdf' title='CV - Jaime Salazar Lahera' download='CV - Jaime Salazar Lahera'>download my CV</a> 
            </p>
        </div>
        <div className='entry'>
            <Divider><Icon type="trophy" className='divider-icon' />Hightlights</Divider>
            <p>Take a look at some of my projects, achievements, and experiences through the years</p>
            <div className='tiles-container'>
                <Tile tile={tiles.robot} />
                <Tile tile={tiles.solar} />
                <Tile tile={tiles.rpa} />
                <Tile tile={tiles.english} />
                <Tile tile={tiles.bollos} />
                <Tile tile={tiles.dobot} />
            </div>
            <p>I like to dabble in full-stack web programming and experiment with different technologies</p>
            <ul>
                <li>This interactive CV/portfolio is built with NextJS, a server-side rendering framework for ReactJS</li>
                <li>I have a hobby project at <a href='http://jplusplus.pythonanywhere.com/' title="N2T">jplusplus.pythonanywhere.com</a>, where I'm trying to build a Single-Page Application (SPA) with a ReactJS frontend and a Flask (Python) backend connected to a PostGreSQL database</li>
            </ul>
        </div>
        <div className='entry'>
            <Divider><GraduationIcon className='divider-icon-2' />Academics</Divider>
            <Experience experience={experiences.masters} />
            <Experience experience={experiences.coursesETSIDI} />
            <Experience experience={experiences.coursesMC} />
            <Experience experience={experiences.undergrad} />
            <Experience experience={experiences.associates} />
            <Experience experience={experiences.montes} />
        </div>
        <div className='entry'>
            <Divider><BriefcaseIcon className='divider-icon-2' />Professional</Divider>
            <Experience experience={experiences.solar1} />
            <Experience experience={experiences.solar2} />
        </div>
        <div className='entry'>
            <Divider><Icon type="star" className='divider-icon-2' />Skills</Divider>
            <Skill skill={skills.english} />
            <div className='skill-bg'>
                <Skill skill={skills.software} />
                <Skill skill={skills.coding} />
            </div>
        </div>
    </div>
)