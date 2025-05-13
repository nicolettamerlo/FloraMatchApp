export const icons = {
    careDifficulties: { easy: '🌱', medium: '🌿', hard: '🌳', indifferent: '🌱🌿🌳' },
    environments: { fullSun: '☀️', partialShade: '⛅', fullShade: '🌑', indifferent: '☀️⛅🌑' },
    bloomSeasons: { spring: '🌸', summer: '🏖️', autumn: '🍂', winter: '❄️', indifferent: '🌸🏖️🍂❄️' },
    petFriendly: { cat_safe: '🐱✅', dog_safe: '🐶✅', both_safe: '🐶🐱✅', indifferent: '🐾🤷‍♂️', both_dangerous: '🚫' }
}

export const petFriendlyOptions = [
    {
        value: 'cat_safe',
        label: 'Safe for Cats',
        icon: icons.petFriendly.cat_safe
    },
    {
        value: 'dog_safe',
        label: 'Safe for Dogs',
        icon: icons.petFriendly.dog_safe
    },
    {
        value: 'both_safe',
        label: 'Safe for Cats & Dogs',
        icon: icons.petFriendly.both_safe
    },
    {
        value: 'indifferent',
        label: 'Doesn\'t Matter',
        icon: icons.petFriendly.indifferent
    },
]

export const careDifficultiesOptions = [
    {
        value: 'easy',
        label: 'Easy',
        icon: icons.careDifficulties.easy
    },
    {
        value: 'medium',
        label: 'Medium',
        icon: icons.careDifficulties.medium
    },
    {
        value: 'hard',
        label: 'Hard',
        icon: icons.careDifficulties.hard
    },
    {
        value: 'indifferent',
        label: 'Doesn\'t Matter',
        icon: icons.careDifficulties.indifferent
    },
]

export const environmentsOptions = [
    {
        value: 'full-sun',
        label: 'Full Sun',
        icon: icons.environments.fullSun
    },
    {
        value: 'partial-shade',
        label: 'Partial Shade',
        icon: icons.environments.partialShade
    },
    {
        value: 'full-shade',
        label: 'Full Shade',
        icon: icons.environments.fullShade
    },
    {
        value: 'indifferent',
        label: 'Doesn\'t Matter',
        icon: icons.environments.indifferent
    },
]
export const bloomingSeasonsOptions = [
    {
        value: 'spring',
        label: 'Spring',
        icon: '🌸'
    },
    {
        value: 'summer',
        label: 'Summer',
        icon: '🏖️'
    },
    {
        value: 'autumn',
        label: 'Autumn',
        icon: '🍂'
    },
    {
        value: 'winter',
        label: 'Winter',
        icon: '❄️'
    },
    {
        value: 'indifferent',
        label: 'Doesn\'t Matter',
        icon: '🌸🏖️🍂❄️'
    },
]
export const colorsOptions = [
    {
        value: 'all',
        label: 'All Colors',
        icon: '⚪'
    },
    {
        value: 'white',
        label: 'White',
        icon: '⚪'
    },
    {
        value: 'yellow',
        label: 'Yellow',
        icon: '🟡'
    },
    {
        value: 'orange',
        label: 'Orange',
        icon: '🟠'
    },
    {
        value: 'red',
        label: 'Red',
        icon: '🔴'
    },
    {
        value: 'pink',
        label: 'Pink',
        icon: '🔴'
    },
    {
        value: 'lilac',
        label: 'Lilac',
        icon: '🟣'
    },
    {
        value: 'blue',
        label: 'Blue',
        icon: '🔵'
    },
    {
        value: 'green',
        label: 'Green',
        icon: '🟢'
    },
]
