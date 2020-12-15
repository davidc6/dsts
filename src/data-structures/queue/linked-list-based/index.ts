import { DoublyLinkedList } from '../../linked-list/doubly'
import { ListNode } from '../../linked-list/list-node'

class QueueLinkedListBased<T> {
  private doublyLinkedList: DoublyLinkedList<T> = new DoublyLinkedList()

  enqueue(value: T): boolean {
    const node = new ListNode<T>(value)
    
    this.doublyLinkedList.append(node)
    
    return true
  }
  
  dequeue(): T | null {
    const node = this.doublyLinkedList.removeFirst()
    
    return node.value
  }
  
  peek(): T | null {
    const node = this.doublyLinkedList.getFirst()

    return node.value
  }
}

export { QueueLinkedListBased }
