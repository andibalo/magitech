import { TimelineRow } from "./TimelineRow"

interface TimelineProps {
    data: CourseInfo[]
}

export const Timeline = ({ data }: TimelineProps) => {

    return (
        <>
            <TimelineRow isStart />
            {
                data && data.length > 0 && data.map((dataItem, index) =>
                    <TimelineRow
                        index={index}
                        data={dataItem}
                    />)
            }
            <TimelineRow isEnd />
        </>
    )
}