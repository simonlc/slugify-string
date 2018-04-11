function slugify(text, whitelist=/[^a-zà-ú0-9]/g) {
  return text
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/&/g, '-and-')
    .replace(whitelist, '-')
    .replace(/-(?=-)/g, '')
    .replace(/^-|-$/g, '');
}

module.exports = slugify;
