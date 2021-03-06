/** Combat Management class for golbin raid */
declare class RaidManager extends BaseManager {
    player: RaidPlayer;
    enemy: Golbin;
    bank: GolbinBank;
    private itemSelection;
    private itemSelectionCount;
    private itemLevelBrackets;
    wave: number;
    private get waveLength();
    private get fightingBoss();
    private waveProgress;
    private get waveBracket();
    private get waveSkipCost();
    private get coinsEarned();
    get canInteruptAttacks(): boolean;
    get areaRequirements(): Requirement[];
    get areaModifiers(): ModifierData;
    private killCount;
    private specialAttackSelection;
    isFightingITMBoss: boolean;
    onSlayerTask: boolean;
    private startTimestamp;
    private endTimestamp;
    constructor();
    startRaid(): void;
    private toggleOffSelectors;
    private toggleOnSelectors;
    private prayerUnlockedSelectors;
    private toggleUIOff;
    private toggleUIOn;
    stopCombat(fled?: boolean): void;
    skipWave(): void;
    private recordRaidHistory;
    private computeItemSelection;
    private getItemSelection;
    private getCategoryQuantity;
    private getItemChoices;
    protected createNewEnemy(): void;
    protected onEnemyDeath(): boolean;
    protected loadNextEnemy(): void;
    private showEquipmentCategoryModal;
    private continueRaid;
    addRunesCallback(itemID: number, quantity: number): void;
    addFoodCallback(itemID: number, quantity: number): void;
    equipItemCallback(itemID: number, quantity: number, isAlt: boolean): void;
    rerollPassiveCallback(): void;
    addExistingRunesCallback(quantity: number): void;
    protected spawnEnemy(): void;
    selectNothingCallback(): void;
    showEquipmentSelectionModal(category: keyof RaidItemSelection): void;
    protected renderLocation(): void;
    addMonsterStat(statID: MonsterStats, amount?: number): void;
    addCombatStat(statID: CombatStats, amount?: number): void;
    private setDefaultEquipment;
}
declare type RaidItemSelection = {
    weapons: ItemID[][];
    armour: ItemID[][];
    ammo: ItemID[][];
    runes: ItemID[][];
    food: ItemID[][];
    passives: ItemID[][];
};
