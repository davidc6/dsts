import { v4 } from 'uuid'

type VertexValue = string | number | boolean | null
type VertexData = { value: VertexValue }

class Vertex {
  public id = ''
  public data: VertexData  = { value: null }

  constructor(data: VertexData) {
    this.id = v4()
    this.data = data
  }
}

export { Vertex }
