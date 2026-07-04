import Node from "./Node.js";
import Tree from "./Tree.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
};

function getRandomIntArray(length, min, max) {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min,
  );
}

const treeObj = new Tree(getRandomIntArray(10, 0, 99));

console.log(treeObj.isBalanced());

let elementList = [];

treeObj.inOrderForEach((value) => elementList.push(value));

console.log("In Order:");
console.log(elementList.join(" -> "));

elementList = [];

treeObj.preOrderForEach((value) => elementList.push(value));

console.log("\nPre Order:");
console.log(elementList.join(" -> "));

elementList = [];

treeObj.postOrderForEach((value) => elementList.push(value));

console.log("\nPost Order:");
console.log(elementList.join(" -> "));

elementList = [];

treeObj.levelOrderForEach((value) => elementList.push(value));

console.log("\nLevel Order:");
console.log(elementList.join(" -> "));

treeObj.insert(102);
treeObj.insert(109);
treeObj.insert(144);

prettyPrint(treeObj.root);

console.log(
  treeObj.isBalanced()
    ? "\nThis tree is still balanced"
    : "\nThis tree is unbalanced",
);

treeObj.rebalance();

prettyPrint(treeObj.root);

treeObj.inOrderForEach((value) => elementList.push(value));

console.log("In Order:");
console.log(elementList.join(" -> "));

elementList = [];

treeObj.preOrderForEach((value) => elementList.push(value));

console.log("\nPre Order:");
console.log(elementList.join(" -> "));

elementList = [];

treeObj.postOrderForEach((value) => elementList.push(value));

console.log("\nPost Order:");
console.log(elementList.join(" -> "));

elementList = [];

treeObj.levelOrderForEach((value) => elementList.push(value));

console.log("\nLevel Order:");
console.log(elementList.join(" -> "));
