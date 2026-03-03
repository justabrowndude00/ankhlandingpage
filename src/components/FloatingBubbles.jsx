/* Floating bubbles that drift across the entire page background */

const BUBBLE_COUNT = 10

function generateBubbles() {
    return Array.from({ length: BUBBLE_COUNT }, (_, i) => {
        const size = Math.random() * 60 + 20 // 20px - 80px
        const isLarge = size > 50
        return {
            id: i,
            size,
            left: Math.random() * 100,
            animDuration: Math.random() * 20 + 20, // 20s - 40s
            delay: Math.random() * 15,
            opacity: isLarge ? 0.05 : 0.08,
            wobbleAmp: Math.random() * 60 + 20, // horizontal wobble range
            hue: 220, // blue
        }
    })
}

const bubbles = generateBubbles()

export default function FloatingBubbles() {
    return (
        <div className="floating-bubbles" aria-hidden="true">
            {bubbles.map((b) => (
                <div
                    key={b.id}
                    className="floating-bubble"
                    style={{
                        '--bubble-size': `${b.size}px`,
                        '--bubble-left': `${b.left}%`,
                        '--bubble-duration': `${b.animDuration}s`,
                        '--bubble-delay': `${b.delay}s`,
                        '--bubble-opacity': b.opacity,
                        '--bubble-wobble': `${b.wobbleAmp}px`,
                        '--bubble-hue': b.hue,
                    }}
                />
            ))}
        </div>
    )
}
