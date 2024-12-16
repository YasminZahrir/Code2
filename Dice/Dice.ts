export namespace Yasmin {
    export function strategy (_score:number[], _active:number, _potential:number): boolean {
        if (_potential > 15) {
            return Math.random() < 0.8
        } else {
            return Math.random() < 0.5
        }
    }
}