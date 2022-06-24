import { memo } from 'react'

function Content_UseCallback({ onIncrease }) {
    console.log('re-render')
    return (
        <div>
            <h1>This is Content Use Callback Hook </h1>
            <button onClick={() => onIncrease()}>Start</button>
        </div>
    )
}

export default memo(Content_UseCallback)