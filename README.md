# Authenticator Module

## Getting Started
### Prerequisites
#### npm
```sh
sudo apt-get install npm
```
#### nvm
```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```
 * more in https://github.com/creationix/nvm/blob/master/README.markdown#install-script

#### node v6.0.0
```sh
nvm install v6.0.0
```

* you can check with:
```sh
node -v
```

### Install Dependencies

To install the dependencies of this project we have to do:

* We get the tools we depend upon via `npm`, the [node package manager][npm].

```
npm install
```

You should find that you have a new folder in your project.

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

We hace two ways to start the server:
```
npm start_server
```
Or
```
make start_server
```

Now browse to the app at `http://localhost:3000/`.

## Testing
If we want to execute test we execute:
```
npm test
```

## Deploy Module
TBD
