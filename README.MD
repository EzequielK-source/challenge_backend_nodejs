<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<a href='https://www.linkedin.com/in/ezequiel-karottupullolil/'>
   <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img>
</a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" alt="Logo" width="80" height="80">

<h3 align="center">Alkemy Backend NodeJS challenge</h3>

  <p align="center">
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
A REST API to create, delete, modify and search disney movies and characters.

### Built With

* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
* ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites
1. DOCKER
2. POSTGRESQL

### Installation

1. Clone the repository and move to cloned folder
   ```sh
   git clone https://github.com/EzequielK-source/challenge_backend_nodejs && cd challenge_backend_nodejs
   ```
   <a href="#top">back to top</a>
2. Set own <a href="#db_params">DB connection params </a> in config/production.json 
    ```
    {
        "Customer": {
            "dbConfig": {
                "user": "own_dbengine_user",
                "password": "own_dbengine_password",
                "host": "own_dbengine_host",
                "port": own_dbengine_port,
                "database": "dbname",
                "dialect":"postgres"
            }
        }
    }
3. create the database if it doesn't exist, the database name has to match the 'database' setting passed in the production.json
   ```
   createdb ${dbname}
   ```
4. Install NPM deps
  ```
    npm install --production
  ```
4. Start app
  ```
    npm run start
  ```

#### Port 3030 has to be available
Failing that, if you can't enable port 3030, make the following modification to run the server on another port
```
  export PORT={avaible port}
  npm run start
```


<!-- CONTACT -->
## Contact

Email: programacionezequielk@gmail.com
<a href='https://www.linkedin.com/in/ezequiel-karottupullolil/'>
   <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></img>
</a>
<a href="https://github.com/EzequielK-source">
   <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">
   </img>
</a> 


<p align="right">(<a href="#top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
