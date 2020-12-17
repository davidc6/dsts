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
  attachChild(newNodeData: Data): Node {
    const newNode = new Node(newNodeData)
    newNode.parent = this
    this.children.add(newNode)
    return newNode
  }
}

export { Node, Data }
