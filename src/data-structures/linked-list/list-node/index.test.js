import { expect } from 'chai'
import { ListNode } from './'

describe('ListNode', () => {
  it('sets value', () => {
    const node = new ListNode('one')
    expect(node.value).to.equal('one')
  })
  
  it('sets previous node', () => {
    const node = new ListNode('one')
    node.prev = new ListNode('two')
    
    expect(node.value).to.equal('one')
    expect(node.prev.value).to.equal('two')
  })
  
  it('sets next node', () => {
    const node = new ListNode('one')
    node.next = new ListNode('two')

    expect(node.value).to.equal('one')
    expect(node.next.value).to.equal('two')
  })
})
