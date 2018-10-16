# VON Personal Agent

A HL Indy agent for individuals to hold credentials

## Running

```
cd docker
```

```
docker-compose build
```

```
docker-compose up
```

The web server will be made available at `localhost:7000` and the app will be available `localhost:7100`.

## Testing on your mobile device

The easiest way to run the development application on your mobile device is to use [`ngrok`](https://ngrok.com) to expose your local web server with a TLS connection. TLS is required now in most browsers to use certain features such as the camera (which we use for a QR code scanner).

`ngrok` is available on mac via a [homebrew](https://brew.sh) cask.

```sh
brew cask install ngrok
```

Once `ngrok` is installed and the environment is running, you can connect to the development app server on your mobile device by running:

```
ngrok http --host-header=rewrite 7100
```

And then visiting the forwarding url it provides. (For example: `https://abcd1234.ngrok.io`)