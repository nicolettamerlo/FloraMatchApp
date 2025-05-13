import React from 'react';
import logo from "../assets/images/floraMatch.svg";
import { useFloraMatch } from '../context/FloraMatchContext';

function Header() {

    const { setIsMatchForm, isMatchForm } = useFloraMatch();

  const tagline = 'Step into a world of flowers, made to match your preferences.';

  return (
    <header className={`text-center ${isMatchForm ? 'mb-12' : 'mb-6' }`}>
      <div className="flex items-center justify-center gap-4 mb-3">
        <img src={logo} alt="FloraMatch logo" className="w-10 h-10" />
              <h1 className="text-4xl sm:text-5xl font-display tracking-wide text-success drop-shadow-sm text-primary">
                  Flora<span className="text-[var(--color-accent)]">Match</span>
              </h1>
      </div>

      {/* decorative line */}
          <div className="flex justify-center mb-4 items-center">
              <div className="w-44 h-[2px] bg-amber-300 rounded-full"></div>
          </div>
          {/* Tagline */}
          {isMatchForm && 
            <p className="text-muted text-base sm:text-lg max-w-xl mx-auto px-4 italic font-body">
                {tagline}
            </p>
          }

      {!isMatchForm && 
        <button onClick={()=> setIsMatchForm(true)} className="mt-2 btn-match-secondary">
        🔍 match again </button>
      }
    </header>
  );
}

export default Header;
