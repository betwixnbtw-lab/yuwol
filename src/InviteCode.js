import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, HelpCircle, Delete } from 'lucide-react';

export default function InviteCode({ onNext, onBack }) {
  const [mounted, setMounted] = useState(false);
  const [notes, setNotes] = useState([]);
  const [verified, setVerified] = useState(false);
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => { setMounted(true); }, []);

  const CORRECT_CHORD = ['F', 'A', 'C', 'E', 'B'];
  const CORRECT_NAME = 'Fmaj7(#11)';

  useEffect(() => {
    if (notes.length === 5) {
      const isCorrect = notes.every((n, i) => n === CORRECT_CHORD[i]);
      if (isCorrect) {
        const timer = setTimeout(() => setVerified(true), 500);
        return () => clearTimeout(timer);
      }
    }
    setVerified(false);
  }, [notes]);

  const addNote = (note) => {
    if (notes.length >= 5) return;
    setNotes([...notes, note]);
    setPressedKey(note);
    setTimeout(() => setPressedKey(null), 200);
  };

  const removeNote = () => { setNotes(notes.slice(0, -1)); };

  const GRADIENT = 'linear-gradient(135deg, #fdba74 0%, #f9a8d4 30%, #6ee7b7 65%, #a78bfa 100%)';
  const TEXT = '#fafafa';
  const TEXT_MUTED = '#808080';
  const CARD = '#0d0d0d';
  const CARD_BORDER = '#1f1f1f';

  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  const blackKeys = [
    { note: 'C#', position: 0.5 },
    { note: 'D#', position: 1.5 },
    { note: 'F#', position: 3.5 },
    { note: 'G#', position: 4.5 },
    { note: 'A#', position: 5.5 },
  ];

  return (
    <div style={{ fontFamily:"'Pretendard',-apple-system,sans-serif", background:'#000', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', padding:'16px' }}>
      <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800;12..96,900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700;800&display=swap" rel="stylesheet" />
      <style>{`
        .display { font-family:'Bricolage Grotesque',sans-serif; letter-spacing:-0.04em; }
        .mono { font-family:'JetBrains Mono',monospace; }
        @keyframes glow-pulse { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.5;transform:scale(1.1)} }
        @keyframes fade-up { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pop { 0%{opacity:0;transform:scale(0.7)} 50%{transform:scale(1.08)} 100%{opacity:1;transform:scale(1)} }
        .glow-anim { animation:glow-pulse 3s ease-in-out infinite; }
        .fade-up { animation:fade-up 0.6s ease-out both; }
        .pop { animation:pop 0.5s ease-out both; }
      `}</style>

      <div style={{ width:'100%', maxWidth:'390px', aspectRatio:'9/19', minHeight:'720px', background:'#000', borderRadius:'3rem', border:'6px solid #1a1a1a', overflow:'hidden', position:'relative' }}>

        {/* 글로우 */}
        <div className="glow-anim" style={{ position:'absolute', top:'-128px', right:'-80px', width:'320px', height:'320px', borderRadius:'50%', background:'radial-gradient(circle,#a78bfa 0%,transparent 70%)', filter:'blur(70px)', pointerEvents:'none' }} />
        <div className="glow-anim" style={{ position:'absolute', top:'33%', left:'-128px', width:'288px', height:'288px', borderRadius:'50%', background:'radial-gradient(circle,#6ee7b7 0%,transparent 70%)', filter:'blur(70px)', pointerEvents:'none', animationDelay:'1s' }} />

        {/* 상태바 */}
        <div style={{ height:'32px', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 28px', fontSize:'12px', color:TEXT, position:'relative' }}>
          <span style={{ fontWeight:700 }}>9:41</span>
          <div style={{ width:'96px', height:'24px', background:'#000', borderRadius:'12px', position:'absolute', left:'50%', transform:'translateX(-50%)', top:'4px' }} />
          <span style={{ fontWeight:700 }}>●●●●</span>
        </div>

        <div style={{ position:'relative', display:'flex', flexDirection:'column', height:'calc(100% - 32px)', padding:'0 24px 20px' }}>

          {/* 네비 */}
          {mounted && (
            <div className="fade-up" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'16px', animationDelay:'0.05s' }}>
              <button onClick={onBack} style={{ width:'40px', height:'40px', borderRadius:'50%', background:'rgba(255,255,255,0.05)', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <ArrowLeft size={18} color={TEXT} />
              </button>
              <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
                <div style={{ width:'24px', height:'4px', borderRadius:'2px', background:GRADIENT }} />
                {[0,1,2,3].map(i => <div key={i} style={{ width:'8px', height:'4px', borderRadius:'2px', background:'rgba(255,255,255,0.15)' }} />)}
              </div>
              <button style={{ width:'40px', height:'40px', borderRadius:'50%', background:'rgba(255,255,255,0.05)', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <HelpCircle size={18} color={TEXT_MUTED} />
              </button>
            </div>
          )}

          {/* 헤더 */}
          {mounted && (
            <div style={{ marginTop:'24px' }}>
              <p className="display fade-up" style={{ fontSize:'11px', letterSpacing:'0.3em', fontWeight:900, textTransform:'uppercase', margin:'0 0 12px', color:'transparent', background:GRADIENT, WebkitBackgroundClip:'text', backgroundClip:'text', animationDelay:'0.1s' }}>
                Step 1 of 5
              </p>
              <h1 className="display fade-up" style={{ fontSize:'34px', fontWeight:900, lineHeight:1, margin:'0 0 8px', color:TEXT, animationDelay:'0.15s' }}>
                Enter your{' '}
                <span style={{ background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Code.</span>
              </h1>
              <p className="fade-up" style={{ fontSize:'12px', fontWeight:700, margin:0, color:TEXT_MUTED, animationDelay:'0.2s' }}>
                코드를 입력해.
              </p>
            </div>
          )}

          {/* 입력 슬롯 */}
          {mounted && (
            <div className="fade-up" style={{ marginTop:'20px', animationDelay:'0.3s', minHeight:'110px' }}>
              {!verified ? (
                <>
                  {/* 지우기 버튼 — 슬롯 위 가운데 */}
                  <div style={{ display:'flex', justifyContent:'center', marginBottom:'8px', minHeight:'28px' }}>
                    {notes.length > 0 && (
                      <button onClick={removeNote} style={{ display:'flex', alignItems:'center', gap:'6px', padding:'4px 14px', borderRadius:'20px', background:'rgba(255,255,255,0.05)', border:`1px solid ${CARD_BORDER}`, cursor:'pointer' }}>
                        <Delete size={12} color={TEXT_MUTED} />
                        <span style={{ fontSize:'11px', fontWeight:700, color:TEXT_MUTED }}>지우기</span>
                      </button>
                    )}
                  </div>

                  {/* 슬롯 */}
                  <div style={{ display:'flex', gap:'6px' }}>
                    {[0,1,2,3,4].map(i => {
                      const note = notes[i];
                      const isFilled = !!note;
                      const isCurrent = i === notes.length;
                      return (
                        <div key={i} className="mono" style={{ flex:1, height:'54px', fontSize:'20px', fontWeight:800, color: isFilled ? TEXT : '#333', background: isFilled ? 'rgba(167,139,250,0.1)' : CARD, border:`2px solid ${isFilled ? '#a78bfa' : isCurrent ? '#444' : CARD_BORDER}`, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.2s' }}>
                          {note || '·'}
                        </div>
                      );
                    })}
                  </div>
                </>
              ) : (
                <div className="pop" style={{ textAlign:'center' }}>
                  <p className="display" style={{ fontSize:'46px', fontWeight:900, background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', letterSpacing:'-0.04em', lineHeight:1, margin:0 }}>
                    {CORRECT_NAME}
                  </p>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'6px', marginTop:'12px' }}>
                    <Check size={12} color="#6ee7b7" strokeWidth={3} />
                    <p className="display" style={{ fontSize:'11px', fontWeight:900, textTransform:'uppercase', letterSpacing:'0.25em', color:'#6ee7b7', margin:0 }}>Success</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 피아노 */}
          {mounted && (
            <div className="fade-up" style={{ marginTop:'auto', marginBottom:'12px', animationDelay:'0.4s' }}>
              <div style={{ position:'relative', height:'180px' }}>
                {/* 흰 건반 */}
                <div style={{ position:'absolute', inset:0, display:'flex', gap:'2px' }}>
                  {whiteKeys.map(key => {
                    const isPressed = pressedKey === key;
                    return (
                      <button key={key} onClick={() => addNote(key)} disabled={verified}
                        style={{ flex:1, borderRadius:'0 0 10px 10px', background: isPressed ? 'linear-gradient(180deg,#c8b8ff 0%,#a78bfa 100%)' : 'linear-gradient(180deg,#fafafa 0%,#e0e0e0 100%)', boxShadow: isPressed ? 'inset 0 -2px 0 #8b6fd9,0 1px 2px rgba(0,0,0,.4)' : 'inset 0 -4px 0 #b8b8b8,0 2px 6px rgba(0,0,0,.4)', border:'1px solid #888', transform: isPressed ? 'translateY(2px)' : 'translateY(0)', transition:'all 0.1s', cursor: verified ? 'default' : 'pointer', position:'relative' }}>
                        <span style={{ position:'absolute', bottom:'8px', left:'50%', transform:'translateX(-50%)', fontSize:'10px', fontWeight:900, fontFamily:'JetBrains Mono,monospace', color: isPressed ? '#fff' : '#666' }}>{key}</span>
                      </button>
                    );
                  })}
                </div>
                {/* 검은 건반 */}
                <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
                  {blackKeys.map(({ note, position }) => {
                    const isPressed = pressedKey === note;
                    return (
                      <button key={note} onClick={() => addNote(note)} disabled={verified}
                        style={{ position:'absolute', left:`calc(${(position/7)*100}% - 5%)`, width:'10%', height:'62%', top:0, background: isPressed ? 'linear-gradient(180deg,#8b6fd9 0%,#6b4fb9 100%)' : 'linear-gradient(180deg,#2a2a2a 0%,#0a0a0a 100%)', boxShadow: isPressed ? 'inset 0 -1px 0 #5a3fa9,0 1px 2px rgba(0,0,0,.6)' : 'inset 0 -3px 0 #000,0 2px 5px rgba(0,0,0,.6)', border:'1px solid #000', borderRadius:'0 0 6px 6px', transform: isPressed ? 'translateY(1px)' : 'translateY(0)', transition:'all 0.1s', cursor: verified ? 'default' : 'pointer', pointerEvents:'all', zIndex:2 }}>
                      </button>
                    );
                  })}
                </div>
              </div>

              {!verified && notes.length === 0 && (
                <p style={{ textAlign:'center', fontSize:'11px', color:'#444', marginTop:'8px' }}>
                  Hint : Fmaj7(#11)
                </p>
              )}
            </div>
          )}

          {/* 다음 버튼 */}
          {mounted && (
            <button disabled={!verified} className="fade-up"
              style={{ width:'100%', padding:'14px', borderRadius:'16px', border:'none', cursor: verified ? 'pointer' : 'not-allowed', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', background: verified ? GRADIENT : '#1a1a1a', boxShadow: verified ? '0 8px 32px rgba(167,139,250,.3)' : 'none', opacity: verified ? 1 : 0.5, animationDelay:'0.5s', transition:'all 0.2s' }}
              onClick={() => verified && onNext()}>
              <span className="display" style={{ fontSize:'16px', fontWeight:900, color: verified ? '#000' : '#444' }}>다음</span>
              <ArrowRight size={18} strokeWidth={3} color={verified ? '#000' : '#444'} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
