import { useLeaderboard } from "./useLeaderboard";

import { Ranking } from '@/interfaces'

export const useRanking = () => {
    const data = useLeaderboard()!;
    
    const pilots: string[] = [];
    for (const pilotId of data[0].result)
    pilots.push(pilotId.pilotId);
    
    const numOfPilots = pilots.length;

    const ranking: Ranking[] = []

    for (const pilot of pilots) {
        const rank: Ranking = { pilotId: pilot, points: 0, victories: 0 };
        for (const race of data) {
            const pos = race.result.findIndex(r => r.pilotId === pilot)
            // since 0 is the first and 22 the last, let's fix it with the absolute value
            rank.points = (Math.abs(pos - numOfPilots) +1) * 3;
            if(pos === 0)  
                rank.victories++
        }
        ranking.push(rank)
    }
    
    ranking.sort( (a, b) => (a.points < b.points) ? 1 : -1 )
    return ranking
};
