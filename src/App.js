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
        minHeight: '100vh',

        background: '#000',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        position: 'relative',
        overflow: 'hidden',

        paddingLeft: '24px',
        paddingRight: '24px',

        paddingTop: 'max(48px, env(safe-area-inset-top))',
        paddingBottom: '20px',

        boxSizing: 'border-box',

        fontFamily:
          "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Fonts */}
      <link
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800;12..96,900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .display {
          font-family: 'Bricolage Grotesque', sans-serif;
          letter-spacing: -0.04em;
        }

        @keyframes glow-pulse {
          0%,100% {
            opacity:.3;
            transform:scale(1);
          }

          50% {
            opacity:.5;
            transform:scale(1.08);
          }
        }

        .glow-anim {
          animation: glow-pulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* Glow */}
      <div
        className="glow-anim"
        style={{
          position: 'absolute',
          top: '-128px',
          right: '-80px',

          width: '320px',
          height: '320px',

          borderRadius: '50%',

          background:
            'radial-gradient(circle,#a78bfa 0%,transparent 70%)',

          filter: 'blur(70px)',

          pointerEvents: 'none',
        }}
      />

      <div
        className="glow-anim"
        style={{
          position: 'absolute',
          top: '33%',
          left: '-128px',

          width: '288px',
          height: '288px',

          borderRadius: '50%',

          background:
            'radial-gradient(circle,#6ee7b7 0%,transparent 70%)',

          filter: 'blur(70px)',

          pointerEvents: 'none',

          animationDelay: '1s',
        }}
      />

      <div
        className="glow-anim"
        style={{
          position: 'absolute',
          bottom: '-80px',
          right: '10%',

          width: '280px',
          height: '280px',

          borderRadius: '50%',

          background:
            'radial-gradient(circle,#f9a8d4 0%,transparent 70%)',

          filter: 'blur(80px)',

          opacity: 0.35,

          pointerEvents: 'none',

          animationDelay: '0.5s',
        }}
      />

      <div
        className="glow-anim"
        style={{
          position: 'absolute',
          bottom: '-60px',
          left: '10%',

          width: '260px',
          height: '260px',

          borderRadius: '50%',

          background:
            'radial-gradient(circle,#a78bfa 0%,transparent 70%)',

          filter: 'blur(80px)',

          opacity: 0.25,

          pointerEvents: 'none',

          animationDelay: '1.5s',
        }}
      />

      {/* 상단 */}
      <div
        style={{
          marginTop: '4px',
          position: 'relative',
          zIndex: 1,
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
              width: '24px',
              height: '4px',
              borderRadius: '2px',
              background: GRADIENT,
            }}
          />

          <p
            className="display"
            style={{
              fontSize: '11px',
              letterSpacing: '0.3em',
              fontWeight: 900,
              textTransform: 'uppercase',

              margin: 0,

              color: 'transparent',

              background: GRADIENT,

              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Vocal Practice Manager
          </p>
        </div>
      </div>

      {/* 캐릭터 */}
      <div
        style={{
          flex: 1,

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: 'absolute',

            width: '250px',
            height: '250px',

            borderRadius: '50%',

            background: GRADIENT,

            filter: 'blur(55px)',

            opacity: 0.22,
          }}
        />

        <img
          src="/yuwol.png"
          alt="유월이"
          style={{
            width: '240px',
            height: '240px',

            objectFit: 'contain',

            position: 'relative',
            zIndex: 1,

            filter:
              'drop-shadow(0 0 18px rgba(167,139,250,0.28))',
          }}
        />
      </div>

      {/* 하단 */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p
          className="display"
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
          className="display"
          style={{
            fontSize: '44px',
            fontWeight: 900,
            lineHeight: 0.95,

            margin: '0 0 10px',

            color: TEXT,
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

        {/* 버튼 */}
        <button
          onClick={onNext}
          style={{
            width: '100%',

            padding: '14px',

            borderRadius: '16px',
            border: 'none',

            cursor: 'pointer',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',

            background: GRADIENT,

            boxShadow:
              '0 8px 32px rgba(167,139,250,.3)',
          }}
        >
          <span
            className="display"
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

  return (
    <Welcome
      onNext={() => setScreen('invite')}
    />
  );
}
