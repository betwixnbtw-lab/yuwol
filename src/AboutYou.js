import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function AboutYou({ onNext, onBack }) {
  const [mounted, setMounted] = useState(false);
  const [name, setName] = useState('');
  const [goal, setGoal] = useState(null);

  useEffect(() => { setMounted(true); }, []);

  const GRADIENT = 'linear-gradient(135deg, #fdba74 0%, #f9a8d4 30%, #6ee7b7 65%, #a78bfa 100%)';
  const TEXT = '#fafafa';
  const TEXT_MUTED = '#808080';
  const CARD = '#0d0d0d';
  const CARD_BORDER = '#1f1f1f';

  const goals = [
    { id: 'casual', emoji: '🎵', label: 'Casual', sub: '그냥 즐기고 싶어' },
    { id: 'serious', emoji: '🔥', label: 'Serious', sub: '진지하게 파고 싶어' },
    { id: 'goal', emoji: '🎯', label: 'Goal', sub: '목표가 있어' },
    { id: 'pro', emoji: '🏆', label: 'Pro', sub: '직업으로 할 거야' },
  ];

  const isReady = name.trim().length > 0 && goal !== null;

  return (
    <div style={{
      width: '100%', height: '100dvh', background: '#000', display: 'flex',
      flexDirection: 'column', position: 'relative', overflow: 'hidden',
      paddingLeft: '24px', paddingRight: '24px',
      paddingTop: 'max(48px, env(safe-area-inset-top))',
      paddingBottom: 'max(20px, env(safe-area-inset-bottom))',
      fontFamily: "'Pretendard', -apple-system, sans-serif",
    }}>
      <link href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800;12..96,900&display=swap" rel="stylesheet" />
      <style>{`
        .display { font-family: 'Bricolage Grotesque', sans-serif; letter-spacing: -0.04em; }
        @keyframes glow-pulse { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.5;transform:scale(1.1)} }
        @keyframes fade-up { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .glow-anim { animation: glow-pulse 3s ease-in-out infinite; }
        .fade-up { animation: fade-up 0.6s ease-out both; }
        input::placeholder { color: #333; }
        input:focus { outline: none; }
      `}</style>

      <div className="glow-anim" style={{ position:'absolute', top:'-100px', right:'-60px', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle,#f9a8d4 0%,transparent 70%)', filter:'blur(70px)', pointerEvents:'none' }} />
      <div className="glow-anim" style={{ position:'absolute', top:'40%', left:'-80px', width:'260px', height:'260px', borderRadius:'50%', background:'radial-gradient(circle,#a78bfa 0%,transparent 70%)', filter:'blur(70px)', pointerEvents:'none', animationDelay:'1s' }} />
      <div className="glow-anim" style={{ position:'absolute', bottom:'-80px', right:'10%', width:'280px', height:'280px', borderRadius:'50%', background:'radial-gradient(circle,#6ee7b7 0%,transparent 70%)', filter:'blur(80px)', opacity:0.35, pointerEvents:'none', animationDelay:'0.5s' }} />
      <div className="glow-anim" style={{ position:'absolute', bottom:'-60px', left:'10%', width:'260px', height:'260px', borderRadius:'50%', background:'radial-gradient(circle,#f9a8d4 0%,transparent 70%)', filter:'blur(80px)', opacity:0.25, pointerEvents:'none', animationDelay:'1.5s' }} />

      {mounted && (
        <div className="fade-up" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexShrink:0, animationDelay:'0.05s' }}>
          <button onClick={onBack} style={{ width:'40px', height:'40px', borderRadius:'50%', background:'rgba(255,255,255,0.05)', border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <ArrowLeft size={18} color={TEXT} />
          </button>
          <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
            <div style={{ width:'8px', height:'4px', borderRadius:'2px', background:'rgba(255,255,255,0.15)' }} />
            <div style={{ width:'24px', height:'4px', borderRadius:'2px', background:GRADIENT }} />
            {[0,1,2].map(i => <div key={i} style={{ width:'8px', height:'4px', borderRadius:'2px', background:'rgba(255,255,255,0.15)' }} />)}
          </div>
          <div style={{ width:'40px' }} />
        </div>
      )}

      {mounted && (
        <div style={{ marginTop:'24px', flexShrink:0 }}>
          <p className="display fade-up" style={{ fontSize:'11px', letterSpacing:'0.3em', fontWeight:900, textTransform:'uppercase', margin:'0 0 12px', color:'transparent', background:GRADIENT, WebkitBackgroundClip:'text', backgroundClip:'text', animationDelay:'0.1s' }}>
            Step 2 of 5
          </p>
          <h1 className="display fade-up" style={{ fontSize:'34px', fontWeight:900, lineHeight:1, margin:'0 0 8px', color:TEXT, animationDelay:'0.15s' }}>
            About{' '}
            <span style={{ background:GRADIENT, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>You.</span>
          </h1>
          <p className="fade-up" style={{ fontSize:'12px', fontWeight:700, margin:0, color:TEXT_MUTED, animationDelay:'0.2s' }}>
            너에 대해 알고 싶어.
          </p>
        </div>
      )}

      {mounted && (
        <div className="fade-up" style={{ marginTop:'24px', flexShrink:0, animationDelay:'0.25s' }}>
          <p style={{ fontSize:'10px', letterSpacing:'0.2em', fontWeight:900, textTransform:'uppercase', color:TEXT_MUTED, margin:'0 0 8px' }}>Name</p>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="이름 입력..."
            style={{ width:'100%', height:'52px', background:CARD, border:`1.5px solid ${name ? '#a78bfa' : CARD_BORDER}`, borderRadius:'14px', padding:'0 16px', fontSize:'16px', fontWeight:700, color:TEXT, fontFamily:'Pretendard', letterSpacing:'-0.02em', transition:'border-color 0.2s' }}
          />
        </div>
      )}

      {mounted && (
        <div className="fade-up" style={{ marginTop:'20px', flex:1, animationDelay:'0.35s', overflow:'hidden' }}>
          <p style={{ fontSize:'10px', letterSpacing:'0.2em', fontWeight:900, textTransform:'uppercase', color:TEXT_MUTED, margin:'0 0 10px' }}>Goal</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'8px' }}>
            {goals.map(g => {
              const isSelected = goal === g.id;
              return (
                <button key={g.id} onClick={() => setGoal(g.id)}
                  style={{ display:'flex', alignItems:'center', gap:'14px', padding:'14px 16px', borderRadius:'18px', background: isSelected ? 'rgba(167,139,250,0.1)' : CARD, border:`2px solid ${isSelected ? '#a78bfa' : CARD_BORDER}`, cursor:'pointer', transition:'all 0.2s', textAlign:'left' }}>
                  <span style={{ fontSize:'24px', flexShrink:0 }}>{g.emoji}</span>
                  <div style={{ flex:1 }}>
                    <p className="display" style={{ fontSize:'16px', fontWeight:900, color: isSelected ? '#a78bfa' : TEXT, margin:0, letterSpacing:'-0.02em' }}>{g.label}</p>
                    <p style={{ fontSize:'11px', fontWeight:600, color:TEXT_MUTED, margin:'2px 0 0', fontFamily:'Pretendard' }}>{g.sub}</p>
                  </div>
                  {isSelected && <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:GRADIENT, flexShrink:0 }} />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {mounted && (
        <button disabled={!isReady} onClick={() => isReady && onNext()} className="fade-up"
          style={{ width:'100%', padding:'14px', borderRadius:'16px', border:'none', cursor: isReady ? 'pointer' : 'not-allowed', display:'flex', alignItems:'center', justifyContent:'center', gap:'8px', background: isReady ? GRADIENT : '#1a1a1a', boxShadow: isReady ? '0 8px 32px rgba(167,139,250,.3)' : 'none', opacity: isReady ? 1 : 0.5, marginTop:'16px', flexShrink:0, animationDelay:'0.5s', transition:'all 0.2s' }}>
          <span className="display" style={{ fontSize:'16px', fontWeight:900, color: isReady ? '#000' : '#444' }}>다음</span>
          <ArrowRight size={18} strokeWidth={3} color={isReady ? '#000' : '#444'} />
        </button>
      )}
    </div>
  );
}
