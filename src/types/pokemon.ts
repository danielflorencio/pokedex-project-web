import { PokeType } from "./pokeType"

export type Pokemon = {
    pokemonImgUrl: string,
    id: string,
    name: string,
    moves: string[], 
    colorTheme: string,
    types: PokeType[],
    hp: number,
    att: number,
    def: number,
    satk: number,
    sdef: number,
    spd: number 
}