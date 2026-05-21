import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

import InviteCode from './InviteCode';
import AboutYou from './AboutYou';

const GRADIENT =
  'linear-gradient(135deg, #fdba74 0%, #f9a8d4 30%, #6ee7b7 65%, #a78bfa 100%)';

const TEXT = '#fafafa';
const TEXT_MUTED = '#808080';

function Welcome({ onNext }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100dvh',

        background: '#000',

        position: 'relative',

        overflow: 'hidden',

        paddingLeft: '28px',
        paddingRight: '28px',

        paddingTop: '70px',
        paddingBottom: '26px',

        boxSizing: 'border-box',

        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          right: '-40px',

          width: '240px',
          height: '240px',

          borderRadius: '50%',

          background:
            'radial-gradient(circle,#a78bfa 0%,transparent 55%)',

          filter: 'blur(55px)',

          opacity: 0.18,

          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '-90px',

          width: '220px',
          height: '220px',

          borderRadius: '50%',

          background:
            'radial-gradient(circle,#6ee7b7 0%,transparent 55%)',

          filter: 'blur(50px)',

          opacity: 0.14,

          pointerEvents: 'none',
        }}
      />

      {/* 상단 */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,

          marginBottom: '12px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: GRADIENT,
            }}
          />

          <p
            style={{
              fontSize: '10px',
              letterSpacing: '0.3em',
              fontWeight: 900,
              textTransform: 'uppercase',

              color: TEXT_MUTED,

              margin: 0,
            }}
          >
            Vocal Practice Manager
          </p>
        </div>
      </div>

      {/* 캐릭터 */}
      <div
        style={{
          height: '360px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          position: 'relative',
          zIndex: 1,

          marginTop: '12px',
        }}
      >
        <div
          style={{
            position: 'absolute',

            width: '240px',
            height: '240px',

            borderRadius: '50%',

            background: GRADIENT,

            filter: 'blur(50px)',

            opacity: 0.18,
          }}
        />

        <img
          src="/yuwol.png"
          alt="유월이"
          style={{
            width: '235px',
            height: '235px',

            objectFit: 'contain',

            position: 'relative',
            zIndex: 1,

            filter:
              'drop-shadow(0 0 12px rgba(167,139,250,0.25))',
          }}
        />
      </div>

      {/* 하단 */}
      <div
        style={{
          marginTop: 'auto',

          transform: 'translateY(-70px)',

          position: 'relative',
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '0.25em',
            fontWeight: 900,
            textTransform: 'uppercase',

            margin: '0 0 8px',

            background: GRADIENT,

            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          YUWOL
        </p>

        <h1
          style={{
            fontSize: '44px',
            fontWeight: 900,
            lineHeight: '0.95',

            margin: '0 0 10px',

            color: TEXT,

            letterSpacing: '-0.04em',
          }}
        >
          Practice
          <br />

          <span
            style={{
              background: GRADIENT,

              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            or Die.
          </span>
        </h1>

        <p
          style={{
            fontSize: '13px',
            fontWeight: 700,

            margin: '0 0 20px',

            color: TEXT_MUTED,
          }}
        >
          당신은 매일 연습하고 있는가.
        </p>

        <button
          onClick={onNext}
          style={{
            width: '100%',

            padding: '16px',

            borderRadius: '16px',
            border: 'none',

            cursor: 'pointer',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',

            background: GRADIENT,

            boxShadow:
              '0 8px 24px rgba(167,139,250,0.22)',
          }}
        >
          <span
            style={{
              fontSize: '16px',
              fontWeight: 900,
              color: '#000',
            }}
          >
            시작하기
          </span>

          <ArrowRight
            size={18}
            strokeWidth={3}
            color="#000"
          />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState('welcome');

  if (screen === 'invite') {
    return (
      <InviteCode
        onNext={() => setScreen('about')}
        onBack={() => setScreen('welcome')}
      />
    );
  }

  if (screen === 'about') {
    return (
      <AboutYou
        onNext={() => setScreen('welcome')}
        onBack={() => setScreen('invite')}
      />
    );
  }

  return <Welcome onNext={() => setScreen('invite')} />;
}
