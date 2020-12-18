import { expect } from 'chai'
import { describe } from 'mocha'
import { Graph } from './'
import { Vertex } from './vertex'

describe('StackLinkedListBased', () => {
  let graph = null

  beforeEach(() => {
    graph = new Graph()
  })

  it('adds a vertex', () => {
    const vertex = new Vertex({ value: 'one' })
    expect(graph.addVertex(vertex)).to.be.true
  })
  
  it('removes a vertex', () => {
    const vertexA = new Vertex({ value: 'one' })
    const vertexB = new Vertex({ value: 'two' })

    graph.addVertex(vertexA)
    graph.addVertex(vertexB)
    
    // has both vertices
    expect(graph.adjacencyList.size).to.equal(2)
    expect(graph.adjacencyList.has(vertexA)).to.be.true
    expect(graph.adjacencyList.has(vertexB)).to.be.true   

    graph.removeVertex(vertexA)
  
    // has only one
    expect(graph.adjacencyList.size).to.equal(1)
    expect(graph.adjacencyList.has(vertexA)).to.be.false
    expect(graph.adjacencyList.has(vertexB)).to.be.true   
  })
  
  it('adds an edge', () => {
    const vertexA = new Vertex({ value: 'one' })
    const vertexB = new Vertex({ value: 'two' })
    
    graph.addVertex(vertexA)
    graph.addVertex(vertexB)
    
    graph.addEdge(vertexA, vertexB)
    
    expect(graph.adjacencyList.size).to.equal(2)
    expect(graph.adjacencyList.get(vertexA)).to.deep.equal([vertexB])
    expect(graph.adjacencyList.get(vertexB)).to.deep.equal([vertexA])    
  })

  it('removes an edge', () => {
    const vertexA = new Vertex({ value: 'one' })
    const vertexB = new Vertex({ value: 'two' })
    const vertexC = new Vertex({ value: 'three' })
    const vertexD = new Vertex({ value: 'four' })
    
    graph.addVertex(vertexA)
    graph.addVertex(vertexB)
    graph.addVertex(vertexC)
    graph.addVertex(vertexD)
    
    graph.addEdge(vertexA, vertexB)
    graph.addEdge(vertexC, vertexD)
    
    expect(graph.adjacencyList.size).to.equal(4)
    expect(graph.adjacencyList.get(vertexA)).to.deep.equal([vertexB])
    expect(graph.adjacencyList.get(vertexB)).to.deep.equal([vertexA])
    expect(graph.adjacencyList.get(vertexC)).to.deep.equal([vertexD])
    expect(graph.adjacencyList.get(vertexD)).to.deep.equal([vertexC])
    
    graph.removeEdge(vertexA, vertexB)
    
    expect(graph.adjacencyList.size).to.equal(4)
    expect(graph.adjacencyList.get(vertexA)).to.deep.equal([])
    expect(graph.adjacencyList.get(vertexB)).to.deep.equal([])
    expect(graph.adjacencyList.get(vertexC)).to.deep.equal([vertexD])
    expect(graph.adjacencyList.get(vertexD)).to.deep.equal([vertexC])
  })
})
