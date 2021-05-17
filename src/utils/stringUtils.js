export const slugToName = (str) => {
    const words = str.replace('-', ' ').split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    words.join(' ');

    return String(words).replace(',', ' ');
}