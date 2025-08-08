import { ImageResponse } from 'next/server';

export const runtime = 'edge'; // required for OG images

export async function GET() {
  return new ImageResponse(
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
          background: 'linear-gradient(135deg, #f0a, #09f)',
          color: 'white',
        }}
      >
        My Open Graph Image
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
