import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
    return new ImageResponse(
        (
        <div
        style= {{
        fontSize: 180,
        fontWeight: 'bold',
        color: 'white',
        background: 'salmon',
        width: '100%',
        height: '100%',
        padding: '50px 200px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    }}
      >
 <img
          width="512"
          height="512"
          src={`https://www.dadgippity.com/favicon.png`}
        />
        DadGippity
    </div>
    ),
{
        width: 1600,
        height: 900,
    },
  );
}