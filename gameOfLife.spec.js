import chai from 'chai';
import {isCellLiving} from './gameOfLife.js'
const { expect } = chai;


describe('isCellLiving()', function() {
    it('should return false if cell have one ore less neighbor', () => {
        const cellWithOneNeighbor = isCellLiving(1)
        expect(cellWithOneNeighbor).to.be.false;

        const cellWithNoNeighbor = isCellLiving(0)
        expect(cellWithOneNeighbor).to.be.false;
    });

})