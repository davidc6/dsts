import { Node } from "./node";
import { isDeepStrictEqual } from "util"

class Tree {
  private root: Node | null = null
  
  constructor(node: Node) {
    this.root = node
  }
  
  private traverse(root: Node, nodeToFind: Node): Node | null {
    const currentNode = root

    if (currentNode.children.size === 0) {      
      return null
    }
    
    if (isDeepStrictEqual(root.data, nodeToFind.data)) {
      return root
    }

    for (const child of currentNode.children) {     
      if (isDeepStrictEqual(child.data, nodeToFind.data)) {            
        return child
      }

      return this.traverse(child, nodeToFind)
    }
    
    return null
  }

  find(node: Node): Node | null {
    if (this.root === null) {
      return null
    }
    
    return this.traverse(this.root, node)
  }
  
  remove(node: Node): Node | null {
    if (this.root === null) {
      return null
    }
    
    const foundNode = this.find(node)
        
    if (foundNode !== null && foundNode.parent) {
      if (foundNode.parent.removeChild(foundNode)) {
        return foundNode
      }
      return null
    }

    return null    
  }
  
  getRoot(): Node | null {
    return this.root ? this.root : new Node()
  }
}

export { Tree, Node }
