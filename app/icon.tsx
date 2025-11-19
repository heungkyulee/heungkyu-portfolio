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
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: 'white',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                        stroke="#09090b"
                        strokeWidth="1.5"
                        strokeLinejoin="miter"
                    />
                    <circle cx="12" cy="11.5" r="4.5" stroke="#09090b" strokeWidth="1.5" />
                    <line x1="14.5" y1="14" x2="16.5" y2="16" stroke="#09090b" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
