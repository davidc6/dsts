import { expect } from 'chai'
import { describe } from 'mocha'
import { BinarySearchTree } from './'
import { Node } from './node'

describe('BinarySearchTree', () => {
  let bst = null
  let rootNode = null

  beforeEach(() => {
    bst = new BinarySearchTree(new Node('first node'))
    rootNode = bst.getRoot()
  })

  it('initialises', () => {    
    bst = new BinarySearchTree()
    expect(bst).to.be.an.instanceOf(BinarySearchTree)
  })

  it('initialises with a root node', () => {
    expect(bst).to.be.an.instanceOf(BinarySearchTree)
    expect(rootNode).to.be.an.instanceOf(Node)
    expect(rootNode.data).to.equal('first node')
  })
  
  it('getRoot() - gets the root node', () => {
    expect(bst).to.be.an.instanceOf(BinarySearchTree)
    expect(bst.getRoot()).to.be.an.instanceOf(Node)
    expect(bst.getRoot().data).to.equal('first node')
  })
  
  it('insert() - inserts left and right nodes into the tree based on value', () => {
    bst.insert(new Node('one'))
    bst.insert(new Node('another'))
    
    expect(bst.getRoot()).to.be.an.instanceOf(Node)
    expect(bst.getRoot().data).to.equal('first node')
    expect(bst.getRoot().left).to.be.an.instanceOf(Node)
    expect(bst.getRoot().left.data).to.equal('another')
    expect(bst.getRoot().right).to.be.an.instanceOf(Node)
    expect(bst.getRoot().right.data).to.equal('one')    
  })
  
  it('traverseInOrder() - in-order traversal returns an array of ordered elements', () => {
    bst = new BinarySearchTree(new Node(10))
    bst.insert(new Node(11))
    bst.insert(new Node(9))
    bst.insert(new Node(8))
    bst.insert(new Node(12))
    bst.insert(new Node(13))
    
    const traverseInOrder = bst.traverseInOrder()

    expect(traverseInOrder).to.deep.equal([8, 9, 10, 11, 12, 13])    
  })
  
  it('find() - finds value in bst if it exists', () => {
    bst = new BinarySearchTree(new Node(10))
    bst.insert(new Node(11))
    bst.insert(new Node(9))
    bst.insert(new Node(8))
    bst.insert(new Node(12))
    bst.insert(new Node(13))
    bst.insert(new Node(7))
    bst.insert(new Node(5))
    
    const searchResult = bst.find(5)
    
    expect(searchResult).to.be.an.instanceOf(Node)
    expect(searchResult.data).to.equal(5)    
  })
  
  it('find() - returns null if value does not exist in tree', () => {
    bst = new BinarySearchTree(new Node(10))
    bst.insert(new Node(11))
    bst.insert(new Node(9))
    bst.insert(new Node(8))
    bst.insert(new Node(12))
    bst.insert(new Node(13))
    bst.insert(new Node(7))
    bst.insert(new Node(5))
    
    const searchResult = bst.find(6)
    
    expect(searchResult).to.be.null
  })
  
  it('delete() - deletes a leaf node if it exists in the tree', () => {
    bst = new BinarySearchTree(new Node(10))
    bst.insert(new Node(11))
    bst.insert(new Node(9))
    bst.insert(new Node(8))
    bst.insert(new Node(12))
    bst.insert(new Node(13))
    bst.insert(new Node(7))
    bst.insert(new Node(5))

    // before deletion
    expect(bst.traverseInOrder()).deep.equal([5, 7, 8, 9, 10, 11, 12, 13])
    // deletes min value - leaf node
    bst.delete(5)
    expect(bst.traverseInOrder()).deep.equal([7, 8, 9, 10, 11, 12, 13])
    // delete max value - leaf node
    bst.delete(13)
    expect(bst.traverseInOrder()).deep.equal([7, 8, 9, 10, 11, 12])    
  })
  
  it('delete() - deletes root node, the only one in the tree', () => {
    bst = new BinarySearchTree(new Node(10))

    // before deletion
    expect(bst.traverseInOrder()).deep.equal([10])
    // deletes only root node
    bst.delete(10)
    expect(bst.traverseInOrder()).deep.equal([])   
  })
  
  it('delete() - does nothing if value is not in the tree', () => {
    bst = new BinarySearchTree(new Node(10))

    // before deletion
    expect(bst.traverseInOrder()).deep.equal([10])
    // deletes only root node
    bst.delete(11)
    expect(bst.traverseInOrder()).deep.equal([10])   
  })
  
  it('delete() - deletes node in a tree (not leaf node)', () => {
    bst = new BinarySearchTree(new Node(5))
    bst.insert(new Node(4))
    bst.insert(new Node(3))
    bst.insert(new Node(2))
    bst.insert(new Node(1))

    // before deletion
    expect(bst.traverseInOrder()).deep.equal([1, 2, 3, 4, 5])
    bst.delete(3)
    expect(bst.traverseInOrder()).deep.equal([1, 2, 4, 5]);   
  })
  
  it('delete() - deletes node in a tree (not leaf node)', () => {
    bst = new BinarySearchTree(new Node(1))
    bst.insert(new Node(2))
    bst.insert(new Node(3))
    bst.insert(new Node(4))
    bst.insert(new Node(5))

    // before deletion
    expect(bst.traverseInOrder()).deep.equal([1, 2, 3, 4, 5])
    bst.delete(3)
    expect(bst.traverseInOrder()).deep.equal([1, 2, 4, 5]);   
  })
  
  it('delete() - deletes node that has two children', () => {
    bst = new BinarySearchTree(new Node(10))
    bst.insert(new Node(7))
    bst.insert(new Node(6))
    bst.insert(new Node(8))
    bst.insert(new Node(15))
    bst.insert(new Node(12))
    bst.insert(new Node(20))
    bst.insert(new Node(18))
    bst.insert(new Node(17))
    bst.insert(new Node(22))
    
    expect(bst.traverseInOrder()).to.deep.equal([6, 7, 8, 10, 12, 15, 17, 18, 20, 22])
    bst.delete(15)
    expect(bst.traverseInOrder()).to.deep.equal([6, 7, 8, 10, 12, 17, 18, 20, 22])
  })
  
  it('delete() - deletes nodes one by one', () => {
    const values = [6, 7, 8, 10, 12, 15, 17, 18, 20, 22].reverse()

    bst = new BinarySearchTree(new Node(10))
    bst.insert(new Node(7))
    bst.insert(new Node(6))
    bst.insert(new Node(8))
    bst.insert(new Node(15))
    bst.insert(new Node(12))
    bst.insert(new Node(20))
    bst.insert(new Node(18))
    bst.insert(new Node(17))
    bst.insert(new Node(22))
    
    expect(bst.traverseInOrder()).to.deep.equal([6, 7, 8, 10, 12, 15, 17, 18, 20, 22])
    values.map(value => bst.delete(value))
    expect(bst.traverseInOrder()).to.deep.equal([])
  })
  
  it('findMin() - finds node with minimum node and parentNode in the tree', () => {
    bst = new BinarySearchTree(new Node(10))
    bst.insert(new Node(7))
    bst.insert(new Node(6))
    bst.insert(new Node(8))
    bst.insert(new Node(15))
    bst.insert(new Node(12))
    bst.insert(new Node(20))
    bst.insert(new Node(18))
    bst.insert(new Node(17))
    bst.insert(new Node(22))

    expect(bst.findMin().node.data).to.equal(6)
    expect(bst.findMin().parentNode.data).to.equal(7)
  })
  
  it('findMax() - finds node with maximum node and parentNode in the tree', () => {
    bst = new BinarySearchTree(new Node(10))
    bst.insert(new Node(7))
    bst.insert(new Node(6))
    bst.insert(new Node(8))
    bst.insert(new Node(15))
    bst.insert(new Node(12))
    bst.insert(new Node(20))
    bst.insert(new Node(18))
    bst.insert(new Node(17))
    bst.insert(new Node(22))

    expect(bst.findMax().node.data).to.equal(22)
    expect(bst.findMax().parentNode.data).to.equal(20)
  })
})
