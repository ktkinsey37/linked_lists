/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    };
    
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if (!this.tail){
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.head === this.tail){
      const returnVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return returnVal;
    }
    const returnVal =  this.tail.val;
    this.tail = this.get(this.length-2)
    this.tail.next = null;
    this.length -= 1;
    return returnVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.head === this.tail){
      const returnVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return returnVal;
    }
    const returnVal = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    return returnVal;
  }

  /** getAt(idx): get val at idx. */

  get(idx){
    if (idx > this.length){
      throw new Error
    }
    let returnVal = this.head;
    for (let i=0; i<idx;i++){
      returnVal = returnVal.next
    } return returnVal;
  }

  getAt(idx) {
    const returnVal = this.get(idx);
    return returnVal.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let nodeToChange = this.get(idx)
    nodeToChange.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx === 0){
      this.unshift(val)
      return
    }
    let precedingNode = this.get(idx-1)
    let newNode = new Node(val)
    let followingNode = this.get(idx)
    precedingNode.next = newNode
    newNode.next = followingNode
    if (idx === this.length){
      this.tail = newNode
    }
    this.length += 1
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let returnVal
    if (this.length === 1){
      returnVal = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return returnVal;
    }
    let precedingNode = this.get(idx-1)
    let deletedNode = this.get(idx)
    let followingNode = this.get(idx+1)
    precedingNode.next = followingNode
    return deletedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let total = 0;
    let curNode = this.head
    for (let i=0;i<this.length;i++){
      total += curNode.val;
      curNode = curNode.next;
    }
    return total/this.length;
  }
}

let lst = new LinkedList([5,10])


module.exports = LinkedList;