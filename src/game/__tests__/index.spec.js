import React from 'react';
import { shallow } from 'enzyme';
import GameContainer from '../index';

describe('GameContainer', () => {
    it('generate turn queue should return a queue based on ascending priority values', () => {
        const shallowGameContainer = shallow(<GameContainer />);
        const participantsInDescendingPriority = [{ priority: 3}, { priority: 2}, { priority: 1}];
        const participantsInAscendingPriority = [{ priority: 1}, { priority: 2}, { priority: 3}];
        const allCombatantsWithSamePriority = [{ priority: 2}, { priority: 2}, { priority: 2}];
        const twoParticipantsWithSamePriority = [{ priority: 3}, { priority: 1}, { priority: 3}];

        expect(shallowGameContainer.instance().generateTurnQueue(participantsInDescendingPriority))
            .toEqual([{ priority: 1}, { priority: 2}, { priority: 3}]);
        expect(shallowGameContainer.instance().generateTurnQueue(participantsInAscendingPriority))
            .toEqual([{ priority: 1}, { priority: 2}, { priority: 3}]);
        expect(shallowGameContainer.instance().generateTurnQueue(allCombatantsWithSamePriority))
            .toEqual([{ priority: 2}, { priority: 2}, { priority: 2}]);
        expect(shallowGameContainer.instance().generateTurnQueue(twoParticipantsWithSamePriority))
            .toEqual([{ priority: 1}, { priority: 3}, { priority: 3}]);
    })
})