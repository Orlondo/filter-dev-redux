<!--
To start, when first working with the I initial was going make adjustments to the code as is with vanilla JavaScript to get everything displaying and functioning as it should, but then midway I realized that this is a good opportunity to use React. So I ditched everything I had to that point and Incorporated React into the app.

... Also note, I usually break thet "logic" up into multiple components as needed when building with React, but due to this app requiring so little code, I only used one file.

I added a lot of dependencies. For the most part, because its gives me the workflow and tools that I’m most comfortable with. I’ll add that some of the dependency require dependency, so that’s part of the reason why there are so many.

*** 

NOTE ADDDED (4/3) - I just realized that I didn't setup webpack.config to include all the nessasary file for a build. webpack.config has been updated. The app should run correctly following the steps below. If not, let me know.

***

Once installed,

- To build run “yarn build” in the terminal.

- To start run “yarn start” in terminal.

- To run in dev environment run “yarn run dev-server” in terminal ...after build has been created

… Of course, you can see this in the package.json file

++++++

I copied what I added from the package.json file and wrote a quick note next to the dependencies I added. Some of them are self-explanatory, but see below:

"dependencies": {
"babel-cli": "^6.26.0",    - This and the next couple are for babel (Self-expanitory)
"babel-core": "^6.26.0",
"babel-loader": "^7.1.4",
"babel-plugin-transform-class-properties": "^6.24.1",
- This
"babel-plugin-transform-object-rest-spread": "^6.26.0",
-  convert the ‘spread’ array in ES5
"babel-preset-env": "^1.6.1",
"babel-preset-react": "^6.24.1",
-     converts React code into ES5
"css-loader": "^0.28.11",
-     loads css into production file
"express": "^4.16.2",
- was already there
"node-sass": "^4.8.3",
"react": "^16.3.0",
- for React
"react-dom": "^16.3.0",
- for React
"react-router-dom": "^4.2.2",
- for React
"redux": "^3.7.2",
- for Redux
"sass-loader": "^6.0.7",
- convert sass into css load into production file
"style-loader": "^0.20.3",
- ass styles tag to production index.html
"webpack": "^4.4.1",
- for webpack / To package files and mangage workflow
"webpack-cli": "^2.0.13",
- for webpack
"webpack-dev-server": "^3.1.1"
- I LOVE this one!!!! Creates dev environment where you don’t have to restart the app everytime you make a change. VERY little setup involved
},

If there are any issues, please let me know.
--->
