export interface Pilot {
    _id: string;
    picture: string;
    age: number;
    team: string;
    name: string;
}

export interface RaceResult {
    time: string;
    position: number;
}


export interface PilotInRace{
    pilot: Pilot;
    result: RaceResult;
}


export interface Leaderboard {
    race: string;
    result: {
        pilotId: string;
        time: string;
        postition: number;
    }[];
}

export interface Race {
    name: string;
    pilots: PilotInRace[];
}