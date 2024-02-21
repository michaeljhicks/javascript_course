// Execution Context 
/*
When you run any JS, a special environment is created to handle the transformation
& execution of code. This is called the EXECUTION CONTEXT. 
It contains the currently running code and everything that aids in its execution

There is a GLOBAL EXECUTION CONTEXT as well as FUNCTION EXECUTION CONTEXT for every
function invoked

The BOX EXAMPLE:
on the left side - MEMORY
- This is the VARIABLE ENVIRONMENT that stores all of your variables and functions as key:value pairs
- in memory 

on the right side - EXECUTION(CODE)
- This is the THREAD OF EXECUTION.
- Each line of code is executed line by line


JavaScript is a SINGLE THREADED LANGUAGE
- think of a thread as a process, and your code is executed line by line

JavaScript is SYNCHRONOUS
- This means JS is executed line by line
- There are asynchronous capabilities like web APIs
*/


/* EXECUTION CONTEXT PHASES
1. MEMORY CREATION PHASE 
   - think of one swoop through before your code is run. No code execution here
   a. Create the global object (browser = window, Node.js = global)
   b. Create the 'this' object and bind it to the global object
   c. Setup memory heap for storing variables and function references
   d. Store functions and variables in global execution context and set to "undefined"

2. EXECUTION PHASE
   a. Execute code line by line
   b. Create a new execution context for each function call
*/



/* 
1. Global Execution Context
   1a. Memory Creation Phase goes through each line
      - goes through variables, stores them in memory but they remain undefined
      - stores function into memory
   2a. Execution
2. Function Execution Context 

*/