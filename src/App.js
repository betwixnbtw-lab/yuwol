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
      width: '100%', 
      height: '100dvh', 
      background: '#000', 
      display: 'flex',
      flexDirection: 'column', 
      position: 'relative', 
      overflow: 'hidden',
      paddingLeft: '28px', 
      paddingRight: '28px',
      paddingTop: 'max(48px, env(safe-area-inset-top))',
      paddingBottom: 'max(32px, env(safe-area-inset-bottom))',
    }}>
      {/* 상단 및 중단 조명 */}
      <div style={{ position:'absolute', top:'-100px', right:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle,#a78bfa 0%,transparent 70%)', filter:'blur(70px)', opacity:0.4, pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:'30%', left:'-100px', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle,#6ee7b7 0%,transparent 70%)', filter:'blur(70px)', opacity:0.3, pointerEvents:'none' }} />
      
      {/* 🛠 하단 조명 수정: '홈 화면 추가' 시 늘어나는 영역까지 커버하도록 bottom 값을 더 내리고 크기를 키움 */}
      <div style={{ position:'absolute', bottom:'-180px', right:'-20px', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle,#f9a8d4 0%,transparent 70%)', filter:'blur(100px)', opacity:0.45, pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-160px', left:'-40px', width:'400px', height:'400px', borderRadius:'50%', background:'radial-gradient(circle,#6ee7b7 0%,transparent 70%)', filter:'blur(100px)', opacity:0.35, pointerEvents:'none' }} />

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
        
        {/* 🛠 시작하기 버튼 내부 & 개인정보 처리 동의 문구 삭제 완료 */}
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
