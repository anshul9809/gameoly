# GAMEOLY ASSIGNMENT

## Description

this is the assignment created for the gameoly coding round.

## Prerequisites

- Nodejs - as a runtime environment
- MongoDB - for storing the data
- POSTMAN - for checking the endpoints for the API


## Instrudctions to run

1. Clone the repository and move to the folder:
```bash
git clone https://github.com/anshul9809/gameoly.git
cd gameoly
```
2. Install the packages:

```bash 
npm i
```

3. Run the server:
```bash
npm start
```

for the other options we can either use nodemon or simple node.

- ### Nodemon
```bash 
npm i nodemon
nodemon server.js
```
- ### Node
```bash
node server.js
```


### API Endpoints

1. Create Note:

```bash
POST /api/v1/notes
```
Request:
```json
{
    "title":"second",
    "description": "description"
}
```

Response:

```json
{
    "message": "Note created Successfully",
    "note info in JSON format"
}
```

2. Update Note
```bash
PUT /api/v1/notes/{id}
```
Request:
```json
{
    "title":"second",
    "description": "description"
}
```

Response:

```json
{
    "message": "Note cupdated Successfully",
    "note info in josn format"
}
```

3. Delete Note
```bash
DELETE /api/v1/notes/{id}
```
Request:
```bash
null
```

Response:

```json
{
    "message": "Note Deleted Successfully",
}
```

4. Get Single Note:

```bash
GET /api/v1/notes/{id}
```
Request:
```bash
null
```

Response:

```json
{
    "notes info in JSON format"
}
```

5. Get All Notes:

```bash
GET /api/v1/notes/
```
Request:
```bash
null
```

Response:

```json
{
    "notes":["an array containing notes"]
}
```

### Conclusion

Happy Coding
ALl the requests asked in the assignment has been completed