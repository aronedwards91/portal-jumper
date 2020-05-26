# Portal Jumper - Interactive CYOA Tools

This page hosts the main viewing page for the CYOA's and related tools.

The git repo's for the actual source code are here:

- [CYOA React App](https://github.com/aronedwards91/CYOA-Viewer)
- [Journal](https://github.com/aronedwards91/CYOA-Journal)
- [Form Builder](https://github.com/aronedwards91/CYOA-Form)

## Build Process

- For react build, 
- Pre: rename /static folder in webpack config to eg: `assets/cyoa-pokemon/static`, Copy cyoa into assets,
- Post build: move static assets from inside cyoa folder to build root/static

## Todo 

- share files folder
- better intro text

## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve


For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
```
