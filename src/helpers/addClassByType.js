import {pokemonTypes} from "../enum/pokemonTypes";

export const addClassByType = (types) => {
    return pokemonTypes.hasOwnProperty(types[0].toUpperCase()) ? types[0] : 'default';
}