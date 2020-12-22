import { Node } from './node'

class BinarySearchTree {
  private root: Node | null = null
  
  constructor(node: Node) {
    this.root = node
  }

  private traverseInsert(currentNode: Node | null, newNode: Node): void {
    if (currentNode) {      
      if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          return
        }

        this.traverseInsert(currentNode.left, newNode)
      }
  
      if (newNode.data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode
          return
        }
  
        this.traverseInsert(currentNode.right, newNode)
      }
    }
  }

  insert(node: Node): Node {
    if (this.root) {
      this.traverseInsert(this.root, node)
      return node
    }

    this.root = node
    return node
  }
  
  private traverseFind(
    searchValue: number | string | boolean,
    node: Node | null,
    parentNode: Node | null = null,
    property: string | null = null
  ): { parentNode: Node | null, node: Node } | null {
    if (!node) return null
    
    const nodeValue = property ? node.data[property] : node.data

    if (searchValue > nodeValue) {
      return this.traverseFind(searchValue, node.right, node, property)
    } else if (searchValue < nodeValue) {
      return this.traverseFind(searchValue, node.left, node, property)
    } else {
      return { parentNode, node }
    }
  }
  
  find(searchValue: number | string | boolean): Node | null {
    if (!this.root) return null

    const res = this.traverseFind(searchValue, this.root)
    
    return res?.node ? res.node : null    
  }
  
  delete(searchValue: number | string | boolean): void {
    const result = this.traverseFind(searchValue, this.root)

    // found?
    if (result?.node) {
      // root node? ------------------------------------------------------------
      if (result.parentNode === null) {
        this.root = null 
        return
      }

      // leaf node? ------------------------------------------------------------
      if (result.node.left === null && result.node.right === null) {
        // cut left link
        // primitive data type comparison only
        if (result.parentNode?.left?.data === result.node.data) {
          result.parentNode.left = null
          return
        }

        // cut right link
        // primitive data type comparison only
        if (result.parentNode?.right?.data === result.node.data) {
          result.parentNode.right = null
          return
        }
      }

      // only left child? ------------------------------------------------------
      if (result.node.left !== null && result.node.right === null) {        
        // cut left link
        // primitive data type comparison only
        if (result.parentNode?.left?.data === result.node.data) {
          result.parentNode.left = result.node.left
          return
        }

        // cut right link
        // primitive data type comparison only
        if (result.parentNode?.right?.data === result.node.data) {
          result.parentNode.right = result.node.right
          return
        }
      }
      
      // only right child? -----------------------------------------------------
      if (result.node.left === null && result.node.right !== null) {
        // cut left link
        // primitive data type comparison only
        if (result.parentNode?.left?.data === result.node.data) {
          result.parentNode.left = result.node.left
          return
        }

        // cut right link
        // primitive data type comparison only
        if (result.parentNode?.right?.data === result.node.data) {
          result.parentNode.right = result.node.right
          return
        }
      }

      // two children
      const min = this.findMin(result.node.right)
      
      if (min && min.parentNode) {        
        result.node.data = min.node.data

        // cut left link
        // primitive data type comparison only
        if (result && result.parentNode && result.parentNode.left && result.parentNode.left.data === min.node.data) {
          result.parentNode.left.data = min.node.data
          min.parentNode.left = null
          return
        }

        // cut right link
        // primitive data type comparison only
        if (result && result.parentNode && result.parentNode.right && result.parentNode.right.data === min.node.data) {          
          result.parentNode.right.data = min.node.data
          min.parentNode.left = null
          return
        }
      }
    }
  }

  traverseInOrder(node = this.root, arr: Node[] = []): unknown[] {    
    if (node) {
      this.traverseInOrder(node.left, arr)
      arr.push(node)
      this.traverseInOrder(node.right, arr)    
    }

    return arr.map(val => val.data)
  }
  
  getRoot(): Node | null {
    return this.root
  }
  
  findMin(
    node: Node | null = this.root,
    parentNode: Node | null = null
  ): { parentNode: Node | null, node: Node } | null  {
    if (!node) return node
    
    while (node.left) {
      parentNode = node
      return this.findMin(node.left, parentNode)
    }

    return { node, parentNode }
  }
  
  findMax(
    node: Node | null = this.root,
    parentNode: Node | null = null
  ): { parentNode: Node | null, node: Node } | Node | null  {
    if (!node) return node

    while (node.right) {
      parentNode = node
      return this.findMax(node.right, parentNode)
    }

    return { node, parentNode }
  }
}

export { BinarySearchTree }
