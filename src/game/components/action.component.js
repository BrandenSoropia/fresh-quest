import React, { Component } from 'react';
import styled from 'styled-components';

const FlexVertical = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
    text-align: left;

    ${props => props.isSelected && `
        border: 2px solid black;
    `}
`

const ActionName = styled.div`
    text-decoration:underline;
`

const ActionDetail = styled.div`
    & span:first-child {
        font-weight: 700;
    }
`

export default class Action extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false,
        }
    }

    handleOnClick = () => {
        const {
            type,
            damage,
            targetType,
            isActive,
            onActionClick
        } = this.props;

        if (isActive) {
            onActionClick({ type, damage, targetType });
            this.setState(({ isSelected }) => ({
                isSelected: !isSelected
            }))
        }
    }

    render() {
        const {
            type,
            damage,
            targetType
        } = this.props;

        return (
            <FlexVertical
                className="Action"
                onClick={this.handleOnClick}
                isSelected={this.state.isSelected}
            >
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
    }   
}