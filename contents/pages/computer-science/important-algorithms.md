---
title: Important algorithms
link: important-algorithms
---

# Searching


## Sequential search


```
LIST = [2, 3, 5, 1, 5, 10, 13, 8]
SEARCH = 2
FOUND = false

loop I from 0 to LIST.length()
	if LIST[I] == SEARCH then
		FOUND = true
		output SEARCH, "found at position", I
	end if
end loop

if FOUND == false then
	output "not found"
```



## Binary search

```
LIST = [1, 2, 4, 7, 10, 54, 55, 64, 345, 777, 787]
SEARCH = 2
START = 0
END = LIST.length()

while START <= END
//this is the recursive function
	MID = (START + END) div 2
	if LIST[MID] == SEARCH
		output SEARCH, "found at position", MID
	else
		if SEARCH < LIST[MID]
			END = MID - 1 //discarding middle element and everything after
		else
			START = MID + 1 //discarding middle element and everything before
```



<div class="responsive-table">
<table>
  <tr>
   <td>Binary search
   </td>
   <td>Sequential search
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>Requires a sorted algorithm

<li>More efficient for larger arrays

<li>Time complexity = O(log n)
</li>
</ul>
   </td>
   <td>
<ul>

<li>Simplest search strategy; does not require array to be sorted

<li>Relies on brute force strategy

<li>Time complexity = O(n)
</li>
</ul>
   </td>
  </tr>
</table>
</div>


# Sorting


## Bubble sort

```
LIST = [2, 3, 5, 1, 5, 10, 13, 8]

loop K from 0 to LIST.length() - 1
	loop I from 0 to LIST.length() - 2
	//-2 because the last element has no value after
		if LIST[I] > LIST[I+1] then		
			swap(LIST[I], LIST[I+1])
```



## Selection sort

```
LIST = [2, 3, 5, 1, 5, 10, 13, 8]

loop I from 0 to LIST.length()-2  //once done till n-2, n-1 will be sorted already
	MIN = I
	
	loop J from I+1 to LIST.length()-1
	     if LIST[I] < LIST[MIN]
			MIN = J

	swap(LIST[I], LIST[MIN])
```





<div class="responsive-table">
<table>
  <tr>
   <td>Bubble sort
   </td>
   <td>Selection sort
   </td>
  </tr>
  <tr>
   <td>
<ul>

<li>Repeatedly steps through an array then compared and swaps adjacent elements if they are not in correct order

<li>At the end of each pass, the highest number is bubbled up (end of array)

<li>Takes multiple passes until no swaps are necessary

<li>Slow and impractical

<li>Time complexity = O(n<sup>2</sup>)
</li>
</ul>
   </td>
   <td>
<ul>

<li>Runs through the array and swaps the minimum value with the first value of the array

<li>Time complexity = O(n<sup>2</sup>)
</li>
</ul>
   </td>
  </tr>
</table>


   </td>
  </tr>
  <tr>
   <td>
   </td>
  </tr>
</table>
</div>




# Stacks



*   LIFO: last in, first out
*   Top pointer points to first element: `PEEK() => STACK[TOP]`
*   Two methods:
    *   `PUSH()`
    *   `POP()`


## Applications



*   Reversing a string
*   Convert an infix expression to postfix


## Methods


### Push


```
TOP = -1  // stack is empty
input item

if (TOP == N-1) then
  print "OVERFLOW"
else
  top = TOP + 1
  STACK[TOP] = item
end if
```


**Overflow** is when the stack is full and an element is being pushed.


### Pop


```
TOP = 0  // no value for top as stack is empty
if (TOP < 1) then
  print "UNDERFLOW"
else
  print STACK[TOP]
  TOP = TOP -1
  // return value and remove index
end if
```


**Underflow** is when the stack is empty but an element is being popped.


### Peek


```
begin procedure PEEK
  return stack[TOP]
end procedure
```



# Queue



*   FIFO: first in, first out
    *   All **insertions** take place at the **rear**, and all **deletions** take place at the **front**
*   Two pointers:
    *   `FRONT` returns the first value
    *   `REAR` returns the last value
*   Top pointer points to first element: `PEEK() => QUEUE[FRONT]`
*   Two methods:
    *   `ENQUEUE()`
    *   `DEQUE()`
*   When a value is dequeued, the value of `FRONT()` changes, and there is a _vacant_ space left (and the value is returned)


## Methods


### Enqueue


```
begin procedure ENQUEUE(DATA)
  if QUEUE.isFull() then
    return "OVERFLOW"
    exit
  end if
  REAR = REAR + 1
  QUEUE[REAR] = DATA
end procedure
```



### Dequeue


```
begin procedure DEQUEUE
  if QUEUE.isEmpty() then
    return "UNDERFLOW"
    exit
  end if
  DATA = QUEUE[FRONT]
  FRONT = FRONT + 1  
  // the front value is changed
  // although the data still exists in the memory, it is not in the queue
  return DATA
end procedure
```



### isFull


```
begin procedure isFull
  if (REAR == MAXSIZE) then  // max size is N - 1
    return true
  else
    return false
  end if
end procedure
```



### isEmpty


```
begin procedure isEmpty
  if (FONT < MINSIZE) OR (FRONT > REAR) then
    return true
  else
    return false
  end if
end procedure
```



### Peek


```
begin procedure PEEK
  return QUEUE[FRONT]
end procedure
```