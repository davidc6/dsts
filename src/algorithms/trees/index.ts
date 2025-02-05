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

        while (queue.length) {
            let node = queue.shift();

            if (!node) {
                break;
            }

            result.push(node.val);

            // There is left TreeNode
            if (node.left) {
                queue.push(node.left);
            }

            // There is right TreeNode
            if (node.right) {
                queue.push(node.right);
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

    _diameterRecurring(root: TreeNode, res: { val: number }): number {
        if (root === null) {
            return 0;
        }

        let leftHeight = this._diameterRecurring(root.left!, res);
        let rightHeight = this._diameterRecurring(root.right!, res);

        // compare current diameter with the sum of left and right tree heights
        res.val = Math.max(res.val, leftHeight + rightHeight);

        // compare left and right heights
        return 1 + Math.max(leftHeight, rightHeight);
    }

    diameterByHeight() {
        const result = { val: 0 };
        this._diameterRecurring(this, result);
        return result.val;
    }

    diameter() {
        let queue = [this];
        let childQueue = [];
        let diameter = 0;

        while (queue.length) {
            if (queue.length > diameter) {
                diameter = queue.length;
            }

            let node = queue.shift();

            if (node) {

                if (node.left) {
                    childQueue.push(node.left);
                }

                if (node.right) {
                    childQueue.push(node.right);
                }
            }

            if (!queue.length) {
                queue = childQueue as this[];
                childQueue = [];
            }
        }

        return diameter;
    }

    toArray() {
        return this.bfs();
    }
}
