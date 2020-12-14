import { ListNode } from '../list-node'

class DoublyLinkedList<T> {
  public head: ListNode<T> | null
  public tail: ListNode<T> | null

  constructor() {
    this.head = null
    this.tail = null
  }

  append(node: ListNode<T>): void {
    if (this.head === null || this.tail === null) {
      this.head = node
      this.tail = node
      return
    }

    this.tail.next = node
    node.prev = this.tail
    this.tail = node
  }
}

export { DoublyLinkedList }
