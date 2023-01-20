#  Solent University COM623 Assessment 

#

## Single Page Application for Assessment/Group work tracking

## Joao Pereira Soares Student  14996588

#

## Hosted Website: https://learned-trilogy-192223.web.app/

#

## Git Repository: https://github.com/xspize/com623_assessment

#

# Introduction

This project was made taking in consideration the report made in the past. As stated in the previous work, managing time is difficult for students, every student has a different story, some may have to work, others simply forget how close deadlines are, in general, like the results given in the surveys made in the past project, the students need more time managing skills or even an app to help them with it.
This project does not contain a database or a login system and the reason why will be explained further.

# Methodology

The development methodology used for this project was the Waterfall development method. Due to its simplicity step-by-step basis.
#
The Waterfall Principles:

- Requirements
- Design
- Implementation
- Verification
- Maintenance

It is easy to understand because it goes in order starting from requirements and ending in Maintenance.
For this project I made a subtle step-by-step approach using this methodology.
#

# Methods

I based off my project on the research made previously using  surveys. To gather responses to each survey it took a few days but in the end it was worth it. According to all the replies I had a lot of students felt pressure to deliver their work in time or had part-times jobs. 
While following up all the material provided and developing the tracking app in class on SOL I always kept wondering how I would adapt the code to my own application which was the hardest thing for me to do. Until I realised that **React** is a wonderful tool to use for people that are not so good at programming or following up. 
I started my project with node and ran 

```
npx create-react-app (name of app)
```

It is very good as it instantly creates everything for the user to use and welcomes the user with an index.js page that can later be changed. I used https://reactjs.org/tutorial/tutorial.html quite a lot to get help from whenever I got stuck. 
After having react installed I felt that I had the "structure " to begin my own project and it was really exciting.
I proceeded to verify which dependencies I would need in order to do what I had in mind. I kept an eye on my Figma prototype made for the first report to have a reference as to what I should Install or not. 
#

## Dependencies

```
  "dependencies": {
  "@testing-library/jest-dom": "^5.16.5",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "firebase": "^9.16.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^5.3.4",
  "react-scripts": "5.0.1",
  "styled-components": "^5.3.6",
  "web-vitals": "^2.1.4"
```

Those are the dependencies used for my project. 
My application has the following Structure:
Public>
Src ↓
 	Assets > All the images used throughout the code.
	 Config > firebase.js / GlobalStyles.js
	 Views > All the JavaScript files used for my project. All of them link to each other using:

```
import { Link } from "react-router-dom";
[...]
<Link to="/Dashboard">
```

For CSS, which was a very important part of my project, I created the file **GlobalStyles** and provided ids to certain Divs and buttons or other custom part of the page when necessary.
An example would be for the Dash div, in which the CSS was exported directly from Figma and re-adjusted to work correctly in the file. 
Code snippet:

```
  dash	{
  width: 393px;
  height: 852px;
  background-color: #9ABBEC;
  border: 1px solid;
  border-color: #c2c2c2;
}
```

One of the things that I wanted to do and did a lot of research which consumed a lot of my time was to simulate a mobile screen. I did it through CSS while knowing there are better ways but unfortunately I could not make it work.
E.g. in the page Dashboard of my SPA  https://learned-trilogy-192223.web.app/dashboard (link for website hosted in firebase)
The page is centred and there is even a background with the colour blue and seems to match what I wanted to do but it was made through a very simple way of just using background-color. An id is called and the code snippet is the one shown of the dash (the code above)
Since it took me a lot of time to see through this, I gave up and just went with this option because it did what I wanted but not in the way I wished for. Because I wanted to have it in all pages without having to call for ids.
The app does not contain a database because it is supposed to be a simple app without the use of database, although I did use a database for testing the class project I did not end up building one for my app as it is not necessary in my view because it is not supposed to store the user data. With that said though, another missed opportunity because of lack of awareness/knowledge or even distraction was that I did not manage to pass the input to another page like I planned to. For e.g. When the app asks for your name, it doesn't retrieve it with an Hello {name}.

#

# Conclusion/Results

I enjoyed the module in general. A very friendly tutor that did his best for me to participate in classes even though I could not attend due to health problems. At times it felt a little hard to get on pair with everyone else and I felt behind a few weeks but it was also because of personal reasons. Unfortunately even though the SPA is operable and hosted, it is not fully functional. When it comes to the code It is mostly constituted of hooks between pages. None the less, I consider myself an amateur programmer but I am very happy with the result. Watching what was created by us being hosted in a website is like seeing magic,a  good feeling. 

# Appendix

I used quite a lot of websites to guide me whenever I needed, but these are the ones I used the most.

https://www.w3schools.com

https://www.scaler.com

https://www.stackoverflow.com

https://www.npmjs.com/

https://css-tricks.com/

https://www.behance.net/ (for inspiration in the design)







