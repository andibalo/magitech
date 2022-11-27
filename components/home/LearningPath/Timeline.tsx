import { TimelineRow } from "./TimelineRow"


export const Timeline = () => {

    return (
        <>
            <TimelineRow isStart />
            <TimelineRow />
            <TimelineRow />
            <TimelineRow isEnd />
        </>
    )
}