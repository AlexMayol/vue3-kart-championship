// this would be an API call
import { initialData } from '@/assets/drivers_karts'

import { Leaderboard, PilotPosition } from "@/interfaces";

export const useLeaderboard = () => {

  const races: Leaderboard[] = [];

  const allRaces = initialData[0].races;
  for (const race of allRaces) {
    races.push({ raceName: race.name, result: [] })
  }

  for (const race of races) {
    for (const pilot of initialData) {
      const result: PilotPosition = {
        pilotId: pilot._id,
        time: '',
      };

      const { time } = pilot.races.find(r => r.name === race.raceName)!

      result.time = time;
      race.result.push(result)
    }
    // ya tenemos todos los pilotos y sus tiempos en cada createRouterMatcher, ahora ordenamos para saber posicion en carrera
    
    race.result.sort((a, b) => {

      // compare time stamps like '1:0:56.521' with '1:59:58.061'
      const first = a.time.split('.')[0].split(':')
      const second = b.time.split('.')[0].split(':')

      if (parseInt(first[0]) < parseInt(second[0]))
        return -1
      if (parseInt(first[0]) > parseInt(second[0]))
        return 1

      if (parseInt(first[1]) < parseInt(second[1]))
        return -1
      if (parseInt(first[1]) > parseInt(second[1]))
        return 1

      if (parseInt(first[2]) < parseInt(second[2]))
        return -1
      if (parseInt(first[2]) > parseInt(second[2]))
        return 1

      return 1

    })

  }
  return races
}
