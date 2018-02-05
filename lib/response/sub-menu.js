const GopherLink = require('./link');

const generate = (links) => {
  const string = links
    .map(link => link.generate())
    .join('\r\n');

  return string;
};

const parse = (string) => {
  const lines = string
    .split('\r\n')
    .slice(0, -1);

  return lines.map((line) => {
    const lineParts = line.split('\t');
    return new GopherLink(
      lineParts[0].substring(0, 1),
      lineParts[0].substring(1),
      ...lineParts.slice(1),
    );
  });
};

module.exports = {
  generate,
  parse,
};
