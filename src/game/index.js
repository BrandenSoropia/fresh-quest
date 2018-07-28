import React, { Component } from 'react';
import players from './players';
const { CHARACTER, ENEMY } = players;

export default class GameContainer extends Component {
    constructor(props) {
        super(props);

        const players = [CHARACTER.WATERMELON];
        const enemies = [ENEMY.FRUIT_FLY, ENEMY.FRUIT_FLY];
        const allParticipants = [...players, ...enemies];

        this.state = {
            players,
            enemies,
            turnQueue: this.generateTurnQueue(allParticipants),
            currentTurnIdx: 0
        }
    }

    generateTurnQueue = (allParticipants) => {        
        return allParticipants.sort((character1, character2) => {
            if (character1.priority < character2.priority) { // character 1 is first
                return -1;
            } else if (character1.priority === character2.priority) { // Don't shift
                return 0;
            } else { // Character 2 is first
                return 1;
            }
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="Game"></div>
        )
    }
}