import React, { Component } from 'react';
import players from './players';
import CombatantState from './components/combatant-state.component';
// import Action from './components/action.component';

const { CHARACTER, ENEMY } = players;

export default class GameContainer extends Component {
    constructor(props) {
        super(props);

        const players = [CHARACTER.WATERMELON];
        const enemies = [ENEMY.FRUIT_FLY, ENEMY.BLACK_FLY];
        const allCombatants = [...players, ...enemies];

        this.state = {
            players,
            enemies,
            turnQueue: this.generateTurnQueue(allCombatants),
            currentTurnIdx: 0,
            isActionSelected: false,
            areTargetsSelected: false,
        }
    }

    generateTurnQueue = (allCombatants) => {        
        return allCombatants.sort((character1, character2) => {
            if (character1.priority < character2.priority) { // character 1 is first
                return -1;
            } else if (character1.priority === character2.priority) { // Don't shift
                return 0;
            } else { // Character 2 is first
                return 1;
            }
        })
    }

    nextTurn = () => {
        this.setState(prevState => ({
            ...prevState,
            currentTurnIdx: prevState.currentTurnIdx++
        }))
    }

    takeTurn = (action, target) => {
        // TODO: Handle basic attack
        // TODO: Handle Special Attack
    }

    render() {
        const { turnQueue, currentTurnIdx, player } = this.state;
        // const currentTurnParticipant = turnQueue[currentTurnIdx];

        return (
            <div className="GameContainer">
                <div className="battle-container">
                    {/* TODO: Display all participants' states in text for now */}
                    {turnQueue.map((combatant, idx) => <CombatantState {...combatant} isCurrentTurn={currentTurnIdx === idx} />)}
                </div>
                {/* <div className="actions-container">
                    {currentTurnParticipant.isPlayerControlled && (
                        currentTurnParticipant.actions.map((action, idx) => <Action {...action} key={`action-${idx}`}/>)
                    )}
                </div> */}
            </div>
        )
    }
}