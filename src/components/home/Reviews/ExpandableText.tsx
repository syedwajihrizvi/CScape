import { useState } from "react"

interface Props {
    text: string
}

function ExpandableText({text}: Props) {
    const [expand, setExpand] = useState(false)
    const expandable = text.length > 125

    const renderText = () => {
        if (expandable && !expand)
            return text.slice(0, 125)
        return text
    }

    return (
        <>
        {renderText()}
        {expandable && !expand && <span className='expandable-icon' onClick={() => setExpand(true)}> ...</span>}
        {expand && <span className='expandable-icon' onClick={() => setExpand(false)}> ⇧ </span>}
        </>
    )
}

export default ExpandableText