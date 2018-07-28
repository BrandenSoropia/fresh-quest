import React from 'react';
import styled from 'styled-components';

const FlexVertical = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
    text-align: left;
`

const ActionName = styled.div`
    text-decoration:underline;
`

const ActionDetail = styled.div`
    & span:first-child {
        font-weight: 700;
    }
`

const Action = ({
    type,
    damage,
    targetType
}) => (
    <FlexVertical className="Action">
        <ActionName className="type">
            <span>{type}</span>
        </ActionName>
        <ActionDetail className="damage">
            <span>Damage:</span>
            <span>{damage}</span>
        </ActionDetail>
        <ActionDetail className="target-type">
            <span>Target:</span>
            <span>{targetType}</span>
        </ActionDetail>
    </FlexVertical>
)



export default Action;