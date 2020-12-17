type Data = string | null

class Node {
  public parent: Node | null = null
  public siblings = new Set<Node>()
  public children = new Set<Node>()
  public data: { value: string | null }

  constructor(data: Data = null) {
    this.data = { value: data }
  }

  /**
   * Retrieves first child
   */
  first(): Node {
    if (this.children.size === 0) {
      return new Node()
    }
    
    const values = this.children.values()

    return values.next().value
  }
  
  /**
   * Attaches a child to the node
   * 
   * @param newNodeData
   */
  attachChild(node: Node): Node {
    node.parent = this
    this.children.add(node)
    return node
  }
  
  removeChild(node: Node): boolean {
    return this.children.delete(node)
  }
}

export { Node, Data }
