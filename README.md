# Open Data Notifications

This application will as a notification system for a variety of open data sources, allowing citizens to actively monitor and stay up to date on processes that impact them. A deployed and publicly usable instance of this application is sponsored by the [Open Media Foundation](http://openmediafoundation.org/) and [Twilio.org](https://www.twilio.org).

## Background

In January of 2017 the Open Media Foundation (OMF) teamed up with Open States to scale their government transparency work. OMF provides the [Open Media Project](http://ompnetwork.org/) (OMP), a SaaS product designed to help governments live-stream their meetings and make them highly accessible through archived video and comprehensive search. Open States provides [openstates.org](https://openstates.org/), a collection of tools that make it possible for citizens to track what is happening in their state's capitol by aggregating information from all 50 states, Washington, D.C., and Puerto Rico. 

The #1 requested feature for both projects is the ability to be notified when updates are available. To that end we are planning to build a stand-alone, open source site where users can create accounts and sign up for notifications via SMS from both systems. Restful, JSON APIs are available from both Open States and OMP. While initial integration is planned for OMP and Open States, we intend to architect the system such that any data sources could be plugged in.

## Local Development

1. Create a `config/development.js` file for local settings.
1. Fill it with your information, referencing `config/default.js` for available
   settings.

## Production Deployment (Heroku)

TODO

## License

MIT
