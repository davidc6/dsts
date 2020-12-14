import { ListNode } from '../list-node'

class DoublyLinkedList<T> {
  public head: ListNode<T> | null
  public tail: ListNode<T> | null
  public size: number

  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  append(node: ListNode<T>): void {
    if (this.head === null || this.tail === null) {
      this.size++
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
      this.size++
    }
  }

  /**
   * Capable of deleting first, last or any node in-between
   */
  delete(node: ListNode<T>): ListNode<T> | null {
    if (this.head === null || this.tail === null) {
      return this.head
    }

    let list = this.head

    while (list.next) {
      // what about non-primitive data comparison?
      if (list.value === node.value) {
        // head
        if (list.prev === null) {
          this.head = list.next
          this.head.prev = null
          this.size--
          return this.head
        }

        const prev = list.prev
        list.prev.next = list.next
        list.next.prev = prev
        this.size--

        return this.head
      }

      list = list.next
    }

    // tail
    if (list.value === node.value) {
      // more than one node in the list   
      if (list.next === null && list.prev !== null) {
        this.tail = list.prev
        this.tail.next = null
        this.size--

        return this.head
      }

      // the only node the list
      if (list.next === null && list.prev === null) {        
        this.head = null
        this.tail = null
        this.size = 0
      }
    }

    return this.head
  }

  get(index: number): ListNode<T> | null {
    if (index > this.size) {
      return null
    }
    
    if (Math.sign(index) === -1) {
      return null
    }
    
    let currentIndex = 1
    let node = this.head
    
    while(node) {
      if (currentIndex === index) {
        return node
      }

      currentIndex++
      node = node.next
    }
    
    return null
  }
  
  clear(): void {
    this.head = null
    this.tail = null
    this.size = 0
  }

  *values(): Generator {
    let node = this.head
    
    while (node) {
      yield node.value
      node = node.next
    }
  }
  
  // makes list iterable
  [Symbol.iterator](): Generator {
    return this.values()
  }
}

export { DoublyLinkedList }
