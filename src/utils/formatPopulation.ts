function formatPopulation(population: number) {
    return String(population)
        .split('')
        .reverse()
        .join('')
        .replace(/.{3}/g, (match) => match + ',')
        .replace(/,$/, '')
        .split('')
        .reverse()
        .join('');
}

export default formatPopulation;
