type Data = {
  value: string
}

class Node {
  public parent: Node | null = null
  public siblings = new Set<Node>()
  public children = new Set<Node>()
  public data: Data | null = null
  
  constructor(data: Data | null = null) {
    this.data = data
  }
  
  first(): Node {
    if (this.children.size === 0) {
      return new Node()
    }
    
    const values = this.children.values()

    return values.next().value
  }
}

export { Node, Data }
