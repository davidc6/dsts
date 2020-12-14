import { expect } from 'chai'
import { ListNode } from './'

describe('ListNode', () => {
  it('enables access to its\' value', () => {
    const node = new ListNode('one')
    expect(node.value).to.equal('one')
  })
  
  it('enables access to the value of previous node', () => {
    const node = new ListNode('one')
    node.prev = new ListNode('two')
    
    expect(node.value).to.equal('one')
    expect(node.prev.value).to.equal('two')
  })
  
  it('enables access to the value of next node', () => {
    const node = new ListNode('one')
    node.next = new ListNode('two')

    expect(node.value).to.equal('one')
    expect(node.next.value).to.equal('two')
  })
})
