import { expect } from 'chai'
import { ListNode } from '../list-node'
import { DoublyLinkedList } from '.'

describe('DoublyLinkedList', () => {
  describe('delete()', () => {    
    it('deletes middle node', () => {
      const linkedList = new DoublyLinkedList()
  
      const values = [1, 2, 3]
  
      for (const value of values) {
        const node = new ListNode(value)
        linkedList.append(node)
      }
  
      linkedList.delete(new ListNode(2))
      
      // head
      expect(linkedList.head.value).to.equal(1)
      expect(linkedList.head.prev).to.equal(null)
      expect(linkedList.head.next instanceof ListNode).to.be.true
      expect(linkedList.head.next.value).to.equal(3)
      // tail
      expect(linkedList.tail.value).to.equal(3)
      expect(linkedList.tail.next).to.equal(null)
      expect(linkedList.tail.prev instanceof ListNode).to.be.true
      expect(linkedList.tail.prev.value).to.equal(1)
    })
    
    it('deletes first node', () => {
      const linkedList = new DoublyLinkedList()
  
      const values = [1, 2, 3]
  
      for (const value of values) {
        const node = new ListNode(value)
        linkedList.append(node)
      }
  
      linkedList.delete(new ListNode(1))
  
      // head
      expect(linkedList.head.value).to.equal(2)
      expect(linkedList.head.prev).to.equal(null)
      expect(linkedList.head.next instanceof ListNode).to.be.true
      expect(linkedList.head.next.value).to.equal(3)
      // tail
      expect(linkedList.tail.value).to.equal(3)
      expect(linkedList.tail.next).to.equal(null)
      expect(linkedList.tail.prev instanceof ListNode).to.be.true
      expect(linkedList.tail.prev.value).to.equal(2)
    })
    
    it('deletes single node', () => {
      const linkedList = new DoublyLinkedList()
  
      const values = [1]
  
      for (const value of values) {
        const node = new ListNode(value)
        linkedList.append(node)
      }
  
      linkedList.delete(new ListNode(1))
      
      // head
      expect(linkedList.head).to.be.null
      // tail
      expect(linkedList.tail).to.be.null
    })
  })
  
  describe('get()', () => {
    it('returns node at specified index', () => {
      const linkedList = new DoublyLinkedList()
      
      const values = [1, 2, 3, 4]
      
      for (const value of values) {
        const node = new ListNode(value)
        linkedList.append(node)
      }
  
      const node = linkedList.get(3)
  
      expect(node instanceof ListNode).to.be.true
      expect(node.value).to.equal(3)
      expect(node.prev.value).to.equal(2)
      expect(node.next.value).to.equal(4)
    })
    
    it('does not return node if index is more than the size of list', () => {
      const linkedList = new DoublyLinkedList()
      
      const values = [1, 2, 3, 4]
      
      for (const value of values) {
        const node = new ListNode(value)
        linkedList.append(node)
      }
  
      const node = linkedList.get(5)
  
      expect(node).to.be.null
    })
    
    it('does not return node if index is negative', () => {
      const linkedList = new DoublyLinkedList()
      
      const values = [1, 2, 3, 4]
      
      for (const value of values) {
        const node = new ListNode(value)
        linkedList.append(node)
      }
  
      const node = linkedList.get(-1)
  
      expect(node).to.be.null
    })
  })
  
  it('append() - appends values', () => {
    const linkedList = new DoublyLinkedList()
    
    const values = [1, 2, 3, 4]
    
    for (const value of values) {
      const node = new ListNode(value)
      linkedList.append(node)
    }

    // head
    expect(linkedList.head.value).to.deep.equal(1)
    expect(linkedList.head.next.value).to.deep.equal(2)
    expect(linkedList.head.next.next.value).to.deep.equal(3)
    expect(linkedList.head.next.next.next.value).to.deep.equal(4) // tail
    expect(linkedList.head.next.next.next.next).to.be.null
    // tail
    expect(linkedList.tail.value).to.deep.equal(4)
    expect(linkedList.tail.prev.value).to.deep.equal(3)
    expect(linkedList.tail.prev.prev.value).to.deep.equal(2)
    expect(linkedList.tail.prev.prev.prev.value).to.deep.equal(1) // head
    expect(linkedList.tail.prev.prev.prev.prev).to.be.null
  })

  it('size - returns valid list size', () => {
    const linkedList = new DoublyLinkedList()
    
    const values = [1, 2, 3, 4]
    
    for (const value of values) {
      const node = new ListNode(value)
      linkedList.append(node)
    }

    expect(linkedList.size).to.equal(4)
    linkedList.delete(new ListNode(1))
    expect(linkedList.size).to.equal(3)
    linkedList.delete(new ListNode(2))
    expect(linkedList.size).to.equal(2)
    linkedList.delete(new ListNode(3))
    expect(linkedList.size).to.equal(1)
    linkedList.delete(new ListNode(4))
    expect(linkedList.size).to.equal(0)
  })
  
  it('clear() - clears the list', () => {
    const linkedList = new DoublyLinkedList()
    
    const values = [1, 2, 3, 4]
    
    for (const value of values) {
      const node = new ListNode(value)
      linkedList.append(node)
    }

    linkedList.clear()

    expect(linkedList.head).to.be.null
    expect(linkedList.tail).to.be.null
    expect(linkedList.size).to.equal(0)
  })

  it('iterates over the list', () => {
    const linkedList = new DoublyLinkedList()
    
    const values = [1, 2, 3, 4]
    
    for (const value of values) {
      const node = new ListNode(value)
      linkedList.append(node)
    }

    let i = 0
    for (const val of linkedList) {
      expect(val).to.equal(values[i])
      i++
    }    
  })
})
