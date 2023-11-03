import chai from 'chai';
import {isCellLiving} from './gameOfLife.js'
const { expect } = chai;


describe('isCellLiving()', function() {
    it('should return false if cell have one or less living neighbor', () => {
        const cellWithOneNeighbor = isCellLiving(1)
        expect(cellWithOneNeighbor).to.be.false;

        const cellWithNoNeighbor = isCellLiving(0)
        expect(cellWithNoNeighbor).to.be.false;
    });

    it('should return false if cell have more 4 neighbor', () => {
        const cellWithFourNeighbor = isCellLiving(4);
        expect(cellWithFourNeighbor).to.be.false;
    });
})