# Discover Recovery

Hello, Welcome to Discover Recovery, an app that collects and displays current meetings and activities for recovery groups.

<div style="text-align: center;">
<img src="./client/public/assets/welcome.gif"
    alt="welcome image" height="180"/>
</div>

***
A full stack MERN app featuring CRUD capability.
* Create meetings & activities
* Read currently listed meetings & activities
* Update existing meetings & activities
* Deleted meetings & activities
***


## Getting Started

  * Install dependencies:

Open a terminal and cd into the "client"  directory and install the dependencies(React, React-bootstrap, axios, etc...)

```bash
$ npm install
```

Open a terminal and cd into the "server"  directory and install the dependencies(Express, Mongoose, etc...)

```bash
$ npm install
```
***

 * Seed the database & Start the server:
 
    ***Ensure you have an active local database instance currently running.***

Open a terminal and cd into the "server"  directory and seed the database then start the server.

```bash
$ npm run seed
```
***...then***
```bash
$ npm start
```
***

 * Start the Client:
 
Open a terminal and cd into the "client"  directory and  start the clent.


```bash
$ npm start
```
***

* View the website at: http://localhost:3000
***

## How to Use
***
***
* Click the **Next Meeting** button to see the name, location, and start time of the next available meeting. If there are no upcoming meetings you will be notified. Also if the meeting is within 15 minutes of begining a warning will appear.

* In the Navigation bar at the top, click either of the four  links for **Activities**, **Meetings**, **Sponsorship** or **Join Us!** to navigate to the respective pages.

    -  *Activities*- Displays a list of all activities that are both past and upcoming. Select the button at the bottom of the page to toggle back and forth.
    ***

    - *Meetings*- Displays a list of all current meetings with location, times, and descriptions. ***If logged in*** two buttons will appear to either...
        1. *Make this my homegroup.* - This will update the current users homegroup to the selection.
        2. *My Homegroup* - This will navigate to the current user's homegroup's page.
    ***

    - *Sponsorship*- ***Must be logged in***. Displays a list of current members flagged for sponsorship that are of the same sex as the current member.
    ***

    - *Join Us!*- brings displays two options...
        1. *Become a member* - Click here to **CREATE** an account.
        2. *Login* - Click here to log-in to your account. A *Log Out* link will be displayed in the footer.

    - ***If logged In***, the *Join Us!* link will become a link to *My Profile*- Displays the current users sponsor and homegroup.
    In order to ***UPDATE*** a profile, select the grey **"Edit Profile"** button.
    ***

* If logged in as an administrator an  **"Admin. Tools"** link will be displayed in the footer.

    ***Active Admin Account:***  
        *email*: admin@1234   
        *password*: 1234

    * In order to **CREATE** a meeting or activity,  click the **Admin. Tools** link. select the grey **"Add Meeting/Activity"** button. Provide the required information, then select the  blue **"Add Meeting/Activity"** button.

    * In order to **UPDATE** a meeting or activity. Click the Meeting/Activity link in the Navbar and select the grey **"Edit Meeting/Activity"** button. Make the desired changes, then select the  grey **"Edit Meeting/Activity"** button.

    * In order to **DELETE** a meeting or activity. Click the Meeting/Activity link in the Navbar and select the grey **"Edit Meeting/Activity"** button. Click the red **"Delete Meeting/Activity"**  button.

    * In order to flag a member for sponsorship or grant administrative privileges, select the grey **"View Members"** button. This will display an ordered list of all current members names. Select a member to see radio buttons allowing you to toggle their sponor/admin status.

***
***

  # Reasearch and Explanation
***

*  **Authentication**  - I used authentication because it adds real world security to my app, by hashing passwords and storing tokens on a users computer. It also allowed an opportunity for me to research some new technologies on my own. Allowing users to create **REAL, SECURE** accounts  opens so many doors. Some of the technologies I was introduced to include:
    * JSON Web Token  
        -   Assists in the creation and verification of "tokens". After creating via a built in method (.sign)a token with information stored on it, The token is stored onto the local storage of the user's computer. During the verification process, the token is retrieved from local storage and sent to the server for verification via a built in method (.verify).
    * bcrypt  
        - A password hashing function that converts a regular password to an encrypted string. This encrypted string is then saved to the database avoiding the neccesity to save the actual password for future verification.
    * dotenv  
        - Loads variables from a .env file into process.env. In this case, the JWT secret.

     Storing passwords in their original form directly on the database, attackers could possibly find them out.  Drawbacks would include the learning curve of implementation, and the confusing code needed to hash the passwords. I also had a little difficulty in seeding my users. I noticed that the seeded users had passwords saved that were not hashed. During  authentication the passwords were rejected because the incoming password WAS hashed and therefore no longer matched the stored 'actual' password.  A simple solution was to go in to the database and make a copy of the hashed password and change the actual password in the user seed with a hashed version.

* **Hooks** - While I did use hooks in my original competency project, I found some new hooks to learn and implement. 

    * **useContext** -
        * I used the useContext hook in order to hold state and make it easy for other components to have access to this state and even change it. I did do quite a bit of research on **Redux** and came to the conclusion that the useState hook seems to provide for all of my current needs.
        * The benefits of using context are obvious on the surface. I don't have to maintain state on the top level of my app an pass that state through to all of my componenets. However, with such a small app and not much depth to my components, I am left with abouth the same, if not more, code than if I would have just passed state through.

   * **useParams** - 
        * This hook is neccesary in order to create dynamic routes within my React app. It ended up being very simple to use. After importing this hook from 'react-router-dom', and creating an instance at the beginning of a component, I was able to access the object created and extract the URL params.

    * **useNavigate** -  
        * Learning of this hook really handled some hurdles that I could not find any elegent way around. This hook is equivalent to the "window" method ".location". While the window.location method was effective, there was a noticeable lag. The "useNavigate" hook was somewhat of an equivalent to the "Link" component from 'react-router-dom' compared to a regular anchor tag.
***
***