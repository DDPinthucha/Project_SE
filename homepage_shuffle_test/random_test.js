const shuffleArray = require('./random.js'); 

test('Refresh page and all cards will random', () => {

    const shuffledCards1 = shuffleArray(cards);
    const shuffledCards2 = shuffleArray(cards);
    const shuffledCards3 = shuffleArray(cards);
    const shuffledCards4 = shuffleArray(cards);

    expect(shuffledCards1).not.toEqual(shuffledCards2);
    expect(shuffledCards1).not.toEqual(shuffledCards3);
    expect(shuffledCards1).not.toEqual(shuffledCards4);
});
