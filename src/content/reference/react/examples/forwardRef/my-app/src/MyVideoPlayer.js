import { forwardRef } from 'react';

// Section 1b: Playing and pausing a video
// Same pattern: expose the <video> DOM node so the parent can call play()/pause()
const MyVideoPlayer = forwardRef(function MyVideoPlayer({ src, type, width }, ref) {
    return (
        <video width={width} ref={ref}>
            <source src={src} type={type} />
        </video>
    );
});

export default MyVideoPlayer;
