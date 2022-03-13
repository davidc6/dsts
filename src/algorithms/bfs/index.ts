const tree = {
  val: 'a',
  left: {
    val: 'b',
    left: {
      val: 'd',
      left: {
        val: 'h',
        left: null,
        right: null
      },
      right: {
        val: 'i',
        left: null,
        right: null
      }
    },
    right: {
      val: 'e',
      left: null,
      right: {
        val: 'j',
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 'c',
    left: {
      val: 'f',
      left: null,
      right: null
    },
    right: {
      val: 'g',
      left: {
        val: 'k',
        left: null,
        right: null
      },
      right: {
        val: 'l',
        left: null,
        right: null
      }
    }
  }
}

const bfs = (node: any) => {
  const q: any = []
  q.push(node)
  
  while (q.length > 0) {
    const currentNode = q[0]

    console.log(currentNode.val)
    
    if (currentNode.left) {
      q.push(currentNode.left)
    }
    
    if (currentNode.right) {
      q.push(currentNode.right)
    }
    q.shift()
  }
}

bfs(tree)
