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
    if (!node) return
    
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

  removeFirst(): ListNode<T> {
    if (this.head) {
      // more than one item in the list
      if (this.head.next) {
        const firstNode = this.head
      
        this.head = this.head.next
        this.size--
        
        return firstNode
      }
      
      // one item in the list
      const firstNode = this.head
      
      this.head = null
      this.tail = null
      this.size = 0

      return firstNode
    }

    // empty list
    return new ListNode()
  }
  
  removeLast(): ListNode<T> {
    // more than one node in the list
    if (this.tail && this.tail.prev !== null) {
      const removedNode = this.tail

      this.tail = this.tail.prev
      this.tail.next = null
      this.size--

      return removedNode
    }

    // the only node the list
    if (this.tail && this.tail.prev === null) {
      const lastNode = this.tail

      this.head = null
      this.tail = null
      this.size = 0

      return lastNode
    }

    // empty list node
    return new ListNode()
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
  
  getFirst(): ListNode<T> {
    return this.head ? this.head : new ListNode()
  }
  
  getLast(): ListNode<T> {
    return this.tail ? this.tail : new ListNode()
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
