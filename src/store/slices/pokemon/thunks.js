import { startLoadingPokemons } from "./pokemonSlice"

export const getPokemons=(page=0)=>{
    return (dispathc,getState)=>{
         dispathc(startLoadingPokemons()); 

         //TODO: realizar peticion http

         //dispathc(setPokemons());
    }
}