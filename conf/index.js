"use strict";

const path = require('path');

module.exports = {
  // Base URL to use when requesting gist files.
  baseGistUrl: 'https://gist.githubusercontent.com',

  // Base URL to use when requesting repo files.
  baseRepoUrl: 'https://raw.githubusercontent.com',

  // Domain to use for CDN requests to RawGit.
  cdnDomain: 'rawgit-cdn.theel0ja.info',

  // GitHub "username/repo" from which RawGit's own static assets should be
  // loaded via the CDN. Set this to a falsy value to disable loading static
  // assets from the CDN.
  // cdnRepo: 'theel0ja/rawgit',

  // Git tag that points to the GitHub commit from which RawGit's own static
  // assets should be loaded via the CDN. Set this to a falsy value to disable
  // loading static assets from the CDN.
  // cdnTag: 'cdn-20180423',

  // Domain to use for dev requests to RawGit.
  devDomain: 'rawgit.theel0ja.info',

  // Blacklist of file extensions that will always be redirected to GitHub, even
  // when requested via the CDN. Typically extensions are on this list because
  // GitHub serves them with the proper Content-Type and there's no reason to
  // proxy them.
  extensionBlacklist: new Set([
    '',
    '.bz2',
    '.dcm',
    '.exe',
    '.gif',
    '.gz',
    '.ico',
    '.jpg',
    '.jpeg',
    '.md5',
    '.png',
    '.traineddata',
    '.wav',
    '.wordlist',
    '.zip'
  ]),

  // Whitelist of file extensions that will be proxied through RawGit for
  // development requests. All others will be redirected to
  // raw.githubusercontent.com.
  //
  // CDN requests use `extensionBlacklist` instead of this whitelist.
  extensionWhitelist: new Set([
    '.appcache',
    '.coffee',
    '.css',
    '.csv',
    '.eot',
    '.geojson',
    '.handlebars',
    '.hbs',
    '.htm',
    '.html',
    '.ics',
    '.js',
    '.json',
    '.jsonld',
    '.kml',
    '.md',
    '.mjs',
    '.n3',
    '.nt',
    '.otf',
    '.owl',
    '.pdf',
    '.rdf',
    '.rss',
    '.shex',
    '.svg',
    '.swf',
    '.ttc',
    '.ttf',
    '.ttl',
    '.vtt',
    '.wasm',
    '.woff',
    '.woff2',
    '.xht',
    '.xhtml',
    '.xml',
    '.xsl',
    '.xslt',
    '.yaml',
    '.yml',
  ]),

  // Whether we're running in a production environment (true) or
  // development/test (false).
  isProduction: process.env.NODE_ENV === 'production',

  // Number of milliseconds after which a connection to the upstream proxy will
  // time out if there's no activity on the socket.
  proxyTimeout: 10000,

  // Public directory containing static files.
  publicDir: path.join(__dirname, '..', 'public'),

  // Array of request header names that should be relayed from the user to
  // GitHub.
  relayRequestHeaders: [
    'If-Modified-Since',
    'If-None-Match',
    'User-Agent'
  ],

  // Array of response header names that should be relayed from GitHub to the
  // user.
  relayResponseHeaders: [
    'Date',
    'ETag',
    'Location'
  ],
};
