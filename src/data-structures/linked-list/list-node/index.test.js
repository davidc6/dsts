import { expect } from 'chai'
import { ListNode } from './'

describe('ListNode', () => {
  it('get populated with a value', () => {
    const node = new ListNode('one')
    expect(node.value).to.equal('one')
  })
  
  it('gets pointer to prev node', () => {
    const node = new ListNode('one')
    node.prev = new ListNode('two')
    
    expect(node.value).to.equal('one')
    expect(node.prev.value).to.equal('two')
  })
  
  it('gets pointer to next node', () => {
    const node = new ListNode('one')
    node.next = new ListNode('two')

    expect(node.value).to.equal('one')
    expect(node.next.value).to.equal('two')
  })
})
