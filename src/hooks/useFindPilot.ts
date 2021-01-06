import {usePilotList} from './usePilotList'
import { Pilot } from '@/interfaces'

import { pilotNameToURL } from "@/helpers";

export const useFindPilot = (name: string)=>{
    
    const {pilots} = usePilotList();

    const pilot: Pilot = pilots.find( (p: Pilot) => pilotNameToURL(p.name) === name)!

    return pilot
  
}