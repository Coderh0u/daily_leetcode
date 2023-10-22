var topKFrequent = function (nums, k) {
  const intCounts = new Object();
  for (let i = 0; i < nums.length; i++) {
    if (intCounts[nums[i]]) {
      intCounts[nums[i]]++;
    } else {
      intCounts[nums[i]] = 1;
    }
  }
  console.log(intCounts);
  const heap = new MaxHeap();
  for (let num in intCounts) {
    const value = intCounts[num];
    heap.push({ num, value });
  }
  console.log(heap);
  const output = [];
  for (let i = 0; i < k; i++) {
    output.push(parseInt(heap.poll().num));
  }
  return output;
};

class MaxHeap {
  constructor() {
    this.data = [];
  }

  getParentIdx = (i) => {
    return Math.floor((i - 1) / 2);
  };

  getLeftIdx = (i) => {
    return i * 2 + 1;
  };

  getRightIdx = (i) => {
    return i * 2 + 2;
  };

  swapData = (i, j) => {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  };

  compareObjects = (a, b) => {
    return a.value > b.value;
  };

  heapifyUp = () => {
    let currentIdx = this.data.length - 1;

    while (currentIdx > 0) {
      const parentIdx = this.getParentIdx(currentIdx);

      if (this.compareObjects(this.data[currentIdx], this.data[parentIdx])) {
        this.swapData(currentIdx, parentIdx);
        currentIdx = parentIdx;
      } else {
        return;
      }
    }
  };

  heapifyDown = () => {
    let currentIdx = 0;

    while (this.getLeftIdx(currentIdx) < this.data.length) {
      const leftIdx = this.getLeftIdx(currentIdx);
      const rightIdx = this.getRightIdx(currentIdx);
      let bigChildIdx = leftIdx;

      if (
        rightIdx < this.data.length &&
        this.compareObjects(this.data[rightIdx], this.data[leftIdx])
      ) {
        bigChildIdx = rightIdx;
      }

      if (this.compareObjects(this.data[bigChildIdx], this.data[currentIdx])) {
        this.swapData(currentIdx, bigChildIdx);
        currentIdx = bigChildIdx;
      } else {
        return;
      }
    }
  };

  push = (obj) => {
    this.data[this.data.length] = obj;
    this.heapifyUp();
  };

  poll = () => {
    const topObj = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();
    return topObj;
  };
}

