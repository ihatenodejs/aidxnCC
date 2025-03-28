# aidxnCC

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
[![Build Status](https://git.pontusmail.org/aidan/aidxnCC/actions/workflows/bump.yml/badge.svg)](https://git.pontusmail.org/aidan/aidxnCC/actions/?workflow=bump.yml)

aidxnCC is the third version of my personal website.

It's built with Next.js and Tailwind CSS. aidxnCC will always be a work in progress, though completely functional.

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fihatenodejs%2FaidxnCC&env=BRAINZ_USER_AGENT,LISTENBRAINZ_TOKEN&envDescription=You%20will%20need%20both%20a%20custom%20user%20agent%20(for%20identifying%20yourself%20to%20MusicBrainz)%2C%20and%20a%20ListenBrainz%20User%20Token.%20See%20the%20README%20for%20more%20information.&envLink=https%3A%2F%2Fgit.pontusmail.org%2Faidan%2FaidxnCC&project-name=aidxn-cc&repository-name=aidxnCC)

To deploy with Vercel, simply click the button above. When prompted for environment variables, see the section below.

**Own a server? Deploy on your own!** F*** Vercel, check out [Coolify](https://coolify.io/), a free and open-source alternative to Vercel. 

## Contributing

Any and all contributions are welcome! Simply create a pull request and I should have a response to you within a day.

Please use common sense when contributing :)

## MusicBrainz

This project does not use a custom user agent when interacting with the MusicBrainz API. This is because the LastPlayed component is rendered client-side and user agent support is not universal. If bugs were to occur, I believe it would be easier to block with this setup, and would likely come from only one client.

## To-Do

- [ ] Dockerize for easier deployment
- [ ] Use MusicBrainz recording collections for displaying data about music
