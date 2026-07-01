import Node from "./Node.js";

class Tree {
  constructor(arr) {
    this.arr = [...new Set(arr)].sort((a, b) => a - b);
    this.root = this.buildTree(arr, 0, this.arr.length - 1);
  }

  buildTree(array, start, end) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(array[mid]);

    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);

    return root;
  }
}

export default Tree;
