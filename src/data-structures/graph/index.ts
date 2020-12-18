import { isDeepStrictEqual } from 'util'
import { Vertex } from './vertex'

class Graph {
  public adjacencyList = new Map<Vertex, Vertex[]>()
  
  addVertex(vertex: Vertex): boolean {
    const vert = this.adjacencyList.get(vertex)

    if (vert) {
      return true
    }
  
    this.adjacencyList.set(vertex, [])
    
    return true
  }
  
  addEdge(vertexA: Vertex, vertexB: Vertex): void {    
    if (vertexA && vertexB) {
      const vertA = this.adjacencyList.get(vertexA)
      const vertB = this.adjacencyList.get(vertexB)

      if (vertA !== undefined) {
        vertA.push(vertexB)
      } else {
        if (this.addVertex(vertexA)) {
          this.adjacencyList.get(vertexA)!.push(vertexB)
        }        
      }
      
      if (vertB !== undefined) {
        vertB.push(vertexA)
      } else {
        if (this.addVertex(vertexB)) {
          this.adjacencyList.get(vertexB)!.push(vertexA)
        } 
      }
    }
  }

  removeVertex(vertexToDelete: Vertex): void {
    const vertexEdges = this.adjacencyList.get(vertexToDelete)

    if (vertexEdges) {
      for (const edge of vertexEdges) {        
        const vertexEdge = this.adjacencyList.get(edge)        
        
        if (vertexEdge) {          
          const filtered = vertexEdge.filter(vertex =>
            !isDeepStrictEqual(vertex, vertexToDelete))

          this.adjacencyList.set(edge, filtered)
        }
      }
  
      this.adjacencyList.delete(vertexToDelete)    
    }
    
  }

  removeEdge(vertexA: Vertex, vertexB: Vertex): void {
    // Vertex A
    const vertexAEdges = this.adjacencyList.get(vertexA)
    if (vertexAEdges !== undefined) {
      const filteredA = vertexAEdges.filter(val => !isDeepStrictEqual(val, vertexB))      
      this.adjacencyList.set(vertexA, filteredA)
    }

    // Vertex B
    const vertexBEdges = this.adjacencyList.get(vertexB)
    if (vertexBEdges !== undefined) {            
      const filteredB = vertexBEdges.filter(val => !isDeepStrictEqual(val, vertexA))
      this.adjacencyList.set(vertexB, filteredB)
    }    
  }
}

export { Graph }
