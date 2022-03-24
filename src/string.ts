export function get_part(str: string, start: number, length: number | undefined = undefined): string {
    if (length != undefined) {
        if (length <= 0 || start + length > str.length) {
            throw "Length parameter is wrong";
        }
        return str.substring(start, start + length);
    }
    return str.substring(start);
}