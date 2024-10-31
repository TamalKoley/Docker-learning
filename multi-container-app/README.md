this project contains below:
1. MongoDB is used from docker images no need to download MngoDB app
2. backend is a API which is conneted to MongodDB
3. MongoDB and API is different container but shares same newtork (mynetwork) under docker. (use --network tag while running and put it under same network)
4. front end is a single page react app which send text and fetches text from mongo DB using backend API . (ge and post)
5. text is provided by the user from fornt end UI.
6. front end and backend is not under same docker network.