export class ListNode<T> {
  public value: T
  public prev: ListNode<T> | null
  public next: ListNode<T> | null

  constructor(value: T) {
    this.value = value
    this.prev = null
    this.next = null
  }
}
