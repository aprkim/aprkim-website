import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: '#6E6282',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '40px',
          color: 'white',
          fontWeight: 600,
          fontFamily: 'system-ui, sans-serif',
          letterSpacing: '-2px',
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}
