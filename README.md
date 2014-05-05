nvirc-cli
=========

A simple front-end to the CLI interface of [the nvirc daemon](http://github.com/Darkwater124/nvirc-daemon).

Configuration
-------------

`nvirc-cli` takes a simple JSON file as configuration. By default, it looks at `$HOME/.config/nvirc-cli/config`, but you can also set `$NVIRC_CLI_CONFIG` to point to a different location.

Example configuration file:

    {
        "host": "remote.host",
        "port": 3331,
        "password": "plaintext"
    }

Usage
-----

Simply execute `nvircc.js` using your command as argument. Only one command can be executed at a time.

Example session:

    $ ./nvircc.js set nickname dark-
    true
    $ ./nvircc.js set nickname
    nickname = dark-
    $ ./nvircc.js connect irc.freenode.net
    0
    $ ./nvircc.js join 0 '#novaember'
    true
    $ ./nvircc.js say 0 '#novaember' 'Hello, world!'
    true
