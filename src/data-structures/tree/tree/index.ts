import { Node, Data } from "./node";
import { isDeepStrictEqual } from "util"

class Tree {
  private root: Node | null = null
  
  constructor(data: Data) {
    this.root = new Node(data)
  }

  attachChild(parentNode: Node, newNode: Node): boolean {
    parentNode.children.add(newNode)
    return true
  }
  
  private traverse(root: Node, data: Data): Node | null | void {
    const currentNode = root

    if (currentNode.children.size === 0) {      
      return null
    }
    
    if (isDeepStrictEqual(root.data, data)) {
      return root
    }

    for (const child of currentNode.children) {     
      if (isDeepStrictEqual(child.data, data)) {                      
        return child
      }

      return this.traverse(child, data)
    }
    
    return null
  }

  find(data: Data): Node | null | void {
    if (this.root === null) {
      return null
    }
    
    return this.traverse(this.root, data)
  }
  
  insert(data: Data): boolean {
    const newNode = new Node(data)

    if (this.root === null) {
      this.root = newNode
      return true
    }
    
    this.root.children.add(newNode)
    return true
  }
  
  getRoot(): Node | null {
    return this.root ? this.root : new Node()
  }
}

export { Tree, Node }
