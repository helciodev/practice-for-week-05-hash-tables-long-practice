class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.data = new Array(numBuckets).fill(null);
    this.capacity = numBuckets;
    this.count = 0;
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key?.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }

  insert(key, value) {
    const LOAD_FACTOR = 0.7;
    // Your code here
    // Get index
    if (this.count / this.capacity > LOAD_FACTOR) this.resize();
    const newDataValue = new KeyValuePair(key, value);
    const index = this.hashMod(key);

    if (!this.data[index]) {
      this.data[index] = newDataValue;
    } else {
      let current = this.data[index];
      while (current && current.key !== key) {
        current = current.next;
      }
      if (current) {
        current.value = value;
        return;
      }
      newDataValue.next = this.data[index];
      this.data[index] = newDataValue;
    }
    this.count++;
  }

  read(key) {
    const index = this.hashMod(key);

    let current = this.data[index];
    while (current && current.key !== key) {
      current = current.next;
    }

    return current ? current.value : undefined;
  }

  resize() {
    const odlData = this.data;
    this.capacity = this.capacity * 2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
    for (let i = 0; i < odlData.length; i++) {
      let current = odlData[i];
      if (current) {
        while (current) {
          this.insert(current.key, current.value);
          current = current.next;
        }
      }
    }
  }

  delete(key) {
    let index = this.hashMod(key);

    let current = this.data[index];
    let previous;
    while (current && current.key !== key) {
      previous = current;
      current = current.next;
    }

    if (!current) return "Key not found";
    if (previous) {
      previous.next = current.next;
    } else {
      this.data[index] = current.next;
    }
    this.count--;
  }
}

module.exports = HashTable;
