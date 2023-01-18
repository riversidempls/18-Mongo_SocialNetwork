# 18-Mongo_SocialNetwork
For FS Bootcamp challenge 18 NoSQL

## Summary

This challenge required us to create an API for building a social network website using MongoDB without starter code. Instead of using seed scripts, we have to populate the database using insomnia and passing JSON objects back through the API. First I had to create the models for Users and Thoughts. Then I created the controllers that will process data into those models. And finally I created routes for Users, Thoughts and Reactions. 

Once the API was working on my local machine, then I deployed it to Heroku and linked up the app to MongoDB Atlas where the database is hosted in the cloud. The Heroku app gets authenticated to Mongo Atlas through the MongoURI environmental variable that's stored in Heroku.

Here are a two of the links to the Heroku app running in production if you'd like to test it out for yourself:

# Get all Users:
https://mongo-social.herokuapp.com/api/users

# Get all Thoughts:
https://mongo-social.herokuapp.com/api/thoughts



Now that all the pieces are in place I can record a screen capture demonstrating the functionality provided by the app and upload a link for all to see. Click below to check it out!

https://drive.google.com/file/d/1YzCVHLBm_sU5v-Eb8VN35bFUuBBDBqHv/view



## Author

This tutorial was created by Conor Donnelly for challenge 17 of Full Stack Coding Bootcamp at the University of Minnesota in January of 2023.
You can find my GitHub profile at https://github.com/riversidempls