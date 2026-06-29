const fs = require('fs');
const path = require('path');

// Fonction pour extraire les données d'un fichier Markdown
function parseMD(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  // On récupère ce qui est entre les ---
  const yamlMatch = content.match(/---\n([\s\S]*?)\n---/);
  let data = {};
  
  if (yamlMatch) {
    const yamlLines = yamlMatch[1].split('\n');
    yamlLines.forEach(line => {
      const [key, ...value] = line.split(':');
      if (key && value.length) {
        // Nettoyage pour avoir un JSON propre
        data[key.trim()] = value.join(':').trim().replace(/^["']|["']$/g, '');
      }
    });
  }
  return data;
}

// Fonction pour scanner un dossier
function getFiles(dir) {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) return [];
  
  return fs.readdirSync(fullPath)
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const data = parseMD(path.join(fullPath, file));
      return { ...data, slug: file.replace('.md', '') };
    });
}

// On compile tout dans un objet
const db = {
  blog: getFiles('_posts/blog'),
  flyers: getFiles('_posts/flyers')
};

// On génère le fichier data.json
fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(db));
console.log('✅ Base de données générée avec succès dans data.json !');