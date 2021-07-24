import { expect } from 'chai'
import { describe } from 'mocha'
import { Node } from './node'

describe('Node', () => {
  it('initialises with default values', () => {    
    const node = new Node()

    expect(node).to.be.an.instanceOf(Node)
    expect(node.data).to.be.null
    expect(node.left).to.be.null
    expect(node.right).to.be.null
  })

  it('initialises with a value, left and right nodes', () => {
    const node = new Node({ value: 'data' })
    node.left = new Node({ value: 'left' })
    node.right = new Node({ value: 'right' })
    
    expect(node.data).to.deep.equal({ value: 'data' })
    // left
    expect(node.left).to.be.an.instanceOf(Node)
    expect(node.left.data).to.deep.equal({ value: 'left' })
    // right
    expect(node.right).to.be.an.instanceOf(Node)
    expect(node.right.data).to.deep.equal({ value: 'right' })  
  })  
})
