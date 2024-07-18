function formatPopulation(population: number) {
    if (population && typeof population === 'number') {
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

    return population;
}

export default formatPopulation;
