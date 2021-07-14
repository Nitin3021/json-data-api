# API endpoint to serve JSON data

## Overview
This API will look for 'absences.json' & 'members.json' files in '/src/api/json_files' folder of the project. It would then join these 2 array of objects into 1 using a key and send back to the requester using Express server.

## Output
API serves only 1 root route. This route will send JSON response with the available data.

## Installation

Recommended to use npm for installation of modules.

```bash
npm install
```

## Usage

To run this program.

```python
npm start
```

## Deployment

This API has been deployed using Heroku for the requester to consume the services from endpoint. 

```python
https://json-data-api.herokuapp.com/
```