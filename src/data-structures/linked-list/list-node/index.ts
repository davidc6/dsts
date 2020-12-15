export class ListNode<T> {
  public value: T | null
  public prev: ListNode<T> | null
  public next: ListNode<T> | null

  constructor(value: T | null = null) {
    this.value = value
    this.prev = null
    this.next = null
  }
}
