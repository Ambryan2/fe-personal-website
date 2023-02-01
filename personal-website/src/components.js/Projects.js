import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { NeoSelf } from './Neoself';
import { Ecards } from './E-cards';
import { Habit } from './Habit';
import { Miscellaneous } from './Misc';

export const Projects = () => {

    return(
<VerticalTimeline
    lineColor='lightgrey'
>
    <VerticalTimelineElement
        // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="Dec 2022-Jan 2023"
        iconStyle={{ background: 'black', color: '#fff' }}
    >

        <NeoSelf />

    </VerticalTimelineElement>
    <VerticalTimelineElement
        date="Nov 2022"
        iconStyle={{ background: 'black', color: '#fff' }}
    >

        <Ecards />

    </VerticalTimelineElement>
    <VerticalTimelineElement
        date="Nov 2022"
        iconStyle={{ background: 'black', color: '#fff' }}
    >
        
        <Habit />

    </VerticalTimelineElement>
    <VerticalTimelineElement
        date="Sept - Nov 2022"
        iconStyle={{ background: 'black', color: '#fff' }}
    >
        
    <Miscellaneous />

    </VerticalTimelineElement>
    
</VerticalTimeline>
    )
}
