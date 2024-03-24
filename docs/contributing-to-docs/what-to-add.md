---
sidebar_position: 2
---

# Adding Information

No matter what kind of language, framework and library you're using to develop the solution, make sure there's an installation process (for dependencies, packages or whatever the language is using) and a starting process.

After you're satisfied with the solution and you're pushing your features, make sure you include a `Dockerfile` for your project. If you don't know what a `Dockerfile` is, head to the [Docker documentation](https://docs.docker.com) or ask somebody for assistance. We'll make use of the Dockerfiles to bootstrap all services together in a `docker-compose` configuration so we can all run the services locally and develop stuff a bit more easily and test the integrations. Eventually, somebody will probably make a generic, easy to follow guide on this documentation on how to build your Dockerfile, but until then, head to the Docker documentation or ask for assistance and we'll all have a look at it.

After providing a Dockerfile, make sure your setup and start instructions include both local execution and a containerized execution.

## What type of stuff should I add?

If you're making a service that will be called by any other services, a very important thing to do is provide interfaces / required data that your service needs to operate on any kind of request, procedure call (if we'll use gRPC), websocket message, etc. This includes, but it's not limited to: HTTP Headers, Body Parameters, URL Parameters, Messages (gRPC), Metadata parameters (gRPC), events, HTTP Methods, etc.

When writing documentation, make sure to include some small examples with snippets of data somebody is supposed to send to your service and snippets of data it's supposed to receive, but make sure to include an interface of it as well.

If you're not sure what all of this means, make sure to leave a question on Discord or open an issue on the documentation repository (although Discord is probably quicker).

## Images?

Yep! We (me, at least) love images. If you got diagrams that might make your service a bit easier to understand, feel free to include them as well. Images should be added under the `/static/img` directory. Afterwards you'll be able to add your images using markdown.

## A lot of information?

Not really. You don't have to write about how your controller calls your service, which calls the repository, which fetches the data and whatever sorting and manipulation you're doing in the service. We'll probably have to document all this information in the end, depending if we go to any kind of conferences and they require us to document what kind of character encoding we're using on our files, but at the moment, I'd say let's keep it to bare minimum, something that provides further help between ourselves, like what the endpoint is expecting and what it's supposed to return, so we don't waste too much time on writing fancy markdown.
