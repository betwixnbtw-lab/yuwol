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

        display: 'flex',
        flexDirection: 'column',

        position: 'relative',
        overflow: 'hidden',

        paddingLeft: '24px',
        paddingRight: '24px',

        /* InviteCode 화면이랑 맞춤 */
        paddingTop: 'max(48px, env(safe-area-inset-top))',
        paddingBottom: 'max(20px, env(safe-area-inset-bottom))',

        boxSizing: 'border-box',
      }}
    >
      {/* Glow */}
      <div
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

          opacity: 0.25,

          pointerEvents: 'none',
        }}
      />

      <div
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

          opacity: 0.18,

          pointerEvents: 'none',
        }}
      />

      <div
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

          opacity: 0.2,

          pointerEvents: 'none',
        }}
      />

      <div
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

          opacity: 0.15,

          pointerEvents: 'none',
        }}
      />

      {/* 상단 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',

          position: 'relative',
          zIndex: 1,

          flexShrink: 0,

          /* 살짝 아래 */
          marginTop: '10px',
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

      {/* 캐릭터 */}
      <div
        style={{
          flex: 1,

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          position: 'relative',
          zIndex: 1,

          /* 전체를 아래로 */
          marginTop: '28px',
        }}
      >
        <div
          style={{
            position: 'absolute',

            width: '240px',
            height: '240px',

            borderRadius: '50%',

            background: GRADIENT,

            filter: 'blur(55px)',

            opacity: 0.2,
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
              'drop-shadow(0 0 14px rgba(167,139,250,0.28))',
          }}
        />
      </div>

      {/* 하단 */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,

          flexShrink: 0,

          /* 버튼영역은 그대로 */
          marginBottom: '4px',
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

  return (
    <Welcome
      onNext={() => setScreen('invite')}
    />
  );
}
