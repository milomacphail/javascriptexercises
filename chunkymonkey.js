function chunkArrayInGroups(arr, size) {
    var chunk = [];
    var item = 0;
    while (item < arr.length) {
        chunk.push(arr.slice(item, item+= size));
    }
    return chunk;
}
    chunkArrayInGroups([\"a\", \"b\", \"c\", \"d\"], 2);