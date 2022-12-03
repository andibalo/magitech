import { TimelineRow } from "./TimelineRow"

interface TimelineProps {
    data: CourseInfo[]
    onViewSyllabusClick: (data: CourseModule[], moduleTitle: string) => void
    tabIndex: number
}

export const Timeline = ({ data, onViewSyllabusClick, tabIndex }: TimelineProps) => {

    return (
        <>
            <TimelineRow tabIndex={tabIndex} isStart onViewSyllabusClick={() => null} />
            {
                data && data.length > 0 && data.map((dataItem, index) =>
                    <TimelineRow
                        tabIndex={tabIndex}
                        key={index + dataItem.price}
                        index={index}
                        data={dataItem}
                        onViewSyllabusClick={onViewSyllabusClick}
                    />)
            }
            <TimelineRow tabIndex={tabIndex} isEnd onViewSyllabusClick={() => null} />
        </>
    )
}