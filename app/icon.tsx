import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Outer hexagon */}
                    <path
                        d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                        fill="rgba(255, 255, 255, 0.2)"
                        stroke="rgba(255, 255, 255, 0.9)"
                        strokeWidth="1"
                    />
                    {/* Inner geometric shapes */}
                    <circle cx="12" cy="12" r="6" fill="rgba(255, 255, 255, 0.15)" />
                    <path
                        d="M12 6L16 9L16 15L12 18L8 15L8 9L12 6Z"
                        fill="rgba(255, 255, 255, 0.3)"
                        stroke="rgba(255, 255, 255, 0.8)"
                        strokeWidth="0.8"
                    />
                    <circle cx="12" cy="12" r="2.5" fill="rgba(255, 255, 255, 0.9)" />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    )
}
