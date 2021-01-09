export const nameToURL = (name: string) => {
    return name.trim().toLocaleLowerCase().replace(' ', '-');
}


export const addPositionSufix = (position: number) => {

    if (position === 1)
        return 'st';

    if (position === 2)
        return 'nd';

    if (position === 4)
        return 'rd';
        
    return 'th';
}
export const orderRaceTime = (time1: string, time2: string) => {

    // compare time stamps like '1:0:56.521' with '1:59:58.061'
    const first = time1.split('.')[0].split(':')
    const second = time2.split('.')[0].split(':')

    if (parseInt(first[0]) < parseInt(second[0]))
        return 1
    if (parseInt(first[0]) > parseInt(second[0]))
        return -1

    if (parseInt(first[1]) < parseInt(second[1]))
        return 1
    if (parseInt(first[1]) > parseInt(second[1]))
        return -1

    if (parseInt(first[2]) < parseInt(second[2]))
        return 1
    if (parseInt(first[2]) > parseInt(second[2]))
        return -1

    return 1

}