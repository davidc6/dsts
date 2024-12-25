import { Tree } from "../../main";

export class TreeNode {
    val: number;
    // root: TreeNode;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {

        // let t = new TreeNode(val, left, right);
        this.val = val;

        // this.root = t;
        this.left = left;
        this.right = right;
    }

    // bst_impl(val: number | null) {
    //     if (val === null) {
    //         return;
    //     }

    bSearch(n: TreeNode | null, a: any[]) {
        console.log('NODE ', n);

        if (n === null || n.left === null || n.right === null) {
            return;
        }

        // a.push(n.right.val);



        // a.push(n.val);
        this.bSearch(n.left, a);

        a.push(n.val);
        this.bSearch(n.right, a);


    }

    bfs() {
        let queue: TreeNode[] = [];

        let a = [this.val];

        queue.push(this.left!);
        queue.push(this.right!);


        while (queue.length) {
            let n = queue.shift();

            if (!n) {
                break;
            }

            a.push(n.val);



            if (n.left) {
                queue.push(n.left);
            }


            if (n.right) {
                queue.push(n.right);
            }

        }

        return a;
    }

    // bst() {
    //     bst(this.left)

    toArray() {
        return this.bfs();
    }
}

export const invertBinaryTree = (tree: TreeNode | null) => {
    if (tree === null) {
        return;
    }

    // swap left and right    
    [tree.left, tree.right] = [tree.right, tree.left];
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);

    return tree;
}