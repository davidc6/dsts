import { expect } from 'chai'
import { describe } from 'mocha'
import { TreeNode } from './'

describe('Tree algorithms', () => {
    it('Invert a binary tree', () => {
        const t = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        t.left.left = new TreeNode(4);
        t.left.right = new TreeNode(5);
        t.right.left = new TreeNode(6);
        t.right.right = new TreeNode(7);

        expect(t.toArray()).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
        t.invert();
        expect(t.toArray()).to.deep.equal([1, 3, 2, 7, 6, 5, 4]);
    });

    it('Calculate max depth of a tree', () => {
        // level 1
        const t = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        // level 2
        t.left.left = new TreeNode(4);
        t.left.right = new TreeNode(5);
        t.right.left = new TreeNode(6);
        t.right.right = new TreeNode(7);
        // level 3
        t.right.right.left = new TreeNode(8);

        expect(t.maxDepth()).to.equal(3);
    });

    it('Calculate diameter of a tree', () => {
        const t = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        t.left.left = new TreeNode(4);
        t.left.right = new TreeNode(5);
        t.right.left = new TreeNode(6);
        t.right.right = new TreeNode(7);

        expect(t.diameter()).to.equal(4);
    });
});
