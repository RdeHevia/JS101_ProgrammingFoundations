/*
Imagine a sequence of consecutive even integers beginning with 2.
The integers are grouped in rows, with the first row containing one integer,
the second row two integers, the third row three integers and so on. Given an
integer representing the number of a particular row, return a integer
representing the sum of all the integers in that row.
/*

/*
INPUT: row number (integer)
OUTPUT: sum of all integers in that row (integer)
EXPLICIT RULES:
- sequence of CONSECUTIVE EVEN integers: 2, 4, 6, 8, 10...
- 1st integer: 2
- Integers grouped in to rows (row number = number of integers in that row)

  - 1) 2 -> 2
  - 2) 4, 6 -> 10
  - 3) 8, 10, 12 -> 30
  - 4) 14, 16, 18, 20 -> 68
  - n) 

  - How do we create the structure?
EXAMPLES:
  1 -> sum = 2
  2 ->
  4 -> 68
  */