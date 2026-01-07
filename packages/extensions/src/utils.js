export class Collection {
    constructor(data, idFn = (item) => item.id) {
        if (Array.isArray(data)) {
            this.map = Object.fromEntries(data.map((item) => [idFn(item), item]));
            this.list = data;
        }
        else {
            this.map = data;
            this.list = Object.values(data);
        }
    }
    static fromList(list, idFn = (item) => item.id) {
        return new Collection(list, idFn);
    }
    static fromMap(map) {
        return new Collection(map);
    }
}
