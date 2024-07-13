const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()
    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue()
    expect(queue.size()).toEqual(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue()
    queue.add(1)
    expect(queue.elements).toEqual([1])
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue()
    queue.add(1)
    queue.add(2)
    expect(queue.peek()).toEqual(1)
  })

  it('Deve remover o primeiro item da fila', () => {
    // Seu código aqui
    const queue = new Queue()
    queue.add(1)
    queue.add(2)
    //queue.dequeue()
    //expect(queue.elements)

    const removeditem = queue.dequeue()
    // Ver item removidos 
    expect(removeditem).toEqual(1)
    expect(queue.elements).toEqual([2])
  })
})