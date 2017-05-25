# Open Data Notifications

This [Node.js](https://www.nodejs.org) web application, designed to be deployed on [Heroku](https://www.heroku.com), is intended to be a general purpose notification system for open data sources. Subscribers should be able to configure notifications based on queries that will be periodically run by the system.

![open data notifications diagram](https://odnotify.herokuapp.com/img/diagram.png)

* [User Experience Specification (MVP)](docs/ux.md)
* [Background](docs/background.md)

## Local Development

### Prerequisites

Ensure that the following software is installed on your system:

* [Node.js](https://www.nodejs.org) 
* [npm](https://www.npmjs.com/)

### Configuration

You will require an Open States API key, which [you can obtain here](https://openstates.org/api/register/).

To configure your own local project:

```
cp config/default.js conig/local.js
```

Edit `config/local.js` file for local settings. Most values will not need custom configuration, and can be removed. But for any APIs you intend to use, you'll need to obtain your own credentials.

* [Open States API](https://openstates.org/api/register/)
* [Twilio API](https://www.twilio.com/console)

### Running the project

Install the projects dependencies with:

```
npm install
```

You can start a development server on [localhost:3000](http://localhost:3000) with:

```
npm start
```

### Running the tests

You can run the project's test suite with:

```
npm test
```

## Production Deployment (Heroku)

To run this application on Heroku, you will need to install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).  You can create a new application for the project with:

```
heroku create <your desired name>
```

From there, you should be able to deploy immediately with:

```
git push heroku master
```

Once (or before) the app is deployed, you'll need to set the necessary environment variables for the application. Reference `config/default.js` for all necessary values, but it will require this command.

```
heroku config:add OPENSTATES_API_KEY=your key here
```

## License

MIT
