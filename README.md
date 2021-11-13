


## Project Name & Pitch

**Cocktails app**

web application that provides user with random cocktails, allows user to view different cocktails based on first character search and different ingredients, user can also view more details about each of those cocktails in a new page

## Installation and Setup Instructions
Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm run dev`

To Visit App:

`localhost:3000/`


## Reflection

This was a 5 days task for Sigbar.

Project goals were:

* Show a random cocktail in the home page with its details.

* Allow user to see other cocktails with the same ingredient of the random cocktail by clicking on them. 

* Allow user to search by the first character of a cocktail
* Viewing those cocktails in cards the include an image and name of the cocktail
* User can click on any of those cocktails to view its details in a seperate page


## Technologies used and Why

* Next.Js: I used Next.js on top of React.js to take advantage of its main features including the SEO and the server side rendering
* TypeScript: typescript was used here to make the project strongly typed and to avoid errors in the development process
* TailwindCss combined with Sass modules: this is my preferred ui combination as tailwind offers great ease in development with its utility classes, nevertheless this ease comes with very long lines of classes which might be repeated. to avoid this I made use of the scss modules and tailwind features i.e: `@apply`, `@layer utilities`, `@layer components`

