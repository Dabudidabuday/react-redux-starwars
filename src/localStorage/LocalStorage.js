export const getFavoritesHeroes = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));

    return favorites;
}

export const setFavorites = (items) => {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const heroes = favorites.heroes;

    // heroes.push(items)

    localStorage.setItem('favorites', JSON.stringify(heroes));
}