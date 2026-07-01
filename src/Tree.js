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

  includes(value, checkNode = this.root) {
    if (checkNode === null) return false;

    if (value === checkNode.data) {
      return true;
    }

    if (value < checkNode.data) {
      return this.includes(value, checkNode.left);
    }

    if (value > checkNode.data) {
      return this.includes(value, checkNode.right);
    }
  }

  insert(value, treeNode = this.root) {
    if (this.root === null) {
      this.root = new Node(value);
      return;
    }

    if (value === treeNode.data) return;

    if (value < treeNode.data) {
      if (treeNode.left !== null) {
        this.insert(value, treeNode.left);
      } else {
        treeNode.left = new Node(value);
      }

      return;
    }

    if (value > treeNode.data) {
      if (treeNode.right !== null) {
        this.insert(value, treeNode.right);
      } else {
        treeNode.right = new Node(value);
      }

      return;
    }
  }

  deleteItem(value, treeNode = this.root) {
    if (treeNode === null) return;

    if (value < treeNode.data)
      treeNode.left = this.deleteItem(value, treeNode.left);
    else if (value > treeNode.data)
      treeNode.right = this.deleteItem(value, treeNode.right);
    else {
      if (treeNode.left === null) return treeNode.right;
      if (treeNode.right === null) return treeNode.left;

      const succ = this.getSuccessor(treeNode);
      treeNode.data = succ.data;
      treeNode.right = this.deleteItem(succ.data, treeNode.right);
    }

    return treeNode;
  }

  getSuccessor(curr) {
    curr = curr.right;
    while (curr !== null && curr.left !== null) curr = curr.left;

    return curr;
  }
}

export default Tree;
