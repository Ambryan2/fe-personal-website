import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Projects = () => {

    return(
<VerticalTimeline
    lineColor='lightgrey'
>
    <VerticalTimelineElement
        // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="NeoSelf"
        iconStyle={{ background: 'black', color: '#fff' }}
    >
        <div className='project-img'>
            <img className='spec-img' alt="iron-man" src='https://gh.cdn.sewest.net/assets/ident/news/d81c6286/Avenger_Blog_IronMan_Imagery5-q4grmvi70.jpg?quality=65'/>
        </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        date="Social E-cards"
        iconStyle={{ background: 'black', color: '#fff' }}
    >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        date="Django Library"
        iconStyle={{ background: 'black', color: '#fff' }}
    >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>
        User Experience, Visual Design
        </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
        date="Miscellaneous"
        iconStyle={{ background: 'black', color: '#fff' }}
    >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>
        User Experience, Visual Design
        </p>
    </VerticalTimelineElement>
    
</VerticalTimeline>
    )
}
