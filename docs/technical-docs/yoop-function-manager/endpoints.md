---
sidebar_position: 2
---

# Methods

The Function Manager has a set of methods that can be used to interact with the service. You can think of these methods as HTTP endpoints. The Function Manager uses gRPC for communication, because it's a microservice and gRPC is a high-performance, open-source universal RPC framework.

## GetFunction

This method is used to get a function by its ID. The function ID is a UUID that is generated when a function is created.

The request message should include the function ID:

```protobuf
{
    "id": "4e243009cf560b7284aee70f3ade8136"
}
```

You will receive a response which should look like this:

```protobuf
{
    "functionData": {
        "name": "testFunction",
        "body": "console.log(\"Howdy 🤠\");",
        "user": "userId123",
        "id": "4e243009cf560b7284aee70f3ade8136",
        "created_at": {
            "seconds": "1711834349",
            "nanos": 619000000
        },
        "updated_at": {
            "seconds": "1711834349",
            "nanos": 619000000
        },
        "last_bootstrapped_at": {
            "seconds": "1711834349",
            "nanos": 619000000
        }
    }
}
```

## CreateFunction

This method is used to create a new function. The request message should include the function name, body, and user ID:

```protobuf
{
    "functionData": {
        "body": "console.log(\"Howdy 🤠\");",
        "name": "testFunction",
        "user": "userId123"
    }
}
```

## How do I call these methods?

You can call these methods using the gRPC client. The Function Manager has a gRPC client that can be used to interact with the service. The client is generated from the gRPC proto file that is used to define the service.

Here is an example of how you can call the `GetFunction` method using the gRPC client:

```javascript
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("function_manager.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const functionManagerProto =
  grpc.loadPackageDefinition(packageDefinition).function_manager;

const client = new functionManagerProto.FunctionManager(
  "localhost:3101",
  grpc.credentials.createInsecure()
);

client.GetFunction(
  { id: "4e243009cf560b7284aee70f3ade8136" },
  (err, response) => {
    if (err) {
      console.error(err);
    } else {
      console.log(response);
    }
  }
);
```

This is just an example of how you can call the `GetFunction` method using the gRPC client. You can use the same client to call other methods as well.

The implementation might be very different, depending on what type of programming language you're using. The example above is in JavaScript, but you can use any language that supports gRPC.

You can implement a JS / TS client using the `@grpc/grpc-js` package. You can look into the `function-manager` repository and get inspired on how you can use our existing NPM package to aid you into creating a JS / TS client. For other languages, you can look into the gRPC documentation and see how you can generate a client for your language and how to generate the interfaces from the proto file.

You can find more information about gRPC and how to use it in the [official documentation](https://grpc.io/docs/).

## Hittin' 'em with the Postman

You can also use Postman to interact with the Function Manager.

First, you need to create a new request in Postman. You can use the following URL to interact with the Function Manager:

```
localhost:3101
```

Note: You don't need to add HTTP or HTTPS to the URL because the Function Manager is running on gRPC, not HTTP.

Server Reflection should give you the available services and methods. If not, on the right of the URL, there's a dropdown where the methods are listed. Click it and use the server reflection functionality from Postman.

You can select the method you'd like to use and also use an example message.

## Important Notes

The Function Manager interacts with Cassandra. It's a service aimed to store function configuration and offload the data to another service that will bootstrap the functions. To interact with the Function Manager, you need to have a Cassandra container running as well.
