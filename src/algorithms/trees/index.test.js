import { expect } from 'chai'
import { describe } from 'mocha'
import { invertBinaryTree, TreeNode } from './'

describe.only('Tree algorithms', () => {
    it('Invert binary tree', () => {
        // const arr = [1, 2, 3, 4, 5, 6, 7];
        const t = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        t.left.left = new TreeNode(4);
        t.left.right = new TreeNode(5);
        t.right.left = new TreeNode(6);
        t.right.right = new TreeNode(7);

        // console.log(t)

        // const val = invertBinaryTree(t);

        console.log(t.bfs());
        invertBinaryTree(t);
        console.log(t.bfs());

        // expect(val).to.equal(7);
    });
});
