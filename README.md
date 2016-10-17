# _Github Repo Search_

#### _Look up public repos by username, Sept 23, 2016_

#### By _**Sara Jensen**_
https://github.com/thejensen/javascript_github-search

## Description

_**If you're interested in the list of public repos by a user on github, use the handy search provided here.**_

## Setup/Installation Requirements

_To run app locally:_
_In terminal, navigate to your desktop and execute the following:_

* git clone https://github.com/thejensen/javascript_github-search
* cd javascript_github-search
* touch .env
* npm install
* bower install
* gulp build
* gulp serve


_(If you happen to have a github API key go into the empty .env file and add...)_

* exports.apiKey = "YOUR-API-KEY";
* Save the file
* gulp build
* gulp serve

_For more information about these tasks, see the file, installation-instructions-expanded.txt in this repository._

## About GitHub API Keys or Personal Access Tokens

_Use the GitHub API to retrieve this information. This API allows 5,000 requests per hour with an API key, but only 60 requests per hour without one. Everyone is therefore required to use their own unique key. GitHub refers to these keys as "Personal Access Tokens"._

**Creating Personal Access Tokens**

Visit the Settings area of your GitHub account, select Personal Access Tokens from the sidebar, and hit Generate New Token.
GitHub will offer a list of options. Do not select any. These grant read/write permissions and access to personal data. Finally, select Generate Token.

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
