import { Pilot } from '@/interfaces'

// this would be an API call
import {initialData} from '@/assets/drivers_karts'

export const usePilotList = ()=>{
    
    const pilots: Pilot[] = [];

    for (const pilot of initialData) {
      pilots.push({
        _id: pilot._id,
        name: pilot.name,
        age: pilot.age,
        team: pilot.team,
        picture: pilot.picture,
      })
    }

    return pilots
}