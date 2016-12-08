# pricing-problem

JavaScript version: 1.7.

Node.js is required for running the tests. Here are steps on installing Node.js:

1) Head to https://nodejs.org/en/download/ <br>
2) The Node.js version I'm currently using is 7.2.0, which is the latest version; therefore, please click on "Current" to install this latest version. <br>
3) Select the installer that corresponds with your operating system. <br>
4) Follow the installation instructions.

Setup:

1) Save the main.js file to a specific location or folder on your computer. <br>
2) Navigate to that location/directory on the Terminal. <br>

How to run tests from the command line: 

1) Once you're inside the directory containing the main.js file, the test can be ran via the following command: node main.js -base price- -number of people on the job- -material used- <br>
2) Please do not use commas and quotations. <br>
3) Please note that -base price- -number of people on the job- -material used- correspond to actual inputs; for example: 1000 4 food. <br>
4) Five arguments are always necessary, the first being "node", second being "main.js", third being the base price, fourth is the number of people on the job, and the fifth being the material used. If five arguments are not provided, the output will ask for the proper inputs.
5) Each input corresponds to the index indicated via <em>process.argv[i]</em>. <br>
6) A final example using the first example from the provided problem, where the inputs were $1,299.99, three people, and food, and the output was $1,591.58. <br>
&nbsp;&nbsp;&nbsp;&nbsp;The Terminal command: <em>node main.js 1299.99 3 food</em> <br>
&nbsp;&nbsp;&nbsp;&nbsp;The Terminal output: <em>Total Cost: $1591.58</em>


