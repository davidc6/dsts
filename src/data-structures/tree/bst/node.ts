type Data = {
  [key: string]: [value: string]
}

class Node {
  public data: Data
  public left: Node | null = null
  public right: Node | null = null

  constructor(data: Data) {
    this.data = data
  }
}

export { Node }
