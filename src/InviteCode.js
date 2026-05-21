import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, HelpCircle, Delete } from 'lucide-react';

export default function InviteCode({ onNext, onBack }) {
  const [mounted, setMounted] = useState(false);
  const [notes, setNotes] = useState([]); // 입력된 음들
  const [verified, setVerified] = useState(false);
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 정답 코드: F A C E B → Fmaj7(#11)
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

  const removeNote = () => {
    setNotes(notes.slice(0, -1));
  };

  const GRADIENT = 'linear-gradient(135deg, #fdba74 0%, #f9a8d4 30%, #6ee7b7 65%, #a78bfa 100%)';
  const TEXT = '#fafafa';
  const TEXT_MUTED = '#808080';
  const CARD = '#0d0d0d';
  const CARD_BORDER = '#1f1f1f';

  // 흰 건반
  const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
  // 검은 건반 (위치 인덱스, 0=C와 D 사이)
  const blackKeys = [
    { note: 'C#', position: 0.5 },
    { note: 'D#', position: 1.5 },
    { note: 'F#', position: 3.5 },
    { note: 'G#', position: 4.5 },
    { note: 'A#', position: 5.5 },
  ];

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ 
        fontFamily: "'Pretendard', -apple-system, sans-serif",
        background: '#000'
      }}
    >
      <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800;12..96,900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700;800&display=swap" rel="stylesheet" />
      
      <style>{`
        .display { font-family: 'Bricolage Grotesque', sans-serif; letter-spacing: -0.04em; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pop {
          0% { opacity: 0; transform: scale(0.7); }
          50% { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        .glow-anim { animation: glow-pulse 3s ease-in-out infinite; }
        .fade-up { animation: fade-up 0.6s ease-out both; }
        .pop { animation: pop 0.5s ease-out both; }
        .white-key:active { background: linear-gradient(180deg, #d0d0d0 0%, #b0b0b0 100%); }
        .black-key:active { background: linear-gradient(180deg, #222 0%, #000 100%); }
      `}</style>
      
      <div 
        className="w-full max-w-sm rounded-[3rem] shadow-2xl overflow-hidden relative"
        style={{ 
          aspectRatio: '9/19', 
          minHeight: '720px',
          background: '#000',
          border: '6px solid #1a1a1a'
        }}
      >
        
        {/* 글로우 */}
        <div 
          className="absolute -top-32 -right-20 w-80 h-80 rounded-full pointer-events-none glow-anim"
          style={{ background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)', filter: 'blur(70px)' }}
        />
        <div 
          className="absolute top-1/3 -left-32 w-72 h-72 rounded-full pointer-events-none glow-anim"
          style={{ 
            background: 'radial-gradient(circle, #6ee7b7 0%, transparent 70%)', 
            filter: 'blur(70px)',
            animationDelay: '1s'
          }}
        />

        {/* 상태바 */}
        <div className="h-8 flex items-center justify-between px-7 text-xs relative" style={{ color: TEXT }}>
          <span className="font-bold">9:41</span>
          <div className="w-24 h-6 rounded-full absolute left-1/2 -translate-x-1/2 top-1" style={{ background: '#000' }}></div>
          <span className="font-bold">●●●●</span>
        </div>

        <div className="relative flex flex-col h-[calc(100%-32px)] px-6 pb-5">
          
          {/* 상단 네비 */}
          {mounted && (
            <div 
              className="flex items-center justify-between mt-4 fade-up"
              style={{ animationDelay: '0.05s' }}
            >
              <button 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <ArrowLeft size={18} color={TEXT} />
              </button>
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-1 rounded-full" style={{ background: GRADIENT }} />
                <div className="w-2 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
                <div className="w-2 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
                <div className="w-2 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
                <div className="w-2 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
              </div>
              <button 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                <HelpCircle size={18} color={TEXT_MUTED} />
              </button>
            </div>
          )}

          {/* 헤더 */}
          {mounted && (
            <div className="mt-6">
              <p 
                className="text-[11px] tracking-[0.3em] font-black uppercase display mb-3 fade-up"
                style={{ 
                  color: 'transparent',
                  background: GRADIENT,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  animationDelay: '0.1s'
                }}
              >
                Step 1 of 5
              </p>
              <h1 
                className="display leading-[1] mb-2 fade-up"
                style={{ 
                  color: TEXT, 
                  fontWeight: 900,
                  fontSize: '34px',
                  animationDelay: '0.15s'
                }}
              >
                Enter your{' '}
                  <span 
                    style={{ 
                      background: GRADIENT,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Code.
                  </span>
              </h1>
              <p 
                className="text-[12px] leading-relaxed font-bold fade-up"
                style={{ color: TEXT_MUTED, animationDelay: '0.2s' }}
              >
                쌤한테 받은 코드야. 건반으로 입력해줘.
              </p>
            </div>
          )}

          {/* 코드 입력 슬롯 또는 결과 */}
          {mounted && (
            <div 
              className="mt-5 fade-up"
              style={{ animationDelay: '0.3s', minHeight: '120px' }}
            >
              {!verified ? (
                <>
                  {/* 지우기 버튼 — 건반 위 가운데 */}
                  <div style={{ display:'flex', justifyContent:'center', marginBottom:'8px', minHeight:'28px' }}>
                    {notes.length > 0 && (
                      <button
                        onClick={removeNote}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.05)', border:'none', cursor:'pointer' }}
                      >
                        <Delete size={12} color={TEXT_MUTED} />
                        <span className="text-[11px] font-bold" style={{ color: TEXT_MUTED }}>
                          지우기
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="flex justify-between gap-1.5">
                    {[0,1,2,3,4].map(i => {
                      const note = notes[i];
                      const isFilled = !!note;
                      const isCurrent = i === notes.length;
                      return (
                        <div
                          key={i}
                          className="mono flex items-center justify-center transition-all"
                          style={{
                            flex: 1,
                            height: '54px',
                            fontSize: '20px',
                            fontWeight: 800,
                            color: isFilled ? TEXT : '#333',
                            background: isFilled ? 'rgba(167, 139, 250, 0.1)' : CARD,
                            border: `2px solid ${isFilled ? '#a78bfa' : isCurrent ? '#444' : CARD_BORDER}`,
                            borderRadius: '12px',
                          }}
                        >
                          {note || '·'}
                        </div>
                      );
                    })}
                  </div>

                </>
              ) : (
                /* 코드 분석 결과 */
                <div className="text-center pop">
                  <p 
                    className="display"
                    style={{ 
                      fontSize: '46px',
                      fontWeight: 900,
                      background: GRADIENT,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      letterSpacing: '-0.04em',
                      lineHeight: 1
                    }}
                  >
                    {CORRECT_NAME}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 mt-3">
                    <Check size={12} color="#6ee7b7" strokeWidth={3} />
                    <p 
                      className="text-[11px] font-black uppercase tracking-[0.25em] display"
                      style={{ color: '#6ee7b7' }}
                    >
                      Success
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 피아노 건반 */}
          {mounted && (
            <div 
              className="mt-auto mb-3 fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="relative" style={{ height: '180px' }}>
                {/* 흰 건반 */}
                <div className="absolute inset-0 flex gap-0.5">
                  {whiteKeys.map((key) => {
                    const isPressed = pressedKey === key;
                    return (
                      <button
                        key={key}
                        onClick={() => addNote(key)}
                        disabled={verified}
                        className="white-key flex-1 rounded-b-xl relative transition-all"
                        style={{
                          background: isPressed 
                            ? 'linear-gradient(180deg, #c8b8ff 0%, #a78bfa 100%)'
                            : 'linear-gradient(180deg, #fafafa 0%, #e0e0e0 100%)',
                          boxShadow: isPressed
                            ? 'inset 0 -2px 0 #8b6fd9, 0 1px 2px rgba(0,0,0,0.4)'
                            : 'inset 0 -4px 0 #b8b8b8, 0 2px 6px rgba(0,0,0,0.4)',
                          border: '1px solid #888',
                          transform: isPressed ? 'translateY(2px)' : 'translateY(0)',
                          transition: 'all 0.1s',
                          cursor: verified ? 'default' : 'pointer',
                        }}
                      >
                        <span 
                          className="absolute bottom-2 left-1/2 -translate-x-1/2 mono text-[10px] font-black"
                          style={{ color: isPressed ? '#fff' : '#666' }}
                        >
                          {key}
                        </span>
                      </button>
                    );
                  })}
                </div>
                
                {/* 검은 건반 */}
                <div className="absolute inset-0 pointer-events-none">
                  {blackKeys.map(({ note, position }) => {
                    const isPressed = pressedKey === note;
                    return (
                      <button
                        key={note}
                        onClick={() => addNote(note)}
                        disabled={verified}
                        className="black-key absolute rounded-b-lg pointer-events-auto transition-all"
                        style={{
                          left: `calc(${(position / 7) * 100}% - 5%)`,
                          width: '10%',
                          height: '62%',
                          top: 0,
                          background: isPressed
                            ? 'linear-gradient(180deg, #8b6fd9 0%, #6b4fb9 100%)'
                            : 'linear-gradient(180deg, #2a2a2a 0%, #0a0a0a 100%)',
                          boxShadow: isPressed
                            ? 'inset 0 -1px 0 #5a3fa9, 0 1px 2px rgba(0,0,0,0.6)'
                            : 'inset 0 -3px 0 #000, 0 2px 5px rgba(0,0,0,0.6)',
                          border: '1px solid #000',
                          transform: isPressed ? 'translateY(1px)' : 'translateY(0)',
                          transition: 'all 0.1s',
                          cursor: verified ? 'default' : 'pointer',
                        }}
                      >
                        <span 
                          className="absolute bottom-1.5 left-1/2 -translate-x-1/2 mono text-[8px] font-black"
                          style={{ color: '#fff' }}
                        >
                          {note}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* 데모 힌트 */}
              {!verified && notes.length === 0 && (
                <button
                  onClick={() => {
                    ['F','A','C','E','B'].forEach((n, i) => {
                      setTimeout(() => addNote(n), i * 150);
                    });
                  }}
                  className="mt-3 mx-auto block text-[10px] font-bold"
                  style={{ color: '#444' }}
                >
                  [데모: 자동 입력 F → A → C → E → B]
                </button>
              )}
            </div>
          )}

          {/* 다음 버튼 */}
          {mounted && (
            <button 
              disabled={!verified}
              className="w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 fade-up transition-all active:scale-[0.98]"
              onClick={() => verified && onNext()}
              style={{ 
                background: verified ? GRADIENT : '#1a1a1a',
                boxShadow: verified ? '0 8px 32px rgba(167, 139, 250, 0.3)' : 'none',
                animationDelay: '0.5s',
                opacity: verified ? 1 : 0.5,
                cursor: verified ? 'pointer' : 'not-allowed'
              }}
            >
              <span 
                className="text-base font-black display"
                style={{ color: verified ? '#000' : '#444' }}
              >
                다음
              </span>
              <ArrowRight 
                size={18} 
                strokeWidth={3} 
                style={{ color: verified ? '#000' : '#444' }} 
              />
            </button>
          )}

        </div>
      </div>
    </div>
  );
}
