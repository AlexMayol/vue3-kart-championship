// import { Race } from '@/interfaces'

import { nameToURL } from "@/helpers";

import {useLeaderboard} from './useLeaderboard'

export const useFindRaceByName = (name: string)=>{
    
    const races = useLeaderboard();

    const race = races.find( (r) => nameToURL(r.raceName) === name)!

    return race
  
}