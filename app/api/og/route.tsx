import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 64,
          fontWeight: 700,
          background: 'linear-gradient(135deg, #ff7ab6, #6aa8ff)',
          color: 'white',
        }}
      >
        Portfolio
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
