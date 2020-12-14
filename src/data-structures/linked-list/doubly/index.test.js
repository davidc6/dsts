import { expect } from 'chai'
import { ListNode } from '../list-node'
import { DoublyLinkedList } from '.'

describe('DoublyLinkedList', () => {
  it('enables to append and get values of next nodes', () => {
    const linkedList = new DoublyLinkedList()
    
    const values = [1, 2, 3, 4]
    
    for (const value of values) {
      const node = new ListNode(value)
      linkedList.append(node)
    }

    expect(linkedList.head.value).to.deep.equal(1)
    expect(linkedList.head.next.value).to.deep.equal(2)
    expect(linkedList.head.next.next.value).to.deep.equal(3)
    expect(linkedList.head.next.next.next.value).to.deep.equal(4) // tail
    expect(linkedList.head.next.next.next.next).to.be.null
  })
  
  it('enables to append get values of previous nodes', () => {
    const linkedList = new DoublyLinkedList()

    const values = [1, 2, 3, 4]
    
    for (const value of values) {
      const node = new ListNode(value)
      linkedList.append(node)
    }
    
    expect(linkedList.tail.value).to.deep.equal(4)
    expect(linkedList.tail.prev.value).to.deep.equal(3)
    expect(linkedList.tail.prev.prev.value).to.deep.equal(2)
    expect(linkedList.tail.prev.prev.prev.value).to.deep.equal(1) // head
    expect(linkedList.tail.prev.prev.prev.prev).to.be.null
  })
})
