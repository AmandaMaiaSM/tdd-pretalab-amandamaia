class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  // Implementar metodos 
  size() {
    return this.elements.length
  }
  
  add(element) {
    this.elements.push(element)
  }
  
  peek() {
    return this.elements[0]
  }
  
  dequeue() {
    return this.elements.shift()
  }
  
}

module.exports = Queue