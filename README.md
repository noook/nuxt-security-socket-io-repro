# Nuxt Security — Socket.io reproduction

This is the repository for the reproduction of the issue with the Nuxt Security module and Socket.io.

When `xssValidator` option is enabled, POST requests sent to socket.io are hanging.

When `xssValidator` option is enabled, with only `GET` requests as an allowed method, it also works.

When `xssValidator` option is disabled, everything works as expected.

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
