import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import InviteCode from './InviteCode';
import AboutYou from './AboutYou';

const GRADIENT =
  'linear-gradient(135deg, #fdba74 0%, #f9a8d4 30%, #6ee7b7 65%, #a78bfa 100%)';

const TEXT = '#fafafa';
const TEXT_MUTED = '#808080';

function Glow({ style }) {
  return (
    <div
      style={{
        position: 'absolute',
        borderRadius: '50%',
        pointerEvents: 'none',
        willChange: 'transform',
        transform: 'translateZ(0)',
        ...style,
      }}
    />
  );
}

function ScreenWrapper({ children }) {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100dvh',

        background: '#000',

        display: 'flex',
        flexDirection: 'column',

        position: 'relative',
        overflow: 'hidden',

        paddingLeft: '28px',
        paddingRight: '28px',

        paddingTop: '48px',

        /* 핵심 */
        paddingBottom: 'calc(env(safe-area-inset-bottom) + 20px)',

        boxSizing: 'border-box',

        /* iOS 깜빡임 방지 */
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    >
      {/* Glow */}
      <Glow
        style={{
          top: '-80px',
          right: '-50px',
          width: '240px',
          height: '240px',
          background:
            'radial-gradient(circle, rgba(167,139,250,0.22) 0%, transparent 55%)',
          filter: 'blur(45px)',
          opacity: 0.16,
        }}
      />

      <Glow
        style={{
          top: '35%',
          left: '-90px',
          width: '220px',
          height: '220px',
          background:
            'radial-gradient(circle, rgba(110,231,183,0.18) 0%, transparent 55%)',
          filter: 'blur(45px)',
          opacity: 0.14,
        }}
      />

      <Glow
        style={{
          bottom: '-70px',
          right: '5%',
          width: '240px',
          height: '240px',
          background:
            'radial-gradient(circle, rgba(249,168,212,0.18) 0%, transparent 55%)',
          filter: 'blur(50px)',
          opacity: 0.15,
        }}
      />

      <Glow
        style={{
          bottom: '-60px',
          left: '5%',
          width: '220px',
          height: '220px',
          background:
            'radial-gradient(circle, rgba(167,139,250,0.14) 0%, transparent 55%)',
          filter: 'blur(50px)',
          opacity: 0.12,
        }}
      />

      {children}
    </div>
  );
}

function Welcome({ onNext }) {
  return (
    <ScreenWrapper>
      {/* 상단 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          position: 'relative',
          zIndex: 1,
          flexShrink: 0,
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
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            background: GRADIENT,
            filter: 'blur(45px)',
            opacity: 0.18,
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
            filter: 'drop-shadow(0 0 10px rgba(167,139,250,0.18))',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {/* 텍스트 */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          flexShrink: 0,
        }}
      >
        <p
          style={{
            fontSize: '14px',
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
            fontSize: '48px',
            fontWeight: 900,
            lineHeight: '0.95',
            margin: '0 0 12px',
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
            fontSize: '14px',
            fontWeight: 700,
            margin: '0 0 24px',
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
            padding: '16px',

            borderRadius: '16px',
            border: 'none',

            cursor: 'pointer',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',

            background: GRADIENT,

            boxShadow: '0 8px 20px rgba(167,139,250,0.16)',

            transform: 'translateZ(0)',
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
    </ScreenWrapper>
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
