import { expect } from 'chai'
import { ListNode } from '../list-node'
import { DoublyLinkedList } from '.'

describe('DoublyLinkedList', () => {
  it('gets populated with values', () => {
    const linkedList = new DoublyLinkedList()

    const n1 = new ListNode('one')
    const n2 = new ListNode('two')
    const n3 = new ListNode('three')
    
    linkedList.append(n1)
    linkedList.append(n2)
    linkedList.append(n3)

    expect(linkedList.head).to.deep.equal(n1)
    expect(linkedList.head.next).to.deep.equal(n2)
    expect(linkedList.head.next.prev).to.deep.equal(n1)
    expect(linkedList.head.next.next).to.deep.equal(n3)
    expect(linkedList.head.next.next.prev).to.deep.equal(n2)
    expect(linkedList.head.next.next.next).to.be.null
  })
})
