const Sharp = require('sharp');
const exifreader = require('exif-reader');
const { toSystemPath } = require('../../../lib/core/path');

module.exports = {
  getImageExif: async function (options) {
    let path = toSystemPath(this.parseRequired(options.path, 'string', 'image.getImageExif: path is required.'));
    const image = Sharp(path);
    const meta = await image.metadata();
    if (meta.exif)
      return exifreader(meta.exif);
    else
      throw "No EXIF data available for this file"
  }
}