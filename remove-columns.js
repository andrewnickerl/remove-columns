const removeColumns = (originalGrid, numColumns) => {
    for(let i=0; i<originalGrid.length; i++) {
        var deleteIndex = originalGrid[i].length - numColumns;
        originalGrid[i].splice(deleteIndex, numColumns)
    }
    return originalGrid;
}

console.log(removeColumns(
   [[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]], 3))