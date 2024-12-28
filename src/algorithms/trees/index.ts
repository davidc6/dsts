export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    // Breadth-first search using a queue
    private bfs() {
        let queue: TreeNode[] = [];

        let result = [this.val];

        queue.push(this.left!); // this should avoid !
        queue.push(this.right!); // this should avoid !

        let depth = 1;

        while (queue.length) {
            let n = queue.shift();

            if (!n) {
                break;
            }

            result.push(n.val);

            // There is left TreeNode
            if (n.left) {
                queue.push(n.left);
            }

            // There is right TreeNode
            if (n.right) {
                queue.push(n.right);
            }
        }

        return result;
    }

    invert() {
        this._invert(this);
    }

    private _invert(tree: TreeNode | null) {
        // base case
        if (tree === null || tree.left === null || tree.right === null) {
            return;
        }

        // swap left and right node
        [tree.left, tree.right] = [tree.right, tree.left];
        this._invert(tree.left);
        this._invert(tree.right);
    }

    maxDepth() {

        return this._maxDepth(this);
    }

    private _maxDepth(root: TreeNode): number {
        if (root === null) {
            return -1;
        }

        let leftHeight = this._maxDepth(root.left!);
        let rightHeight = this._maxDepth(root.right!);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    toArray() {
        return this.bfs();
    }
}
