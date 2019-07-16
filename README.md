# TestAngular Coding Exercise Angular 2+

This project was created for Test [Stefanini and Thompson Reuters]

#Get project

To clone the project just execute the following command in the route you choose

`git clone https://github.com/Javier-Git/CodingExerciseAngular.git`

#Previous requirements

This project require Node.js, for install you click in the next url and follow the instructions:

`https://nodejs.org/es/`

It is also necessary to have installed a version of angular 2+ you can install it using the following command

`npm install -g @angular/cli`

This project uses JSON-Server as an API to simulate the exchange of data, to install it, just execute the following command:

`npm install -g json-server`

Json-server needs a .json file as a data source, this file is in the following path:

`./src/json-server/author/author.json`


## Development server

Within the root folder of the project run the following command to download all necessary dependencies:

`npm install`

To execute the project you need to raise the JSON-Server service, you can execute the following custom command (package.json):

`npm run test-social`

or the long command: 

`json-server --watch ./src/json-server/author/author.json`

Then we start our angular application with the following command:

`npm start`

And our application will be ready to be used in the next url:

`http://localhost:4200/`
