import { PokeType } from "./pokeType"

export type Pokemon = {
    pokemonImgUrl?: string,
    id: string,
    name: string,
    moves?: string[], 
    colorTheme?: string,
    types?: PokeType[],
    weight?: number, 
    height?: number,
    hp?: number,
    att?: number,
    def?: number,
    satk?: number,
    sdef?: number,
    spd?: number 
}