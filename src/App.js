import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import InviteCode from './InviteCode';
import AboutYou from './AboutYou';

const GRADIENT = 'linear-gradient(135deg, #fdba74 0%, #f9a8d4 30%, #6ee7b7 65%, #a78bfa 100%)';
const TEXT = '#fafafa';
const TEXT_MUTED = '#808080';

function Welcome({ onNext }) {
  return (
    <div style={{
      width: '100%', height: '100dvh', background: '#000', display: 'flex',
      flexDirection: 'column', position: 'relative', overflow: 'hidden',
      paddingLeft: '28px', paddingRight: '28px',
      paddingTop: 'max(48px, env(safe-area-inset-top))',
      paddingBottom: 'max(32px, env(safe-area-inset-bottom))',
    }}>
      {/* 1. 상단 및 중단 조명 (원본 값 100% 동일, 색감 유지) */}
      <div style={{ position:'absolute', top:'-100px', right:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle,#a78bfa 0%,transparent 70%)', filter:'blur(70px)', opacity:0.4, pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:'30%', left:'-100px', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle,#6ee7b7 0%,transparent 70%)', filter:'blur(70px)', opacity:0.3, pointerEvents:'none' }} />
      
      {/* 2. 하단 조명 수정: 원본의 투명도(0.35, 0.25)를 유지하면서, 밑으로 늘어나는 공간만 자연스럽게 채우도록 펄져나가는 범위(blur)와 위치만 조절 */}
      <div style={{ position:'absolute', bottom:'-130px', right:'10%', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle,#f9a8d4 0%,transparent 70%)', filter:'blur(90px)', opacity:0.35, pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-110px', left:'10%', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle,#a78bfa 0%,transparent 70%)', filter:'blur(90px)', opacity:0.25, pointerEvents:'none' }} />

      <div style={{ display:'flex', alignItems:'center', gap:'8px', position:'relative', zIndex:1, flexShrink:0 }}>
        <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:GRADIENT }} />
        <p style={{ fontSize:'10px', letterSpacing:'0.3em', fontWeight:900, textTransform:'uppercase', color:TEXT_MUTED, margin:0 }}>
          Vocal Practice Manager
        </p>
      </div>
      <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:1 }}>
        <div style={{ position:'absolute', width:'260px', height:'260px', borderRadius:'50%', background:GRADIENT, filter:'blur(60px)', opacity:0.5 }} />
        <img src="/yuwol.png" alt="유월이" style={{ width:'260px', height:'260px', objectFit:'contain', position:'relative', zIndex:1, filter:'drop-shadow(0 0 20px rgba(167,139,250,0.5))' }} />
      </div>
      <div style={{ position:'relative', zIndex:1, flexShrink:0 }}>
        <p style={{ fontSize:'14px', letterSpacing:'0.25em', fontWeight:900, textTransform:'uppercase', margin:'0 0 8px', background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
          YUWOL
        </p>
        <h1 style={{ fontSize:'48px', fontWeight:900, lineHeight:'0.95', margin:'0 0 12px', color:TEXT, letterSpacing:'-0.04em' }}>
          Practice<br/>
          <span style={{ background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>or Die.</span>
        </h1>
        <p style={{ fontSize:'14px', fontWeight:700, margin:'0 0 24px', color:TEXT_MUTED }}>
          당신은 매일 연습하고 있는가.
        </p>
        
        {/* 시작하기 버튼 (동의 문구 깔끔하게 삭제) */}
        <button onClick={onNext} style={{ width:'100%', padding:'16px', borderRadius:'16px', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', background:GRADIENT, boxShadow:'0 8px 32px rgba(167,139,250,0.3)' }}>
          <span style={{ fontSize:'16px', fontWeight:900, color:'#000' }}>시작하기</span>
          <ArrowRight size={18} strokeWidth={3} color="#000" />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState('welcome');
  if (screen === 'invite') return <InviteCode onNext={() => setScreen('about')} onBack={() => setScreen('welcome')} />;
  if (screen === 'about') return <AboutYou onNext={() => setScreen('welcome')} onBack={() => setScreen('invite')} />;
  return <Welcome onNext={() => setScreen('invite')} />;
}
