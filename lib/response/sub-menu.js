const GopherLink = require('./link');

const generate = (links) => {
  const buffer = links
    .map(link => link.generate())
    .join('\r\n');

  return buffer;
};

const parse = (buffer) => {
  const lines = buffer
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
