# aidxnCC

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

aidxnCC is the third version of my personal website.

It's built with Next.js and Tailwind CSS. aidxnCC will always be a work in progress, though completely functional.

## Deploy with Docker

Docker is the easiest way to deploy aidxnCC. There are two example `docker-compose.yml` files for you to use.

1. `docker-compose.yml` - Default, exposed on port 3000
2. `docker-compose.nginx.yml` - Helpful for NGINX Proxy Manager usage w/ Docker networks

Just create a `.env` file with the below variables, run `docker compose -d --build`, and you'll be all set.

## Environment Variables

| Variable             | Description                                                                         |
|----------------------|-------------------------------------------------------------------------------------|
| `LISTENBRAINZ_TOKEN` | Get this from your ListenBrainz [user settings](https://listenbrainz.org/settings/) |

## MusicBrainz

This project does not use a custom user agent when interacting with the MusicBrainz API. This is because the LastPlayed component is rendered client-side and user agent support is not universal.

If bugs were to occur with my code, I believe it would be easier for MusicBrainz to block this way.

## Contributing

Any and all contributions are welcome! Simply create a pull request and I should have a response to you within a day.

Please use common sense when contributing :)
