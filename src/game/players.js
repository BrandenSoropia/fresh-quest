import constants from './constants';
const { ATTACK, TARGET, STATUS } = constants;
/**
 * Let's keep it simple. Ranges:
 * Status: normal || infected -> infected when bugs lay eggs in fruit? dmg per turn effect. Lemon cure?
 * HP: 1 - 10 -> Flesh revealed depending on %HP, 100%: Nothing, 75%: Bruising, 50%: Small tears, 25%: opened  
 * Armour: 0 - 5 -> hardness of outer layer of fruit. If 0, fruit starts taking damage and exposing flesh
 * Priority: 1 - 3 -> Dictates turn order where 3 being last, 1 being first
 * actions: [
 *   basic
 *   special: { -> empowered, semi-flashy attacks
 *     req: {
 *       type: dictates what kind of data condition requires,
 *       condition: return true iff special attack can be done
 *     }
 *   }
 * ]
 */

const WATERMELON = {
    name: 'Watermelon',
    hp: 10,
    armour: 5,
    priority: 3,
    actions: [{
        type: ATTACK.BASIC,
        damage: 1,
        target: TARGET.SINGLE
    }, { // Like a smite
        type: ATTACK.SPECIAL,
        damage: -1,
        target: TARGET.SINGLE,
        condition: ({ specialPoints }) => specialPoints >= 3

    }]
}

const FRUIT_FLY = {
    name: 'Fruit Fly',
    hp: 1,
    armour: 0,
    priority: 1,
    actions: [{
        type: ATTACK.BASIC,
        damage: 1,
        target: TARGET.SINGLE
    }, { // Feast, maybe only available when fruit flesh exposed
        type: ATTACK.SPECIAL,
        damage: 1,
        target: TARGET.SINGLE,
        condition: ({ targetPlayer }) => [STATUS.BRUISED, STATUS.WORN, STATUS.ROTTEN].includes(targetPlayer.status)
    }]
}

export default {
    CHARACTER: {
        WATERMELON
    },
    ENEMY: {
        FRUIT_FLY
    }
};
