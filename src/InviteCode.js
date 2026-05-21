import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const GRADIENT = 'linear-gradient(135deg, #fdba74 0%, #f9a8d4 30%, #6ee7b7 65%, #a78bfa 100%)';
const TEXT = '#fafafa';
const TEXT_MUTED = '#808080';
const CARD = '#0d0d0d';
const CARD_BORDER = '#1f1f1f';

// Fmaj7(#11) = F A C E B
const CORRECT_CODE = ['F', 'A', 'C', 'E', 'B'];

const PIANO_KEYS = [
  { note: 'C', label: '도', black: false },
  { note: 'C#', label: '도#', black: true },
  { note: 'D', label: '레', black: false },
  { note: 'D#', label: '레#', black: true },
  { note: 'E', label: '미', black: false },
  { note: 'F', label: '파', black: false },
  { note: 'F#', label: '파#', black: true },
  { note: 'G', label: '솔', black: false },
  { note: 'G#', label: '솔#', black: true },
  { note: 'A', label: '라', black: false },
  { note: 'A#', label: '라#', black: true },
  { note: 'B', label: '시', black: false },
];

export default function InviteCode({ onNext, onBack }) {
  const [pressed, setPressed] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleKey = (note) => {
    if (success) return;
    const newPressed = [...pressed, note];
    setPressed(newPressed);
    setError(false);

    if (newPressed.length === CORRECT_CODE.length) {
      if (JSON.stringify(newPressed) === JSON.stringify(CORRECT_CODE)) {
        setSuccess(true);
        setTimeout(() => onNext(), 1200);
      } else {
        setError(true);
        setTimeout(() => { setPressed([]); setError(false); }, 800);
      }
    }
  };

  const whiteKeys = PIANO_KEYS.filter(k => !k.black);
  const blackKeys = PIANO_KEYS.filter(k => k.black);

  return (
    <>
      <style>{`
        html, body, #root { margin:0; padding:0; width:100%; height:100%; background:#000; overflow:hidden; }
        * { box-sizing: border-box; }
        .key-white { transition: all 0.1s; }
        .key-white:active { transform: scaleY(0.95); background: #e0e0e0 !important; }
        .key-black:active { transform: scaleY(0.95); background: #333 !important; }
      `}</style>

      <div style={{ width:'100%', height:'100dvh', background:'#000', display:'flex', flexDirection:'column', position:'relative', overflow:'hidden', paddingLeft:'24px', paddingRight:'24px', paddingTop:'max(48px, env(safe-area-inset-top))', paddingBottom:'max(24px, env(safe-area-inset-bottom))' }}>

        {/* 글로우 */}
        <div style={{ position:'absolute', top:'-80px', left:'50%', transform:'translateX(-50%)', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle,#a78bfa 0%,transparent 70%)', filter:'blur(70px)', opacity:0.35, pointerEvents:'none' }} />

        {/* 뒤로가기 */}
        <button onClick={onBack} style={{ width:'40px', height:'40px', borderRadius:'50%', background:'rgba(255,255,255,0.05)', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
          <ArrowLeft size={18} color={TEXT} />
        </button>

        {/* 헤더 */}
        <div style={{ marginTop:'24px', flexShrink:0 }}>
          <p style={{ fontSize:'11px', letterSpacing:'0.3em', fontWeight:900, textTransform:'uppercase', margin:'0 0 8px', background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            Enter your Code.
          </p>
          <h1 style={{ fontSize:'32px', fontWeight:900, lineHeight:1, margin:'0 0 6px', color:TEXT, letterSpacing:'-0.04em' }}>
            초대 코드를{' '}
            <span style={{ background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              입력해.
            </span>
          </h1>
          <p style={{ fontSize:'12px', fontWeight:700, margin:0, color:TEXT_MUTED }}>
            쌤한테 받은 코드야. 건반으로 입력해줘.
          </p>
        </div>

        {/* 입력된 음 표시 */}
        <div style={{ display:'flex', gap:'8px', marginTop:'24px', flexShrink:0 }}>
          {CORRECT_CODE.map((_, i) => {
            const filled = pressed[i];
            const isError = error && filled;
            return (
              <div key={i} style={{ flex:1, height:'44px', borderRadius:'12px', background: filled ? (isError ? 'rgba(248,113,113,0.2)' : 'rgba(167,139,250,0.15)') : CARD, border:`1.5px solid ${filled ? (isError ? '#f87171' : '#a78bfa') : CARD_BORDER}`, display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.2s' }}>
                <span style={{ fontSize:'16px', fontWeight:900, color: filled ? (isError ? '#f87171' : '#a78bfa') : '#333', fontFamily:'monospace' }}>
                  {filled || '·'}
                </span>
              </div>
            );
          })}
        </div>

        {/* 성공 메시지 */}
        {success && (
          <div style={{ margin:'16px 0 0', padding:'12px 16px', borderRadius:'16px', background:'rgba(110,231,183,0.1)', border:'1px solid rgba(110,231,183,0.3)', flexShrink:0 }}>
            <p style={{ fontSize:'13px', fontWeight:900, color:'#6ee7b7', margin:0, textAlign:'center' }}>
              ✓ Welcome to Yuwol!
            </p>
          </div>
        )}

        {/* 피아노 */}
        <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingBottom:'8px' }}>
          <div style={{ position:'relative', width:'100%', height:'160px' }}>
            {/* 흰 건반 */}
            <div style={{ display:'flex', width:'100%', height:'100%', gap:'3px' }}>
              {whiteKeys.map((key) => {
                const isPressed = pressed.includes(key.note);
                return (
                  <button key={key.note} className="key-white"
                    onClick={() => handleKey(key.note)}
                    style={{ flex:1, height:'100%', borderRadius:'0 0 8px 8px', background: isPressed ? '#e8e0ff' : '#f5f5f5', border:`1px solid ${isPressed ? '#a78bfa' : '#ccc'}`, cursor:'pointer', display:'flex', alignItems:'flex-end', justifyContent:'center', paddingBottom:'8px', boxShadow: isPressed ? '0 0 12px rgba(167,139,250,0.6)' : '0 2px 4px rgba(0,0,0,0.3)' }}>
                    <span style={{ fontSize:'9px', fontWeight:900, color: isPressed ? '#a78bfa' : '#999' }}>{key.note}</span>
                  </button>
                );
              })}
            </div>

            {/* 검은 건반 */}
            <div style={{ position:'absolute', top:0, left:0, width:'100%', height:'60%', display:'flex', pointerEvents:'none' }}>
              {(() => {
                const whiteWidth = 100 / 7;
                const blackPositions = { 'C#': 0.7, 'D#': 1.7, 'F#': 3.7, 'G#': 4.65, 'A#': 5.65 };
                return blackKeys.map((key) => {
                  const pos = blackPositions[key.note];
                  const isPressed = pressed.includes(key.note);
                  return (
                    <button key={key.note} className="key-black"
                      onClick={() => handleKey(key.note)}
                      style={{ position:'absolute', left:`${pos * whiteWidth}%`, width:`${whiteWidth * 0.65}%`, height:'100%', background: isPressed ? '#555' : '#1a1a1a', borderRadius:'0 0 6px 6px', border:`1px solid ${isPressed ? '#a78bfa' : '#000'}`, cursor:'pointer', pointerEvents:'all', zIndex:2, boxShadow: isPressed ? '0 0 10px rgba(167,139,250,0.5)' : '0 3px 6px rgba(0,0,0,0.6)' }}>
                    </button>
                  );
                });
              })()}
            </div>
          </div>
        </div>

        {/* 힌트 */}
        <p style={{ textAlign:'center', fontSize:'11px', color:'#666', margin:'8px 0 0', flexShrink:0 }}>
  Hint : Fmaj7(#11)
</p>

        </p>

      </div>
    </>
  );
}
