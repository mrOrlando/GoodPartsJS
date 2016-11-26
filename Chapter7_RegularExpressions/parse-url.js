// The methods that work with regular expressions are:
// - regexp.exec
// - regexp.test
// - string.match
// - string.replace
// - string.search
// - string.split

var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];

var blanks = '       ';
var i;

document.writeln('<pre>');
for (i = 0; i < names.length; i++) {
    document.writeln(names[i] + ':'
        + blanks.substring(names[i].length), result[i]);
}
document.writeln('</pre>');

/*
url:    http://www.ora.com:80/goodparts?q#fragment
scheme: http
slash:  //
host:   www.ora.com
port:   80
path:   goodparts
query:  q
hash:   fragment
*/