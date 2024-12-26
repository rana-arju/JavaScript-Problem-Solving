class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
}

const table = new HashTable(50);

// First recurring number or string returned

var repeatedCharacter = function (s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      return s[i];
    } else {
      map[s[i]] = true;
    }
  }
  return null;
};

// console.log(repeatedCharacter("rana"));

// problem: passing two array and returning commom value/ element

const commonElement = (arr1, arr2) => {

  let map ={};

for (let i = 0; i < arr1.length; i++) {
  if (map[arr1[i]]) {
    map[arr1[i]]++;
  } else {
    map[arr1[i]] = 1;
  }
 
}
  console.log("Map after processing arr1:", map);

for (let j = 0; j < arr2.length; j++) {
  if (map[arr2[j]]) {
    return arr2[j];
  }
 }
  return null;
  
}





 console.log( commonElement([(12, 34, 43254, 546, 36, 745677)],
  [12, 5, 6, 46, 7, 56, 8]))

