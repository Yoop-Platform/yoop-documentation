---
sidebar_position: 1
---

# Getting Started

At this point you probably have the docs running locally on your machine. If you don't, go back to [/docs/intro](/docs/intro) and follow the instructions to get it running locally.

There's probably only one thing you're interested in: adding a new page.

All of the technical documentation will be placed in the `technical-docs` directory.

To understand how we can structure the documentation, we can have a look at the last category in the sidebar called "Documentation Demo". You can see it's a dropdown, it has a 'Getting Started' page, followed by three more dropdowns, each called "Service `X`", which contain additional pages.

The folder structure can be seen in the project, but let's have a look at it here as well:

```
demo-docs/
├── intro.md
├── _category_.json
├── service-1/
│   ├── intro.md
│   ├── intro-2.md
│   ├── _category_.json
├── service-2/
│   ├── intro.md
│   ├── _category_.json
├── service-3/
│   ├── intro.md
│   ├── _category_.json
```

Consider a service a repository you'll be working on or one of the services running to accomplish something on the platform. A service can be the load balancer service, the function monitor service, the frontend dashboard, whatever you want.

The `demo-docs` section is just as an example. Please add all documentation in `technical-docs`. Inside of it, make a new directory for your service, and make sure your directory has a `_category_.json` file for sidebar configuration. All pages will be rendered from markdown files. Whenever you want a new page, create a new markdown file.

If you have any questions, drop them on Discord and somebody will probably assist you.
