import React, { Component } from 'react';
import players from './players';
import CombatantState from './components/combatant-state.component';

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
            currentTurnIdx: 2,
            selectedAction: {},
            selectedTarget: [],
            isSelectingTarget: false
        }
    }

    selectAction = selectedAction => {
        this.setState(prevState => ({
            ...prevState,
            selectedAction
        }))
    }

    selectTarget = selectedTarget => {
        this.setState(prevState => ({
            ...prevState,
            selectedTarget
        }))
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
        const { turnQueue, currentTurnIdx, isSelectingTarget } = this.state;
        // const currentTurnParticipant = turnQueue[currentTurnIdx];

        return (
            <div className="GameContainer">
                <div className="battle-container">
                    {turnQueue.map((combatant, idx) => {
                        const isCurrentTurn = currentTurnIdx === idx;

                        return <CombatantState
                            key={`combatant-state-${idx}`}
                            {...combatant}
                            isCurrentTurn={isCurrentTurn}
                            onActionClick={this.selectAction}
                            isSelectable={isSelectingTarget}
                            onTargetSelection={this.selectTarget}
                        />
                    })}
                </div>
            </div>
        )
    }
}