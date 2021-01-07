import {usePilotList} from './usePilotList'
import { Pilot } from '@/interfaces'

import { pilotNameToURL } from "@/helpers";

export const useFindPilotByName = (name: string)=>{
    
    const pilots = usePilotList();

    const pilot: Pilot = pilots.find( (p: Pilot) => pilotNameToURL(p.name) === name)!

    return pilot
  
}

export const useFindPilotById = (id: string)=>{
    
    const pilots = usePilotList();

    const pilot: Pilot = pilots.find( (p: Pilot) => p._id === id)!

    return pilot
  
}