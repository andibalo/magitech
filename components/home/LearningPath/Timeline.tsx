import { TimelineRow } from "./TimelineRow"

interface TimelineProps {
    data: CourseInfo[]
    onViewSyllabusClick: (data: CourseModule[], moduleTitle: string) => void
}

export const Timeline = ({ data, onViewSyllabusClick }: TimelineProps) => {

    return (
        <>
            <TimelineRow isStart onViewSyllabusClick={() => null} />
            {
                data && data.length > 0 && data.map((dataItem, index) =>
                    <TimelineRow
                        key={index + dataItem.price}
                        index={index}
                        data={dataItem}
                        onViewSyllabusClick={onViewSyllabusClick}
                    />)
            }
            <TimelineRow isEnd onViewSyllabusClick={() => null}/>
        </>
    )
}