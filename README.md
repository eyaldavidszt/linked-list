Quick implementation of a linked list in JS🥳
Been reading about it a lot the past few days and didn't realize until I started writing it I would do it with recursion...

The initializer doesn't just create a linked list but also takes in an array and converts it into one. The list comes with a few methods:

prepend(value) - prepends a node with value
append(value) - appends a node with value
size - returns size of the list in nodes
head - returns head node of list
tail - returns tail node of list
pop - removes tail node of list
indexAt(index) - shows value of node at index location
contains(value) - returns true if value exists in list, false otherwise
find(value) - returns index of value if it exists in list
toString - prints the list as a string
insertAt(index, value) - insert at index a node with value
removeAt(index) - remove node at index
