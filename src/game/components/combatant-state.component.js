import React from 'react';
import styled from 'styled-components';
import Action from './action.component';

const Flex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction}
    
    ${props => props.isCurrentTurn && `background-color: green;`};
    text-align: left;
`

const Status = styled.div`
    & span:first-child {
        font-weight: 700;
    }
`

const CombatantState = ({
    name,
    status,
    isPlayerControlled,
    hp,
    armour,
    priority,
    actions,
    isCurrentTurn
}) => (
    <Flex className="CombatantState" direction="row" isCurrentTurn={isCurrentTurn}>
        <Flex direction="column" className="status-container">
            <Status>
                <span>Name:</span>
                <span>{name}</span>
            </Status>
            {isPlayerControlled && (<Status>
                <span>Status:</span>
                <span>{status}</span>
            </Status>)}
            <Status>
                <span>HP:</span>
                <span>{hp}</span>
            </Status>
            <Status>
                <span>Armour:</span>
                <span>{armour}</span>
            </Status>
            <Status>
                <span>Priority:</span>
                <span>{priority}</span>
            </Status>
        </Flex>
        <div>
            {actions.map(action => <Action {...action} />)}
        </div>
    </Flex>
)

export default CombatantState;