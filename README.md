# _Github Repo Search_

#### _Look up public repos by username, Sept 23, 2016_

#### By _**Sara Jensen**_
https://github.com/thejensen/javascript_github-search

## Description

_**If you're interested in the list of public repos by a user on github, use the handy search provided here.**_

## Setup/Installation Requirements

_To run app locally:_
* In terminal, navigate to your desktop and execute:
* git clone https://github.com/thejensen/javascript_github-search
* cd javascript_github-search
* npm install
* bower install
* gulp build
* gulp serve

_Note: if you a new dependency to your gulpfile.js, execute ctrl+c in terminal to exit the serve task, then run gulp jsBuild. You can then gulp serve again._

_For more information about these tasks, see the file, installation-instructions-expanded.txt in this repository._

## User Stories

* As a user, I want to see the list of public repos available by github username.
* As a user, I want to know if I have entered an invalid github username.

## Specifications

| Behavior | Input | Output |
| --- | --- | --- |
| Program returns a list of public github repos with name, description, and url | thejensen | java-courseware; Group Project for Week 5, Java at Epicodus - A web-based platform to create and administer courses of all types; https://api.github.com/repos/thejensen/java-courseware -- etc. |
| Program returns name, location, email, and github profile url | thejensen | Sara Jensen; Portland, OR; jensen.sara.e@gmail.com; http://github.com/thejensen |
| Program returns error message if a user is not found | losiento | Sorry! User is Not Found. | 

## Known Bugs

_No known bugs._

## Support and contact details

_If you run into any issues, have questions, ideas or concerns, or want to make a contribution to the code, contact me at jensen.sara.e@gmail.com._

## Technologies Used

Javascript, Github API

### License

Copyright (c) 2016 **_MIT License_**
