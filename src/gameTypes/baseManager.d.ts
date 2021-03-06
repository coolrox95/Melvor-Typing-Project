/** Base Class for Combat Managers */
declare abstract class BaseManager {
    abstract player: Player;
    abstract enemy: Enemy;
    areaType: LocationType;
    fightInProgress: boolean;
    private loopInterval;
    private loopStarted;
    protected renderCombat: boolean;
    protected previousTickTime: number;
    protected spawnTimer: Timer;
    abstract bank: BankHelper;
    notifications: NotificationQueue;
    tickCount: number;
    ticksMissed: number;
    allowDuplicateDOTS: boolean;
    isInCombat: boolean;
    private runButton;
    private miniBar;
    private viewDropsButton;
    rendersRequired: ManagerRenderQueue;
    protected locationElements: {
        image: HTMLImageElement;
        name: HTMLSpanElement;
        floorCount: HTMLSpanElement;
        count: HTMLSpanElement;
        areaEffect: HTMLSpanElement;
    };
    abstract readonly isFightingITMBoss: boolean;
    abstract readonly canInteruptAttacks: boolean;
    abstract readonly areaRequirements: Requirement[];
    abstract readonly areaModifiers: ModifierData;
    get tickRatio(): string;
    abstract readonly onSlayerTask: boolean;
    private maxOfflineTicks;
    constructor();
    initialize(): void;
    protected setCallbacks(): void;
    private minibarEatCallback;
    private minibarRunCallback;
    /** Starts the main combat loop */
    startCombatLoop(): void;
    /** Stops the main combat loop */
    stopCombatLoop(): void;
    /** Execute combat */
    protected runCombat(): void;
    /** Evaluates ticks of combat */
    protected processTime(): void;
    protected runTicks(ticksToRun: number): void;
    protected tick(): void;
    /** Renders combat in current state */
    protected render(): void;
    protected abstract renderLocation(): void;
    /** Checks for player or enemy death */
    protected checkDeath(): void;
    protected onPlayerDeath(): void;
    /** Called on enemy death, returns if combat should be stopped as a result */
    protected onEnemyDeath(): boolean;
    addMonsterStat(statID: MonsterStats, amount?: number): void;
    addCombatStat(statID: CombatStats, amount?: number): void;
    protected onSelection(): void;
    /** Callback function for running from combat */
    stopCombat(fled?: boolean): void;
    protected showMinibar(): void;
    protected hideMinibar(): void;
    protected loadNextEnemy(): void;
    /** Spawns a new enemy when the spawn timer fires */
    protected spawnEnemy(): void;
    protected startFight(): void;
    /** Ends the fight the player is currently in */
    protected endFight(): void;
    protected abstract createNewEnemy(): void;
    /** Function to execute on changing to the combat page */
    onPageChange(): void;
    serialize(): number[];
    deserialize(reader: DataReader, version: number): void;
}
interface ManagerRenderQueue {
    combatStats: boolean;
    location: boolean;
    dungeonCompletion: boolean;
    completionLog: boolean;
}
