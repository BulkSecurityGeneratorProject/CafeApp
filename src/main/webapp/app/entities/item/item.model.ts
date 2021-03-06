import { BaseEntity } from './../../shared';

export class Item implements BaseEntity {
    constructor(
        public id?: number,
        public url?: string,
        public description?: string,
        public name?: string,
        public image?: string,
        public tags?: string,
        public date?: any,
        public categories?: String[],
    ) {
    }
}
