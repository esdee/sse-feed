# sse-feed

Test project to play around with a few libraries

[Pedestal](https://github.com/pedestal/pedestal)

[Petrol](https://github.com/krisajenkins/petrol)

[Reagent](https://github.com/reagent-project/reagent)

[Async-Redis](https://github.com/benashford/redis-async)

and server-sent-events


## Usage
Assumes that you have a local instance of Redis running on port 6379.
 
Redis is used for pub/sub.

Start the pedestal server with

```lein run-dev```

then navigate to

[http://localhost:8080/app.html](http://localhost:8080/app.html)

To create 'articles' that get published to Redis and sent to the client via server-side-events :

```lein publish-article some-id some-text```


## License
Do whatever you want with this code
