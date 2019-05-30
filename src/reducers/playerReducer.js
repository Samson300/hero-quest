
const initialState = {
    position: [0,0],
    spriteLocation: 'center top',
    direction: 'SOUTH',
    walkIndex: 0,
    inBattle: 'none',
    inBattleCaveBoss: 'none',
    inBattleDungeonBoss: 'none',
    inBattleDungeonBossTwo: 'none',
    inStore: 'none',
    isListening: true,
    // basePlayerHP will be constant in order for the HP to increment
    // as the player levels.
    basePlayerHP: 100,
    addedHP: 10,
    maxPlayerHP: 100,
    playerAttack: 10,
    playerLevel: 1,
    playerExp: 0,
    gold: 10,
    inventory: []
}

// Manages how we are changing the state
const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        // this handles our move player action
        case 'MOVE_PLAYER':
            return {
                ...state,
                ...action.payload
            }
        case 'MONSTER_ATTACK':
            return {
                ...state,
                // monsterAttack damages the player
                maxPlayerHP: state.maxPlayerHP - action.payload.monsterAtk
            }
        case 'BATTLE_END':
            return {
                ...state,
                playerExp: state.playerExp + action.payload.exp,
                gold: state.gold + action.payload.gold,
                isListening: true
            }
        case 'BATTLE_END_CAVE_BOSS':
            return {
                ...state,
                playerExp: state.playerExp + action.payload.exp,
                gold: state.gold + action.payload.gold,
                isListening: true
            }
        case 'BATTLE_END_DUNGEON_BOSS':
                return {
                    ...state,
                    playerLevel: state.playerLevel + action.payload.level,
                    gold: state.gold + action.payload.gold,
                    isListening: true
                }
            case 'BATTLE_END_DUNGEON_BOSS_2':
                    return {
                        ...state,
                        playerLevel: state.playerLevel + action.payload.level,
                        gold: state.gold + action.payload.gold,
                        isListening: true
                    }
        case 'LEVEL_UP':
            return {
                ...state,
                // addedHP will be added by the hp from BattleContainer's action.payload.hp.
                addedHP: state.addedHP + action.payload.hp,
                // maxPlayerHP is the max HP after leveling up.
                maxPlayerHP: state.basePlayerHP + state.addedHP,
                playerExp: 0,
                playerLevel: state.playerLevel + action.payload.lvl,
                playerAttack: state.playerAttack + action.payload.playerAtk
            }
        case 'LEVEL_UP_CAVE_BOSS':
            return {
                ...state,
                // addedHP will be added by the hp from BattleContainer's action.payload.hp.
                addedHP: state.addedHP + action.payload.hp,
                // maxPlayerHP is the max HP after leveling up.
                maxPlayerHP: state.basePlayerHP + state.addedHP,
                playerExp: 0,
                playerLevel: state.playerLevel + action.payload.lvl
            }
        case 'HEAL_PLAYER':
            return {
                ...state,
                ...action.payload,
                maxPlayerHP: state.basePlayerHP + state.addedHP
            }
        case "BATTLE_ON":
            return {
            ...state,
            // ...action.payload,
            inBattle: action.payload.inBattle
        }
        case "BATTLE_STATUS":
            return {
            ...state,
            // ...action.payload,
            inBattle: action.payload.inBattle,
            isListening: action.payload.isListening
            
        }
        case "BATTLE_STATUS_CAVE_BOSS":
            return {
                ...state,
                inBattleCaveBoss: action.payload.inBattleCaveBoss,
                isListening: action.payload.isListening
            }
        case "BATTLE_STATUS_DUNGEON_BOSS":
            return {
                ...state,
                inBattleDungeonBoss: action.payload.inBattleDungeonBoss,
                isListening: action.payload.isListening
            }
        case "BATTLE_STATUS_DUNGEON_BOSS_2":
            return {
                ...state,
                inBattleDungeonBossTwo: action.payload.inBattleDungeonBossTwo,
                isListening: action.payload.isListening
            }
        case "CAVE_BOSS_ATTACK":
            return {
                ...state,
                maxPlayerHP: state.maxPlayerHP - action.payload.caveBossAtk
            }
        case "DUNGEON_BOSS_ATTACK":
                return {
                    ...state,
                    maxPlayerHP: state.maxPlayerHP - action.payload.dungeonBossAtk
                }
        case "DUNGEON_BOSS_2_ATTACK":
            return {
                ...state,
                maxPlayerHP: state.maxPlayerHP - action.payload.dungeonBossTwoAtk
            }
        // combine this and buy armor into buy_item case
        case "BUY_SWORD":
            console.log(state.inventory)
            if (state.gold >= 5) {
                return {
                    ...state,
                    playerAttack: state.playerAttack + action.payload.playerAttack,
                    inventory: state.inventory.concat(action.payload.name),
                    gold: state.gold - action.payload.gold
                }
            } else {
                return {
                    ...state,
                }
            }
        case "BUY_ARMOR":
            return {
            ...state,
            maxPlayerHP: state.maxPlayerHP + action.payload.hp,
            inventory: state.inventory.concat(action.payload.name)
        }
        case "STORE_STATUS":
                return {
                ...state,
                inStore: action.payload.inStore
            }
            // combine all buying functions into this one
        // case "ADD_ITEM_TO_INVENTORY":
        //         return {
        //         ...state,
        //         inStore: action.payload.inStore
        //     }
        default:
            return state
    }
}

export default playerReducer;