import { expect } from 'chai'
import { describe } from 'mocha'
import { Tree, Node } from './'

describe('Tree', () => {
  let tree = null
  let rootNode = null

  beforeEach(() => {
    tree = new Tree(new Node('first node'))
    rootNode = tree.getRoot()
  })
  
  it('initialises', () => {    
    tree = new Tree()
    expect(tree).to.be.an.instanceOf(Tree)
  })
  
  it('initialises with a root node', () => {    
    expect(tree).to.be.an.instanceOf(Tree)
    expect(rootNode).to.be.an.instanceOf(Node)
    expect(rootNode.data).to.deep.equal({ value: 'first node' })
  })
  
  it('attaches child node to root node', () => {
    rootNode.attachChild(new Node('child node'))

    expect(rootNode).to.be.an.instanceOf(Node)
    expect(rootNode.children.size).to.equal(1)
    
    for (const child in rootNode.children) {
      expect(child.data).to.deep.equal({value: 'child node'})
    }
  })
  
  it('gets root node\'s first child node', () => {
    rootNode.attachChild(new Node('child node one'))
    rootNode.attachChild(new Node('child node two'))
    
    const firstNode = rootNode.first()
    
    expect(firstNode).to.be.an.instanceOf(Node)
    expect(firstNode.data).to.deep.equal({value: 'child node one'})
  })
  
  it('attaches a child node to root\' child node', () => {
    const firstChild = rootNode.attachChild(new Node('child node one'))
    firstChild.attachChild(new Node('child node two'))
    
    const secondNode = rootNode.first().first()
    
    expect(secondNode).to.be.an.instanceOf(Node)
    expect(secondNode.data).to.deep.equal({value: 'child node two'})
  })
  
  it('finds the right node in the tree', () => {
    const firstChild = rootNode.attachChild(new Node('child node one'))
    const secondChild = firstChild.attachChild(new Node('child node two'))
    secondChild.attachChild(new Node('child node three'))
        
    const foundNode = tree.find(new Node('child node three'))
    
    expect(foundNode).to.be.an.instanceOf(Node)
    expect(foundNode.data).to.deep.equal({ value: 'child node three' })
  })
})
