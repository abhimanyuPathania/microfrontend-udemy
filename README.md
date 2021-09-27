# Micro Frontends

This application was built as part of completing the following course:

https://www.udemy.com/course/microfrontend-course/

The application consisits of following stand alone micro frontend apps:

- marketing: `React` app. Serves `/` and `/pricing`
- auth: `React` app. Serves `/signin` and `/signup`
- dashboard: `Vue` app running at `/dashboard`
- cointainer: `React` app. Contains header and renders other micro frontends.

The micro frontends are built using Webpack's Module Federation architecture.

The application is an deployed to AWS S3 bucket using Github actions and served using AWS Cloudfront. It could be accessed at:

https://d31k9orm4ctsz0.cloudfront.net/

## Notes and learnings

### Good parts

- Webpack's Module Federation makes it very easy to generate and consume Javascript modules.
- Keeping all micro frontends in a monorepo and deploying it via Github actions works very well. Github action is used to detect if a micro frontend has changed and then deployed accordingly.
- Consuming exported `React` and `Vue` apps in container by wrapping them in `React` wrapper components is nice.
- Using `react-router` to decide which micro frontend app needs to be displayed is nice. Combined with `lazy` and `Suspense` from `React`, it is easy to lazy load micro frontends.
- Micro frontends can be easily developed in isolation.

### Bad parts

- Front end routing is a hard. In course, the instructor setups a syncing scheme between container and `React` micro frontend routers. But the same won't work for the `Vue` dashboard app. In course the `Vue` dashboard app does not has any internal routing.
- Local dev env is more complicated. Have to keep running all micro frontend webpack dev servers running in order to develop contianer.
  Will easily become impractical as we add more micro apps.
- `webpack` is hard dependency.

### TODOs: Future explorations

- Use `NPM` or `YARN` workspaces to manage node dependencies.
- Create separate node application to server all micro frontends.
- Look into more frontend routing solutions.
- Style using CSS modules rather than depending on CSS in JS solution.
- Integrate a backend service.
