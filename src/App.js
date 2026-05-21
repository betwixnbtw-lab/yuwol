import React from 'react';
import { ArrowRight } from 'lucide-react';

const GRADIENT = 'linear-gradient(135deg, #fdba74 0%, #f9a8d4 30%, #6ee7b7 65%, #a78bfa 100%)';
const TEXT = '#fafafa';
const TEXT_MUTED = '#808080';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#000',
      padding: '16px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '390px',
        background: '#000',
        borderRadius: '3rem',
        border: '6px solid #1a1a1a',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
        paddingBottom: '40px'
      }}>

        {/* 글로우 */}
        <div style={{ position:'absolute', top:'-100px', right:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle,#a78bfa 0%,transparent 70%)', filter:'blur(70px)', opacity:0.4, pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'30%', left:'-100px', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle,#6ee7b7 0%,transparent 70%)', filter:'blur(70px)', opacity:0.3, pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-80px', right:'20%', width:'260px', height:'260px', borderRadius:'50%', background:'radial-gradient(circle,#f9a8d4 0%,transparent 70%)', filter:'blur(70px)', opacity:0.3, pointerEvents:'none' }} />

        {/* 상태바 */}
        <div style={{ height:'32px', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 28px', fontSize:'12px', color:TEXT }}>
          <span style={{ fontWeight:700 }}>9:41</span>
          <span style={{ fontWeight:700 }}>●●●●</span>
        </div>

        {/* 라벨 */}
        <div style={{ padding:'16px 28px 0', display:'flex', alignItems:'center', gap:'8px' }}>
          <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:GRADIENT }} />
          <p style={{ fontSize:'10px', letterSpacing:'0.3em', fontWeight:900, textTransform:'uppercase', color:TEXT_MUTED }}>
            Vocal Practice Manager
          </p>
        </div>

        {/* 유월이 */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'40px 0', position:'relative' }}>
          <div style={{ position:'absolute', width:'240px', height:'240px', borderRadius:'50%', background:GRADIENT, filter:'blur(60px)', opacity:0.5 }} />
          <img
            src="/yuwol.png"
            alt="유월이"
            style={{ width:'220px', height:'220px', objectFit:'contain', position:'relative', zIndex:1, filter:'drop-shadow(0 0 20px rgba(167,139,250,0.5))' }}
          />
        </div>

        {/* 텍스트 */}
        <div style={{ padding:'0 28px 8px' }}>
          <p style={{ fontSize:'16px', letterSpacing:'0.25em', fontWeight:900, textTransform:'uppercase', marginBottom:'12px', background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            YUWOL
          </p>
          <h1 style={{ fontSize:'48px', fontWeight:900, lineHeight:'0.95', marginBottom:'16px', color:TEXT, letterSpacing:'-0.04em' }}>
            Practice<br/>
            <span style={{ background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              or Die.
            </span>
          </h1>
          <p style={{ fontSize:'14px', fontWeight:700, marginBottom:'32px', color:TEXT_MUTED }}>
            당신은 매일 연습하고 있는가.
          </p>
          <button style={{ width:'100%', padding:'16px', borderRadius:'16px', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', background:GRADIENT, boxShadow:'0 8px 32px rgba(167,139,250,0.3)' }}>
            <span style={{ fontSize:'16px', fontWeight:900, color:'#000' }}>시작하기</span>
            <ArrowRight size={18} strokeWidth={3} color="#000" />
          </button>
          <p style={{ textAlign:'center', fontSize:'11px', marginTop:'16px', color:'#555' }}>
            계속하면 약관·개인정보 처리에 동의해
          </p>
        </div>

      </div>
    </div>
  );
}

