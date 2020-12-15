import { expect } from 'chai'
import { describe } from 'mocha'
import { StackLinkedListBased } from './'

describe('StackLinkedListBased', () => {
  let stack = null

  beforeEach(() => {
    stack = new StackLinkedListBased()
  })
  
  it('pushes values onto the stack and removes them in the reverse order', () => {    
    stack.push('one')
    stack.push('two')
    expect(stack.pop()).to.equal('two')
    expect(stack.pop()).to.equal('one')
    expect(stack.pop()).to.be.null
  })
  
  it('peek() returns top value but does not remove it from the stack', () => {
    stack.push('one')
    stack.push('two')
    expect(stack.peek()).to.equal('two')
    expect(stack.pop()).to.equal('two') // value still there, let's pop it
  })

  describe('push()', () => {    
    it('pushes the value on to the stack and returns the value', () => {
      expect(stack.push(1)).to.equal(1)
    })
    
    it('returns null if no value gets passed in', () => {
      expect(stack.push()).to.equal(null)
    })
  })
  
  describe('pop()', () => {    
    it('pop() returns null if there isn\'t anything in the stack', () => {
      expect(stack.pop()).to.equal(null)
    })
    
    it('pop() returns top element in the stack', () => {
      stack.push('top')
      expect(stack.pop()).to.equal('top')
    })
  })
})
