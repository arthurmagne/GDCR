export function isCellLiving(numberOfNeighbor) {
    if (numberOfNeighbor >= 2) {
        return true;
    } else {
        return false;
    }
}