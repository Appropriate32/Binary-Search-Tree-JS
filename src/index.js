import Node from "./Node.js";
import Tree from "./Tree.js";

function buildTree(array, start = 0, end = array.length() - 1, sorted = false) {
  if (start > end) return null;

  if (!sorted) {
    array = [...new Set(array)];
    array.sort();
    sorted = true;
  }

  let mid = start + Math.floor((end - start) / 2);
  let root = new Node(array[mid]);

  root.left = buildTree(array, start, mid - 1, sorted);
  root.right = buildTree(array, mid + 1, end);

  return root;
}
