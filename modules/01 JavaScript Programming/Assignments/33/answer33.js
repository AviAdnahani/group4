function Node(data, next) {
    this.data = data;
    this.next = next
}

function LinkedList(){
    this.head = null;

    this.getFirst = function(){
        return this.head;
    }

    this.getLast =function(){
        var node;
        if (!this.head) {
            return null;
        }
        node = this.head;
        while (node.next){
            node = node.next;
        }
        return node;
    }

    this.insertFirst = function(data) {
        this.head = new Node(data, this.head);
    }

    this.insertLast = function(data){
        var last = this.getLast();
        if (last) {
            last.next = new Node(data, null);
        }
        else {
            this.head = new Node(data, null);
        }
    }

    this.printAll = function() {
        var head = this.head;
        if (!head) {
            return null;
        }
        while (head) {
            console.log(head.data);
            head = head.next;
        }
    }
}

const l = new LinkedList();
const a = new Node('red');
const b = new Node('yellow');
const c = new Node('green');

// l.head = a;
// a.next = b;
// b.next = c;
// c.next = b;
l.insertLast(a);
l.insertLast(b);
l.insertLast(c);
l.insertLast(b);
function circular(list) {
    var t = list.head;
    if (t) {
        while(t !== t.next) {
            t = t.next;
        }
        if (t === t.next) {
            return true;
        }
    }
    else {
        return false;
    }

}
console.log(circular(l));