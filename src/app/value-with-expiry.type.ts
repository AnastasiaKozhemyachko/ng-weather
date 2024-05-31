export interface ValueWithExpiry<Item> {
    expiration?: number;
    value?: Item;
    key?: string | number;
}
