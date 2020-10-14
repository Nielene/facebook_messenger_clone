https://www.youtube.com/watch?v=KB7JEnfc7Dc
Profit with JS - description.



firebase.

#1
Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase services:

```html
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.23.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.23.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
```
#2
To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).

Run the following npm command to install the CLI or update to the latest CLI version.

```js
npm install -g firebase-tools

```

#3

You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.
Sign in to Google

**firebase login**
Initiate your project
Run this command from your app’s root directory:

**firebase init**
When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:

**firebase deploy**


-------------
https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425

npx create-react-app firebase-hosting-demo
firebase login
firebase init
    Select Hosting: Configure and deploy Firebase Hosting sites.
    Select Use an existing project
    Select your Firebase Project (e.g. jake-firebase-hosting-demo)
        By default, Create React App will generate a build folder that will contain the production assets. Unless you changed the default configuration, you’ll want to enter build for this option.
        You will also be asked whether or not Firebase should configure as a single-page app. You’ll want to enter y (Yes) for this option.
        The last option is whether or not Firebase should overwrite your existing build/index.html. If you haven’t created a build for your app yet, then you won’t see this option. You’ll want to enter N (No) for this option, though.
firebase deploy

-----------

material ui
https://material-ui.com/
npm install @material-ui/core


____________


ES7 React/Redux/GraphQL/React-Native snippets
by: dsznajder
v2.8.2

i installed:

react-native-snippets
    Run the following terminal command:
      apm install react-native-snippets
      The package provides two snippets
    The package provides two snippets
      rnc - React Native Class Component Boilerplate
      rnp - React Native Pure Component Boilerplate

react-es7-snippets

(***it didn't work***)
________________

Typography:
https://material-ui.com/components/cards/


----------------
https://www.npmjs.com/package/react-datetime
npm install --save react-datetime

----------------
https://momentjs.com/
npm install moment --save


----------------
https://material-ui.com/system/typography/
Typography, inline text utilities

----------------
https://material-ui.com/components/app-bar/#fixed-placement

----------------
https://stackoverflow.com/questions/35813156/how-to-set-text-text-to-upper-case-in-react-native
```js
121 votes

<View>
  <Text style={{ textTransform: 'uppercase'}}>
    This text should be uppercased.
  </Text>

  <Text style={{ textTransform: 'capitalize'}}>
    Mixed:{' '}

    <Text style={{ textTransform: 'lowercase'}}>
      lowercase{' '}
    </Text>

  </Text>
</View>
```



```js
113 votes
<Text style={{}}> {'Test'.toUpperCase()} </Text>
```





```js
(3 votes)

<Text>{props.complexity.toUpperCase()}</Text>

<Text>{props.affordability.toUpperCase()}</Text>
```


----------------
https://brandpalettes.com/facebook-messenger-color-codes/

BLUE
PANTONE: PMS 2726 C (NEAREST MATCH)
HEX COLOR: #0078FF;
RGB: (0,120,255)
CMYK: (78,54,0,0)

LIGHT BLUE
PANTONE: PMS 298 C (NEAREST MATCH)
HEX COLOR: #00C6FF;
RGB: (0,198,255)
CMYK: (63,1,0,0)

WHITE


--------------

https://material-ui.com/components/cards/#complex-interaction

-------------
HomeIcon:
https://material-ui.com/components/icons/#svgicon

---------------

https://www.colorhexa.com/3f51b5

---------------
https://stackoverflow.com/questions/50867449/is-there-a-way-i-can-overwrite-the-colour-the-material-ui-icons-npm-package-prov

Just add a style fill: "green"

```js
<Star style={{fill: "green"}}/>
```
