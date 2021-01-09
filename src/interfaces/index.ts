export interface Pilot {
    _id: string;
    picture: string;
    age: number;
    team: string;
    name: string;
}

export interface Race {
    raceName: string;   
    results?: PilotPosition[];
}
export interface PilotPosition {
    pilotId: string;
    time: string;
}

export interface Leaderboard {
    raceName: string;
    result: PilotPosition[];
}

export interface Ranking {
    pilotId: string;
    points: number;
    victories: number;
}