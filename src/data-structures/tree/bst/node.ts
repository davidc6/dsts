class Node {
  public data: any
  public left: Node | null = null
  public right: Node | null = null

  constructor(data: unknown = null) {
    this.data = data
  }
}

export { Node }
