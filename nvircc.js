#!/usr/bin/node

var tls = require('tls'),
    fs  = require('fs');

var config;
if (process.env.NVIRC_CLI_CONFIG)   config = process.env.NVIRC_CLI_CONFIG;
else if (process.env.HOME)          config = process.env.HOME + '/.config/nvirc-cli/config';
else throw 'No config file found.';

var settings = JSON.parse(fs.readFileSync(config));

var conn = tls.connect({
    host: settings.host,
    port: settings.port,
    rejectUnauthorized: false
}, function ()
{
    conn.on('data', function (data)
    {
        data.toString().split('\n').forEach(function (line)
        {
            if (line.length < 1) return;
            if (line == 'not authorized') throw 'Bad password';
            if (line == 'authorized') return;

            process.stdout.write(line + '\n');
        });
    });

    conn.write(settings.password + '\n');

    conn.write(process.argv.slice(2).join(' ') + '\nend\n');
});
