import { PokeType } from "./pokeType"

export type Pokemon = {
    pokemonImgUrl?: string,
    id: string,
    name: string,
    moves?: string[], 
    colorTheme?: string,
    types?: PokeType[],
    weight?: string, 
    height?: string,
    hp?: number,
    att?: number,
    def?: number,
    satk?: number,
    sdef?: number,
    spd?: number 
}