-- This is a basic API that receives JSON data of surgeon's information and returns only the transport that is in the local database which is a local JSON file. Data is requested through a POST verb and all responses are returned as JSON. Eventually the microservice will integrated as part of his individual project. We just use JSON file as a database for this assignment. When he integrate the micorservice to his project, he will manipulate the data from Mongo DB.

## Key Features

-- The Following API endpoints are exposed:
- `The purpose of the microservice is to find the transport of a given surgeon name.


## How To Request Data
1. /filter - Send exercises data as JSON.

The main application/API Gateway will use Fetch API to request data from the microservice. The data sent for the request is in JSON format. See example provided below.

## How To Receive Data
1.  /filter - Data is sent as JSON. The microservice sends the exercise which is filtered as JSON. See example provided below.

## Example
API request - POST - `http://todo-exercises.herokuapp.com/filter

Example JSON:
"exercises": [
                    {
                        "_id": "635d8774d5895b5b546864f5",
                        "name": "Math",
                        "description": "Do math",
                        "score": 65,
                        "urgency": "Very",
                        "date": "2022-10-29T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "635d880dd5895b5b546864fa",
                        "name": "English",
                        "description": "Reading",
                        "score": 80,
                        "urgency": "Nornal",
                        "date": "2022-10-14T00:00:00.000Z",
                        "__v": 0
                    },
                    {
                        "_id": "635d8823d5895b5b546864fd",
                        "name": "Physics",
                        "description": "Research",
                        "score": 80,
                        "urgency": "Normal",
                        "date": "2022-10-08T00:00:00.000Z",
                        "__v": 0
                    }
                    
Returns: 
```

[{"_id":"635d8774d5895b5b546864f5","name":"Math","description":"Do math","score":65,"urgency":"Very","date":"2022-10-29T00:00:00.000Z","__v":0}]

```

## Sequence Diagram
