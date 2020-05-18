# Newsletter Signup App
Signup to get regular updates on my web development journey, some important tips and best practices. 

## Getting Started
- The App is currently hosted on Heroku. For a quick peek visit [Newsletter App](https://glacial-plains-35733.herokuapp.com/).

### Run the app locally
- This app uses Mailchimp API to register and manage my newsletter audience. 
- You will need a Mailchimp account to run this app locally.
- Signup for a free Mailchimp account. Visit [www.mailchimp.com](https://mailchimp.com/)
- Create API key:
  - login, open `Account` settings, goto `Extras` -> API Keys -> create API Key
- Create Audience ID:
  - Click `Audience` on the navigation bar
  - Select `View Audiences` from drop down list
  - Click `Create Audience` and you should get your `Audience ID`.

### Prerequisites
- Mailchimp account, API Key and Audience Id
- Node, npm

### Installing
Clone this repository. 
```bash
$ git clone https://github.com/pratik-bongale/Newsletter-app.git
```

Change directory
```bash
$ cd newsletter-app
```

Install all dependencies
```
$ npm install
```

Rename ".env_sample" to ".env"
```
$ mv .env_sample .env
```

Modify ".env", add API key and Audience key generated from your Mailchimp account
```
API_KEY=abcdef:2987tt33847293876127t19238d7-us8
AUDIENCE_ID=asf88v7
```

Run app
```
$ node app.js
```

## Authors
* **Pratik Bongale** - *Initial work* - [Newsletter-app](https://github.com/Newsletter-app)


## Acknowledgments
- [The App Brewary](https://www.appbrewery.co/p/web-development-course-resources/)
- [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/)
