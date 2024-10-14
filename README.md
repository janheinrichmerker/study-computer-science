[![CI](https://img.shields.io/github/actions/workflow/status/janheinrichmerker/study-computer-science/ci.yml?branch=main&style=flat-square)](https://github.com/janheinrichmerker/study-computer-science/actions/workflows/ci.yml)
[![Code coverage](https://img.shields.io/codecov/c/github/janheinrichmerker/study-computer-science?style=flat-square)](https://codecov.io/github/janheinrichmerker/study-computer-science/)
[![Issues](https://img.shields.io/github/issues/janheinrichmerker/study-computer-science?style=flat-square)](https://github.com/janheinrichmerker/study-computer-science/issues)
[![Commit activity](https://img.shields.io/github/commit-activity/m/janheinrichmerker/study-computer-science?style=flat-square)](https://github.com/janheinrichmerker/study-computer-science/commits)
[![License](https://img.shields.io/github/license/janheinrichmerker/study-computer-science?style=flat-square)](LICENSE)

# 📽️ study-computer-science

Video player for the "Informatik studieren" advertisement movie.

_The project is developed as part of the Media Production lecture at [Anhalt University of Applied Sciences](https://hs-anhalt.de/en/) (in cooperation with [Martin Luther University Halle-Wittenberg](https://uni-halle.de))._

## User stories

Please refer to the [user stories](docs/user-stories.md) for details on the implemented features.

## Usage

The vieo player is a [React](https://reactjs.org/) app, built and run with [Yarn](https://yarnpkg.com/).

### Run

Run the app locally in development mode (page reloads on edits):

```shell script
yarn start
```

Now you use the app from [http://localhost:3000](http://localhost:3000) in your web browser

### Bundle

Build the app for production:

```shell script
yarn build
```

You'll find the bundled and optimized app in the `build` folder, ready for deployment.

## License

This project is [MIT licensed](LICENSE), you can use it for whatever you want as long as you mention this repository.
We use the [React](https://reactjs.org/) framework which is also [open source](https://github.com/facebook/react/blob/master/LICENSE).
