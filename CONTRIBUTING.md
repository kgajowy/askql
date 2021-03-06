# Contributing

We love contributions from everyone.
By participating in this project,
you agree to abide by the [code of conduct] adopted by xFAANG.

[code of conduct]: https://github.com/xFAANG/askql/blob/master/CODE_OF_CONDUCT.md

We expect everyone to follow the code of conduct
anywhere in xFAANG's project codebases, issue trackers, pull request comments,
chatrooms, and mailing lists.

## Contributing Code

1.  Fork the repo.

1.  Clone the repo:

         git clone https://github.com/{yourGithubUsername}/askql.git

    **_Don't forget to replace {yourGithubUsername} with your github username._**

1.  Install dependencies:

        npm i

1.  Make sure the tests pass:

        npm test

1.  Make your change, with new passing tests. Check out `prettier.config.js`

1.  Mention how your changes affect the project to other developers and users in the
    [`NEWS.md`][news] file.

1.  Push to your fork. Write a [good commit message][commit]. Submit a pull request.

1.  Others will give constructive feedback.
    This is a time for discussion and improvements,
    and making the necessary changes will be required before we can
    merge the contribution.

The versioning scheme we use is [SemVer](http://semver.org/).

All commits in PR are squashed on merge. Please use [Conventional Commits](https://www.conventionalcommits.org/) when naming your PR.

[news]: https://github.com/xFAANG/askql/blob/master/NEWS.md
[commit]: http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html

### Before you commit

There are a few things to check before you commit:

1. <p>Did you format your code correctly?</p><p>We are using Prettier to check code style. When you commit, git will validate whether your changes keep the style. Please reformat the code using Prettier before committing (when using VS Code we suggest installing Prettier - Code formatter extension and turning on autoformatting before save).</p>

1. <p>Did you write tests for your change?</p>  <p>We advise to try to write tests for every change of behavior in AskQL components.</p>

1. <p>Did you run <b>all</b> the tests?</p>  <p>Run <code>npm test</code> to check if all tests pass. Note that while your own tests may pass, your change might be breaking existing tests.</p>

## License

Any contributions you make will be under the MIT Software License.
In short, when you submit code changes, your submissions are understood to be under the same MIT License that covers the project. Feel free to contact the maintainers if that's a concern.

## Getting Help

You are always welcome to open an issue on [AskQL Github issues](https://github.com/xFAANG/askql/issues).

## References

This document was based on Thoughtbot templates
https://github.com/thoughtbot/templates
