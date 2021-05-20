import 'regenerator-runtime/runtime';
import { baseUrl, urls } from '../constants';

export const getPeople = async (params="") => {
    const response = await fetch(`${baseUrl}${urls.people}${params}`)
        .then(response => response.json())
    return response;
}

export const apiGetHero = async (heroName) => {
    const response = await fetch(`${baseUrl}${urls.people}${urls.search}${heroName}`)
        .then(response => response.json())

    return response;
}
