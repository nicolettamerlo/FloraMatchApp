import React from 'react';
import { icons } from '../constants/formOptions';
import placeholder from '../assets/images/placeholder.png';
import { useFloraMatch } from '../context/FloraMatchContext';
;
function FlowerCard({ flower }) {
    const { isMatchForm } = useFloraMatch();

    return (
        <div className={`relative flower-card-width bg-gradient-to-b from-[var(--color-green-transparent)] to-[var(--color-primary-transparent-2)] rounded-xl p-4 shadow-md transition-opacity duration-500 ease-in-out ${!isMatchForm ? 'opacity-100' : 'opacity-0'}`}>

            {/* Badge name */}
            <div className="badge absolute top-6 left-6">
                {flower.name}
            </div>
            {/* load image or placeholder */}
            <img
                className="w-full h-60 object-cover rounded-xl border border-success shadow-inner"
                src={flower.imageUrl}
                onError={(e) => {
                    e.target.onerror = null; // prevents infinite loop in case the placeholder is also missing
                    e.target.src = placeholder;
                }}
                alt={flower.name}
            />

            {/* flower details */}
            <div className="mt-4 bg-green rounded-xl p-4 text-xs text-muted shadow-inner border border-success">
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    <div>
                        {flower.bloomingSeason === 'spring' && `${icons.bloomSeasons.spring} Spring`}
                        {flower.bloomingSeason === 'summer' && `${icons.bloomSeasons.summer} Summer`}
                        {flower.bloomingSeason === 'autumn' && `${icons.bloomSeasons.autumn} Autumn`}
                        {flower.bloomingSeason === 'winter' && `${icons.bloomSeasons.winter} Winter`}
                    </div>

                    <div>
                        {flower.careDifficulty === 'easy' && `${icons.careDifficulties.easy} Easy`}
                        {flower.careDifficulty === 'medium' && `${icons.careDifficulties.medium} Medium`}
                        {flower.careDifficulty === 'hard' && `${icons.careDifficulties.hard} Hard`}
                    </div>

                    <div>
                        {flower.environment === 'full-sun' && `${icons.environments.fullSun} Full Sun`}
                        {flower.environment === 'partial-shade' && `${icons.environments.partialShade} Partial Shade`}
                        {flower.environment === 'full-shade' && `${icons.environments.fullShade} Full Shade`}
                    </div>

                    <div>
                        {flower.catSafe && !flower.dogSafe && `${icons.petFriendly.cat_safe}`}
                        {flower.dogSafe && !flower.catSafe && `${icons.petFriendly.dog_safe}`}
                        {flower.dogSafe && flower.catSafe && `${icons.petFriendly.both_safe}`}
                        {!flower.dogSafe && !flower.catSafe && `${icons.petFriendly.both_dangerous} pet unsafe`}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default FlowerCard;
