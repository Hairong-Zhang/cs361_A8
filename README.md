
The purpose of the microservice is to find the transport of a given surgeon name.

How to receive data?

My partner and I decided that we will use local database at this stage. Thus, we use JSON file as our local database at this assignment. Eventually, when the application is deployed, we will receive data from the URL.  Here, I will explain how my microservice will receive the data locally. For port 3000, the microservice send the local JSON file to localhost 3000 url using the res.send file where all the information about surgeons will be displayed at the port 3000. This will be how the microservice receive the data from my partner’s app.


<img width="472" alt="Screen Shot 2022-11-08 at 7 35 24 PM" src="https://user-images.githubusercontent.com/76983601/200707119-290ca144-fca7-4dfc-95db-56cd8921f5f2.png">

How to request data?

Since the microservice will return the transport of a given surgeon’s name. By using fetch method, we fetch local host 3000 where all the local data is stored. Parse the data, inside the JSON file, we will filter out the result with the given surgeon’s name and respond with transport value.

<img width="355" alt="Screen Shot 2022-11-08 at 7 35 20 PM" src="https://user-images.githubusercontent.com/76983601/200707134-8a448ab6-5c3d-4529-b121-73edfeb79391.png">
