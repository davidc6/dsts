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

const dfs = (node: any) => {
  if (node === null) {
    return
  }
  
  console.log(node.val)

  if (node.left) {
    dfs(node.left)
  }

  if (node.right) {    
    dfs(node.right)
  }
}

dfs(tree)
