import { DoublyLinkedList } from '../../linked-list/doubly'
import { ListNode } from '../../linked-list/list-node'

class StackLinkedListBased<T> {
  private doublyLinkedList: DoublyLinkedList<T> = new DoublyLinkedList()

  push(value: T): T | null {
    if (typeof value === 'undefined') {
      return null
    }

    const node = new ListNode(value)
    
    this.doublyLinkedList.append(node)
    
    return value
  }

  pop(): T | null {
    const listNode = this.doublyLinkedList.removeLast()

    return listNode.value
  }
  
  peek(): T | null {
    const node = this.doublyLinkedList.getLast()
    
    return node.value
  }
}

export { StackLinkedListBased }
