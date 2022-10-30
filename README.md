# cs361_A8

How will others request data from the microservice?
The service will receive the surgeon's name as parameters using HTTP REST to find the corresponding transport of the surgeon. The service then makes appropriate changes to the database which is a local json file.

How will others receive data from the microservice?
The main application will return the transport of the surgeon from the microservice using HTTP REST.
