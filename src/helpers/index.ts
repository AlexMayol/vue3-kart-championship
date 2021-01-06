export const pilotNameToURL = (name: string) => {
    return name.trim().toLocaleLowerCase().replace(' ', '-');
}