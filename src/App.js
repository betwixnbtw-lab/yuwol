import React from 'react';
import { ArrowRight } from 'lucide-react';

const GRADIENT = 'linear-gradient(135deg, #fdba74 0%, #f9a8d4 30%, #6ee7b7 65%, #a78bfa 100%)';
const TEXT = '#fafafa';
const TEXT_MUTED = '#808080';

export default function App() {
  return (
    <>
      <style>{`
        html, body, #root {
          margin: 0; padding: 0;
          width: 100%; height: 100%;
          background: #000;
          overflow: hidden;
        }
        * { box-sizing: border-box; }
      `}</style>

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

        {/* 글로우 */}
        <div style={{ position:'absolute', top:'-100px', right:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle,#a78bfa 0%,transparent 70%)', filter:'blur(70px)', opacity:0.4, pointerEvents:'none', zIndex:0 }} />
        <div style={{ position:'absolute', top:'30%', left:'-100px', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle,#6ee7b7 0%,transparent 70%)', filter:'blur(70px)', opacity:0.3, pointerEvents:'none', zIndex:0 }} />
        <div style={{ position:'absolute', bottom:'0', right:'20%', width:'260px', height:'260px', borderRadius:'50%', background:'radial-gradient(circle,#f9a8d4 0%,transparent 70%)', filter:'blur(70px)', opacity:0.3, pointerEvents:'none', zIndex:0 }} />

        {/* 라벨 */}
        <div style={{ display:'flex', alignItems:'center', gap:'8px', position:'relative', zIndex:1, flexShrink:0 }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:GRADIENT, flexShrink:0 }} />
          <p style={{ fontSize:'10px', letterSpacing:'0.3em', fontWeight:900, textTransform:'uppercase', color:TEXT_MUTED, margin:0 }}>
            Vocal Practice Manager
          </p>
        </div>

        {/* 유월이 */}
        <div style={{ flex:1, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:1 }}>
          <div style={{ position:'absolute', width:'260px', height:'260px', borderRadius:'50%', background:GRADIENT, filter:'blur(60px)', opacity:0.5 }} />
          <img
            src="/yuwol.png"
            alt="유월이"
            style={{ width:'260px', height:'260px', objectFit:'contain', position:'relative', zIndex:1, filter:'drop-shadow(0 0 20px rgba(167,139,250,0.5))' }}
          />
        </div>

        {/* 텍스트 */}
        <div style={{ position:'relative', zIndex:1, flexShrink:0 }}>
          <p style={{ fontSize:'14px', letterSpacing:'0.25em', fontWeight:900, textTransform:'uppercase', margin:'0 0 8px', background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            YUWOL
          </p>
          <h1 style={{ fontSize:'48px', fontWeight:900, lineHeight:'0.95', margin:'0 0 12px', color:TEXT, letterSpacing:'-0.04em' }}>
            Practice<br/>
            <span style={{ background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              or Die.
            </span>
          </h1>
          <p style={{ fontSize:'14px', fontWeight:700, margin:'0 0 24px', color:TEXT_MUTED }}>
            당신은 매일 연습하고 있는가.
          </p>
          <button style={{ width:'100%', padding:'16px', borderRadius:'16px', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', background:GRADIENT, boxShadow:'0 8px 32px rgba(167,139,250,0.3)' }}>
            <span style={{ fontSize:'16px', fontWeight:900, color:'#000' }}>시작하기</span>
            <ArrowRight size={18} strokeWidth={3} color="#000" />
          </button>
          <p style={{ textAlign:'center', fontSize:'11px', margin:'12px 0 0', color:'#555' }}>
            계속하면 약관·개인정보 처리에 동의해
          </p>
        </div>

      </div>
    </>
  );
}
