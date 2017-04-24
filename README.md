# README

React ToDo app

**Next Steps**
- brief write-up on what this app does
- Deploy to GitHub

## Updating a Todo
- Updating a todo was difficult but here are the basics:
  - find the todo that I need to update
  - actually update the todo
  - place that todo back in the array
- **Find the Todo**
  - I used a helper function that finds the todo by its id and returns it

## Deploy to GitHub
1. Add `homepage` to `package.json`		
```json
"homepage": "https://coolinmc6.github.io/CM-todo-react",	
```

2. Install GH-Pages	
```js	
npm install --save-dev gh-pages	
```
		
3. Add scripts to package.json

```js
scripts: {	
	// ...
	predeploy: "npm run build",
	deploy: "gh-pages -d build"
}
```

4. Deploy the site		
```sh
npm run deploy	
```
	
5. Enable GH-Pages on GitHub (settings, source GH-Pages)		


### Raw Facebook: GitHub Pages

>Note: this feature is available with `react-scripts@0.2.0` and higher.

#### Step 1: Add `homepage` to `package.json`

**The step below is important!**<br>
**If you skip it, your app will not deploy correctly.**

Open your `package.json` and add a `homepage` field:

```js
"homepage": "https://myusername.github.io/my-app",
```

Create React App uses the `homepage` field to determine the root URL in the built HTML file.

#### Step 2: Install `gh-pages` and add `deploy` to `scripts` in `package.json`

Now, whenever you run `npm run build`, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at [https://myusername.github.io/my-app](https://myusername.github.io/my-app), run:

```sh
npm install --save-dev gh-pages
```

Add the following scripts in your `package.json`:

```js
// ...
"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

The `predeploy` script will run automatically before `deploy` is run.

#### Step 3: Deploy the site by running `npm run deploy`

Then run:

```sh
npm run deploy
```

#### Step 4: Ensure your project’s settings use `gh-pages`

Finally, make sure **GitHub Pages** option in your GitHub project settings is set to use the `gh-pages` branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting">

#### Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.
