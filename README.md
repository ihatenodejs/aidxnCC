# aidxnCC

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
[![Build Status](https://git.pontusmail.org/aidan/aidxnCC/actions/workflows/push.yml/badge.svg)](https://git.pontusmail.org/aidan/aidxnCC/actions/?workflow=push.yml)
[![ESLint Status](https://git.pontusmail.org/aidan/aidxnCC/actions/workflows/lint.yml/badge.svg)](https://git.pontusmail.org/aidan/aidxnCC/actions/?workflow=lint.yml)

aidxnCC is the third version of my personal website.

It's built with Next.js and Tailwind CSS. aidxnCC will always be a work in progress, though completely functional.

## Deploy

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fihatenodejs%2FaidxnCC&env=BRAINZ_USER_AGENT,LISTENBRAINZ_TOKEN&envDescription=You%20will%20need%20both%20a%20custom%20user%20agent%20(for%20identifying%20yourself%20to%20MusicBrainz)%2C%20and%20a%20ListenBrainz%20User%20Token.%20See%20the%20README%20for%20more%20information.&envLink=https%3A%2F%2Fgithub.com%2Fihatenodejs%2FaidxnCC&project-name=aidxn-cc&repository-name=aidxnCC)

To deploy with Vercel, simply click the button above. When prompted for environment variables, see the section below.

### Cloudflare

I currently host aidxnCC on Cloudflare Pages. They currently don't have a "Deploy to Cloudflare" button for Pages, but you can setup like so:

1. Fork `aidxnCC` to your own account
2. Deploy to Pages from your fork

> [!NOTE]
> Make sure to set your environment variables (see below!)
>
> You may also have to set the `nodejs_compat` compatibility flag in the Pages settings.

### Self-Host

**Own a server? Deploy on your own!** F*** SaaS, check out [Coolify](https://coolify.io/), a free and open-source alternative to Vercel.

## Contributing

Any and all contributions are welcome! Simply create a pull request and I should have a response to you within a day.

Please use common sense when contributing :)

## Environment Variables

| Variable             | Description                                                                         |
|----------------------|-------------------------------------------------------------------------------------|
| `LISTENBRAINZ_TOKEN` | Get this from your ListenBrainz [user settings](https://listenbrainz.org/settings/) |

## MusicBrainz

This project does not use a custom user agent when interacting with the MusicBrainz API. This is because the LastPlayed component is rendered client-side and user agent support is not universal.

If bugs were to occur with my code, I believe it would be easier for MusicBrainz to block this way.
