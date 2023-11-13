# MobileReality
 
 ```
git clone https://github.com/energywraith/MobileReality.git
```

## Server 

0. Enter server directory
```
cd root
```

1. Install json-server
```
npm i -g json-server
```

1. Run server
```
json-server db.json --port 3005 --middlewares ./server.js
```

API
```
http://localhost:3005/posts
GET /posts - lista wszystkich
POST /posts - utworzenie nowego (w body podaj title i description)
GET /posts/{id} - pobranie pojedynczego
DELETE /posts/{id} - usuwanie
```

## Client

0. Enter client directory
```
cd client
```

1. Clone repository
```
git clone https://github.com/energywraith/MobileReality.git
```

2. Change directory
```
cd MobileReality
```

3. Install
```
npm install
```

4. Run client
```
npm start
```