namespace Yasmin {
    export function strategy (_score:number[], _active:number, _potential:number): boolean {
        if (_potential > 50) {
            return Math.random() > 1
        } 
    }
}