import { Pilot } from '@/interfaces'

import { nameToURL } from "@/helpers";

import {usePilotList} from './usePilotList'

export const useFindPilotByName = (name: string)=>{
    
    const pilots = usePilotList();

    const pilot: Pilot = pilots.find( (p: Pilot) => nameToURL(p.name) === name)!

    return pilot
  
}

export const useFindPilotById = (id: string)=>{
    
    const pilots = usePilotList();

    const pilot: Pilot = pilots.find( (p: Pilot) => p._id === id)!

    return pilot
  
}