import ylangylang from './ylangylang.mp4'
import { useRef, forwardRef, useImperativeHandle } from 'react'

function Video(props, ref) {

    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))

    return (
        <video
            width="600px"
            height="600px"
            ref={videoRef}
            src={ylangylang}
        />
    )
}

export default forwardRef(Video)