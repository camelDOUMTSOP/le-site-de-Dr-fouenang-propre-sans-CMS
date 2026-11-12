const fs = require('fs');
const path = require('path');

// Lit une valeur YAML simple (avec guillemets éventuels)
function cleanValue(raw) {
  let v = raw.trim();
  if (v.startsWith('"') && v.endsWith('"')) {
    v = v.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  } else if (v.startsWith("'") && v.endsWith("'")) {
    v = v.slice(1, -1).replace(/''/g, "'");
  }
  return v;
}

// Extrait l'en-tête (entre les ---) et le contenu d'un fichier Markdown.
// Gère les valeurs longues que le CMS écrit sur plusieurs lignes.
function parseMD(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8').replace(/\r\n/g, '\n');
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const data = {};
  if (!match) return data;

  let currentKey = null;
  const raw = {};
  match[1].split('\n').forEach(line => {
    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s?(.*)$/);
    if (keyMatch && !/^\s/.test(line)) {
      currentKey = keyMatch[1];
      raw[currentKey] = keyMatch[2];
    } else if (currentKey && line.trim()) {
      raw[currentKey] += ' ' + line.trim(); // ligne de continuation
    }
  });
  Object.keys(raw).forEach(k => { data[k] = cleanValue(raw[k]); });

  const body = match[2].trim();
  if (body) data.body = body;
  return data;
}

function getFiles(dir) {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) return [];
  return fs.readdirSync(fullPath)
    .filter(file => file.endsWith('.md'))
    .sort()
    .map(file => ({ ...parseMD(path.join(fullPath, file)), slug: file.replace(/\.md$/, '') }));
}

// Les éléments datés dans le futur sont inclus : le site les masque
// jusqu'à leur date (publication programmée, sans redéploiement).
const db = {
  blog: getFiles('_posts/blog'),
  flyers: getFiles('_posts/flyers')
};

fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(db));
console.log(`✅ data.json généré : ${db.blog.length} articles, ${db.flyers.length} flyers.`);
