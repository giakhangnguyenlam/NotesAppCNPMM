# Document for seminar project new technology

## Sign up
link: https://seminarcnpmm.herokuapp.com/signup

> POST

### Request
```
{
    "name":"Khang",
    "username":"khanguser09",
    "password":"123"
}
```

### Response
```
{
    "id": "8"
    "username": "khanguser09",
    "name": "Khang",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5ndXNlcjA5Iiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTYzNDU0MTcxMywiZXhwIjoxNjM0NjI4MTEzfQ.3Hg27Oz7OaoSsyOJRHS7nkHC6CaJDPlLjDlqP9I3ZMw"
}
```

## Login
link: https://seminarcnpmm.herokuapp.com/login
> POST

### Request
```
{
    "username":"khanguser09",
    "password":"123"
}
```
### Response
```
{
    "id": "8"
    "username": "khanguser09",
    "name": "Khang",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5ndXNlcjA5Iiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTYzNDU0MTgzMSwiZXhwIjoxNjM0NjI4MjMxfQ.H0rJRaTADq_soH9xV2_zWGta42dw9zPr2gDZtjJjhwk"
}
```

## Edit user
link: https://seminarcnpmm.herokuapp.com/user/username/khanguser09

> PUT

> Note: khanguser09 is a username

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

### Request
```
{
    "name":"khangupdate",
    "password":"123"
}
```

### Response
```
{
    "id": "8"
    "username": "khanguser09",
    "name": "khangupdate",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtoYW5ndXNlcjA5Iiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTYzNDU0MjA0NiwiZXhwIjoxNjM0NjI4NDQ2fQ.K6L47PXaOMDHrkv0nSPBK5dRT764kTSvTfPJVMtTlpk"
}
```

## Create a note
link: https://seminarcnpmm.herokuapp.com/user/note

> POST

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

### Request
```
{
    "userId" : 8,
    "title" : "This is a title",
    "date":"01-01-2000",
    "content":"abc"
}
```

### Response
```
{
    "userId": 8,
    "title": "This is a title",
    "date": "01-01-2000",
    "content": "abc",
    "status": "unfinished",
    "_id": 3,
    "__v": 0
}
```

## Delete a note
link: https://seminarcnpmm.herokuapp.com/user/note/0

> DELETE

> 0 is a note id

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

### Request

### Response
```
{
    "mess": "Delete successfully"
}
```

## Get notes by user id
link: https://seminarcnpmm.herokuapp.com/user/note/8

> GET

> 8 is user id

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

> Default: get notes with unfinished status

### Request

### Response
```
[
    {
        "_id": 3,
        "userId": 8,
        "title": "This is a title",
        "date": "01-01-2000",
        "content": "abc",
        "status": "unfinished",
        "__v": 0
    }
]
```

## Get finished notes
link: https://seminarcnpmm.herokuapp.com/user/note/finished/8

> GET

> Note: 8 is user id

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

### Request

### Response
```
[
    {
        "_id": 5,
        "userId": 8,
        "title": "This is a title",
        "date": "01-01-2000",
        "content": "abc",
        "status": "finished",
        "__v": 0
    }
]
```

## Edit content note 
link: https://seminarcnpmm.herokuapp.com/user/note/4

> PUT

> 4 is a note id

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt


### Request
```
{
    "title":"This is update title",
    "date":"17-10-2021",
    "content":"this is update content"
}
```

### Response
```
{
    "_id": 4,
    "userId": 8,
    "title": "This is update title",
    "date": "17-10-2021",
    "content": "this is update content",
    "status": "unfinished",
    "__v": 0
}
```

## Update status unfinished -> finished by 1 click
link: https://seminarcnpmm.herokuapp.com/user/note/status/5

> PUT

> Note: 5 is note id

> Note: You have to login with user account to use this

> Note: Headers has KEY: Authorization and VALUE: Bearer jwt

### Request

### Response
```
{
    "_id": 5,
    "userId": 8,
    "title": "This is a title",
    "date": "01-01-2000",
    "content": "abc",
    "status": "finished",
    "__v": 0
}
```

