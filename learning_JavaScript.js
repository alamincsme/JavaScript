
//number
let x = 5 
let y = 5.5 
console.log(x + " " + y)

//String 
let color = "green";
let lastName = 'amin';
console.log(typeof(color))
console.log(typeof(lastName))

//Object 
const person = {name : 'Mohammad Alamin', age:24}
console.log(person)
console.log(person.name)

//array 
const cars = ["Volvo", "Toyoto"]
console.log(typeof(person))
console.log(typeof(cars))


const date = new Date() ;
console.log(date)


console.log("........................")


let ans = add(2,3);
console.log(ans)

function add(a , b) {
    return a + b ;
}

//
console.log("anthoer part ....")

let s = "mam";
let len = s.length ;
let isPalindrome = true ;
for (let i = 0 ; i < len ; i++) {
    if (s.charAt(i) != s.charAt(len - 1 - i)) {
       isPalindrome = false ;
       break ;
        
    }
}

if (isPalindrome) console.log("is palindrome.") 
else console.log("not a palindrome.")



let t = BigInt(999999999999999);
console.log(typeof(t))

//console loag to string .
console.log(typeof((4 + 5).toString))



//create a array 
let n = [1,2,3,4,5,6]
// for (let i = 0 ; i < n.length ; i++) {
//     console.log( n[i])
// }


// console.log(n.reverse)

for (let x in n ) console.log(x)

console.log("using while loop")
let i = 0 ; 
while( i < n.length) {
    console.log("line : "+ i + " " + n[i])
    i ++ ;
}


let arr = [1,1,1, 2, 3, 4]
let map = new Map() 

for (let x of arr) {
    if (! map.has(x)) {
        map.set(x, 1);
    } else {
        let count = map.get(x);
        map.set(x , count + 1)
    }
}

console.log(map)




console.log(".............finally we finished................")

// class Person {
//     constructor(name , description , price) {
//         this.name = name;
//         this.description = description;
//         this.price = price;
//     }

//     toString() {
//         console.log("product name : " +this.name + " description :" + this.description + " price : "+this.price);

//     }
// }

// // const personInfo = new Person("laptop", "Hp corei 3", 64000);
// let personInfo;
// if (personInfo != null) {
//     console.log("use this class.")
// } else {
//    console.log("not used this class.")
// }

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LL {
    constructor() {
        this.head = null;
    }

    prepend(val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    append(val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = node;
        } else {
            let curr_node = this.head;
            while (curr_node.next !== null) {
                curr_node = curr_node.next;
            }
            curr_node.next = node;
        }
    }

    printLL() {
        if (this.head === null) {
            console.log("List is empty.");
        } else {
            let curr_node = this.head;
            while (curr_node !== null) {
                console.log(curr_node.val + " ");
                curr_node = curr_node.next;
            }
        }
    }
}

let ll = new LL();
ll.prepend(10);
ll.prepend(20);
ll.prepend(30);
ll.printLL();





