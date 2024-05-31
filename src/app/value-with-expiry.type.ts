export interface ValueWithExpiry<Item> {
    expiry?: number;
    value?: Item;
    key?: string | number;
}
