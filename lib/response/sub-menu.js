const GopherResponse = require('./response');

module.exports = class GopherMenu extends GopherResponse {
  constructor(links) {
    super();
    this.links = links;
  }

  toBuffer() {
    const buffer = this.links
      .map(link => link.generate())
      .join('\n');

    return buffer;
  }
};
