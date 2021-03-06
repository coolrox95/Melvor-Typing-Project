/** Rolls an interger value between [minValue,maxValue] */
declare function rollInteger(minValue: number, maxValue: number): number;
/** Gets a random element from an array */
declare function getRandomArrayElement<T>(array: T[]): T;
/** Clamps a value between min and max */
declare function clampValue(value: number, min: number, max: number): number;
/** Checks if the player meets the level requirements, and returns the failed ones */
declare function checkLevelRequirements(requirements: SkillReq[]): SkillReq[];
declare const joinList: (seperator: string) => (list: string[]) => string;
declare const joinAsList: (list: string[]) => string;
declare const joinAsSuperList: (list: string[]) => string;
/** Compute the combat level of a monster */
declare function getMonsterCombatLevel(mID: number): number;
declare function pluralS(number: number): "s" | "";
declare function createElement<T extends keyof HTMLElementTagNameMap>(tagName: T, options?: ElemCreationOptions): HTMLElementTagNameMap[T];
declare function hideElement(elem: HTMLElement): void;
declare function showElement(elem: HTMLElement): void;
declare function isSkillLocked(skillID: number): boolean;
declare type ElemCreationOptions = {
    /** Sets the element classlist */
    classList?: string[];
    /** Appends the child to a parent node */
    parent?: HTMLElement;
    /** Appends the children to the element */
    children?: Node[];
    /** Sets the element's text */
    text?: string;
    /** List of attributes to set on the element */
    attributes?: [string, string][];
    /** Element ID */
    id?: string;
};
declare function isSeedItem(item: GenericItem): item is SeedItem;
declare function isEquipment(item: GenericItem): item is EquipmentItem;
declare function isWeapon(item: EquipmentItem): item is WeaponItem;
declare function getPlayerCombatLevel(): number;
declare type SeedTier = 'Allotment' | 'Herb' | 'Tree';
interface SeedItem extends BaseItem {
    /** [SkillID,MasteryID] */
    masteryID: [SkillID, number];
    /** Type of plot item can be planted in, flags type */
    tier: SeedTier;
    /** Minimum Farming level required to plant */
    farmingLevel: number;
    /** Base farming xp per item harvested */
    farmingXP: number;
    /** Number of seeds required to plant */
    seedsRequired: number;
    /** Base time in s */
    timeToGrow: number;
    /** ItemID of harvested item */
    grownItemID: ItemID;
    /** Unused ID */
    farmingMasteryID?: number;
}
/** Helper class for managing the bank */
declare class BankHelper {
    protected manager: BaseManager;
    protected updatesRequired: Set<ItemID>;
    constructor(manager: BaseManager);
    /** Renders the bank as per the updates required */
    render(): void;
    /** Adds a quantity of an item to the bank */
    addItem(itemID: number, quantity: number): boolean;
    /** Adds a quantity of an item to the bank */
    addQuantity(itemID: number, quantity: number): void;
    /** Gets the quantity of an item from the bank */
    getQty(itemID: number): number;
    /** Checks for item costs */
    checkForItems(costs: ItemQuantity2[]): boolean;
    /** Consumes item costs */
    consumeItems(costs: ItemQuantity2[]): void;
}
/** Golbin raid bank */
declare class GolbinBank extends BankHelper {
    protected manager: RaidManager;
    private inventory;
    constructor(manager: RaidManager);
    render(): void;
    addItem(itemID: number, quantity: number): boolean;
    addQuantity(itemID: number, quantity: number): void;
    getQty(itemID: number): number;
    addToExisting(quantity: number): void;
    empty(): void;
    getHistory(): ItemQuantity[];
}
/** Helps queue game notifications */
declare class NotificationQueue {
    private maxNotifiactions;
    private queue;
    constructor(maxNotifiactions: number);
    notify(): void;
    add(notification: QueuedNotify): void;
    clear(): void;
}
declare type QueuedNotify = ItemNotify | GPNotify | StunNotify | BankFullNotify | LevelUpNotify | PlayerNotify | GlovesNotify | SlayerNotify | MasteryNotify;
declare type ItemNotify = {
    type: 'Item';
    args: Parameters<typeof itemNotify>;
};
declare type GPNotify = {
    type: 'GP';
    args: Parameters<typeof gpNotify>;
};
declare type StunNotify = {
    type: 'Stun';
    args: Parameters<typeof stunNotify>;
};
declare type BankFullNotify = {
    type: 'BankFull';
    args: Parameters<typeof bankFullNotify>;
};
declare type LevelUpNotify = {
    type: 'LevelUp';
    args: Parameters<typeof levelUpNotify>;
};
declare type PlayerNotify = {
    type: 'Player';
    args: Parameters<typeof notifyPlayer>;
};
declare type GlovesNotify = {
    type: 'Gloves';
    args: Parameters<typeof notifyGloves>;
};
declare type SlayerNotify = {
    type: 'Slayer';
    args: Parameters<typeof notifySlayer>;
};
declare type MasteryNotify = {
    type: 'Mastery';
    args: Parameters<typeof notifyMasteryLevelUp>;
};
declare function createLevelUpModal(skill: SkillID): SweetAlertOptions;
declare function getItemBaseStatsBreakdown(itemID: ItemID): string;
declare function lockedSkillAlert(skillID: number, message: string): void;
declare function updateMonsterStats(): void;
declare function updateDungeonCount(): void;
declare function showStunnedNotification(): void;
declare function showSleepNotification(): void;
declare function cdnMedia(media: string): string;
declare function getMonsterMedia(monster: Monster): string;
