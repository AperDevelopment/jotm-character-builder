export default class Nation {
    readonly name: string;
    readonly races: string[];

    constructor(obj: any) {
        this.name = obj.name;
        this.races = obj.races;
    }
}