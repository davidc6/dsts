export function iterateOverObjects(obj: Record<string, string>) {
    const filteredMap: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
        const entry = key.split('-');
        filteredMap[entry[1]] = `${value}-${entry[0]}`
    }

    return filteredMap;
}
