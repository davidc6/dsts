import { expect } from 'chai'
import { describe } from 'mocha'
import { QueueLinkedListBased } from './'

describe('QueueLinkedListBased', () => {
  let queue = null

  beforeEach(() => {
    queue = new QueueLinkedListBased()
  })
  
  it('enqueue() - returns true', () => {    
    expect(queue.enqueue('one')).to.be.true
  })
  
  it('dequeue() - first in last out - removes values as they were added to the queue', () => {
    queue.enqueue('one')
    queue.enqueue('two')

    expect(queue.dequeue()).to.equal('one') // got added first
    expect(queue.dequeue()).to.equal('two') // got added second
    expect(queue.dequeue()).to.be.null // no more values left
  })

  it('peek() returns but does not remove head of queue', () => {
    queue.enqueue('one') // #1
    queue.enqueue('two') // #2
    queue.enqueue('three')  // #3
    
    expect(queue.peek()).to.equal('one')
    expect(queue.dequeue()).to.equal('one') // value is there, let's remove it
  })
})
