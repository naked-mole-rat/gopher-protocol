# Gopher Protocol

## GopherRequest
`GopherRequest` is a class for holding the selector.
```
const { GopherRequest } = require('gopher-protocol');

const gopherRequest = new GopherRequest(selector);
```

## GopherLink
`GopherLink` is used for constructing the Gopher menu items
New menu items are created by doing:
```
const { GopherLink } = require('gopher-protocol');

const link = new GopherLink('0', 'Display Text', 'gopher.test', '/test', 70)
```

## GopherSubMenu
`gopherSubMenu` has two functions:
- `generate`: creates a new submenu from `GopherLink`s
- `parse`: converts text to an array of `GopherLink`s

```
const { GopherLink, gopherSubMenu } = require('gopher-protocol');
const links = [
  new GopherLink('0', 'Display Text', 'gopher.test', '/test', 70)
];
const subMenu = gopherSubMenu.generate(links);

const linkString = '0Display Text\t/test\tgopher.test\t70\r\n'
const parsedMenu = gopherSubMenu.parse(linkString);
```

## GopherTypes
Easy lookup of the accepted Gopher types
```
TEXT:        0
SUBMENU:     1
CCSO:        2
ERROR:       3
BINHEX:      4
DOS:         5
UUENCODED:   6
SEARCH:      7
TELNET:      8
BINARY:      9
MIRROR:      +
GIF:         g
IMAGE:       i
TELNET3270:  T
HTML:        h
INFORMATION: i
SOUND:       s
```
Example:
```
const { GopherTypes } = require('gopher-protocol');

const textType = GopherTypes.TEXT
```
