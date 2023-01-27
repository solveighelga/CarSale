# Group Project 5 - CarSale :red_car:
## About
#### The project focused mainly on the backend and error handling/defense mechanisms
## API Documentation 

### STEP 1 - Open App
#### Open (or download) the Postman Desktop App. 

### STEP 2 - CONNECTING TO THE SERVER VIA URL
#### Enter the following url: xxxxx

### STEP 3 - "GETTING" all the cars that have been created
#### Choose 'GET' from the dropdown list next to the url
#### Press Send <sup>Blue button next to the url</sup>
#### :partying_face: Result: you should now see all of the cars that have been posted.  

### STEP 4 - CREATING A USER
#### Open a new window, enter the url again but remove cars and change the ending to users
#### Choose 'POST' from the dropdown list next to the url
#### Below choose 'Body' and below that choose 'x-wwww-urlencoded'
#### Now we are able to post a new user but first we have to have some information.
#### Add the following to 'KEY':
##### :ballot_box_with_check: name
##### :ballot_box_with_check: email
##### :ballot_box_with_check: password
#### Now you are able to add a 'VALUE' to your key, example/ :ballot_box_with_check: name Tskoli
#### Press Send <sup>Blue button next to the url</sup>
#### :partying_face: Result: you should now see your id, name, email and token.

### STEP 5 - LOGIN
#### Open a new window, enter the url again but add to the ending users /login
#### Choose 'POST' in the dropdown menu next to the url.
#### Below choose 'Body' and below that choose 'x-wwww-urlencoded'
#### Now we are able to "login# but first we have to have some information.
#### Add the following to 'KEY':
##### :ballot_box_with_check: email
##### :ballot_box_with_check: password
#### Press Send <sup>Blue button next to the url</sup>
#### :partying_face: Result: Congrats! you are now logged in as a user and are able to 'POST' a car if you can see your id, name, email and token.

### STEP 5 - POSTING A CAR
#### Choose 'POST' in the dropdown menu next to the url.
#### Below choose 'Body' and below that choose 'x-wwww-urlencoded'
#### Now we are able to add some information to our car listing.
#### Add the following to 'KEY':
##### :ballot_box_with_check: name
##### :ballot_box_with_check: type
##### :ballot_box_with_check: year
##### :ballot_box_with_check: color
##### :ballot_box_with_check: gear
##### :ballot_box_with_check: engine
##### :ballot_box_with_check: km
##### :ballot_box_with_check: price
##### :ballot_box_with_check: photo  
#### Now you are able to add a 'VALUE' to your key, example/ :ballot_box_with_check: name SUBARU

### STEP 5.1 - POSTING A CAR
#### To be able to 'POST' a car you need authentication. This is where we will need to go back to our login tab and copy the "token" information
<sup>only copy the text inside the quotation marks "token": " **copy this text** "</sup>
#### Go back to your car tab and where we selected 'Body' before now we want to select 'Authorization'
##### Next to **Type** select 'Bearer Token' from the dropdown menu
##### Paste your Token in the input field.
#### Press Send <sup>Blue button next to the url</sup>
#### :partying_face: Result: Congrats! you have now made your first 'POST' and should see the information displayed with your username.

### STEP 6 - UPDATING A CAR
<sup>make sure you are on the car ulr where you made a 'POST' before</sup>
#### Choose 'PUT' in the dropdown menu next to the url.
#### To be able to update you need authentication, this is where the **car id** comes in.
#### Locate the id from the 'GET' result
#### Add the id to the url with a / symbol between
#### Now you are able to update a value
#### Press Send <sup>Blue button next to the url</sup>
#### Now to see if it updated you will have to go back to 'GET' and Press Send <sup>Blue button next to the url</sup>
#### :partying_face: Result: The value you changed should be updated!

### STEP 7 - DELETING A CAR
<sup>make sure you are on the car ulr where you made a 'PUT' before</sup>
#### Choose 'DELETE' in the dropdown menu next to the url.
#### To be able to update you need authentication, this is where the **car id** comes in.
#### Locate the id from the 'GET' result
#### Add the id to the url with a / symbol between
#### Now you are able to delete the 'POST' that belongs to the id
#### :partying_face: Result: The value you changed should be deleted and no longer visable in the 'GET' results!
