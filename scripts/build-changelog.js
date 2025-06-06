const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');

// ====== General Settings ========
const GITHUB_OWNER = 'AIS-Package';
const GITHUB_REPO = 'aisp';

const OUTPUT_PATH = {
  en: path.join(__dirname, '../src', 'content', 'versions', 'en.md'),
  pt: path.join(__dirname, '../src', 'content', 'versions', 'pt-br.md'),
};

// Fixed headers for each language
const HEADERS = {
  en: [
    '# 📦 AISP Versions',
    `> 🗂️ Version History of [${GITHUB_REPO}](https://github.com/${GITHUB_OWNER}/${GITHUB_REPO})`,
    '\n---'
  ].join('\n'),
  pt: [
    '# 📦 AISP Versões',
    `> 🗂️ Histórico de Versões do [${GITHUB_REPO}](https://github.com/${GITHUB_OWNER}/${GITHUB_REPO})`,
    '\n---'
  ].join('\n'),
};

// Markers that delimit the changes section in the release body
const SECTION_MARKERS = {
  en: '# Changes:',
  pt: '# Alterações:',
};

// Text to replace when no changes section is found
const NO_CHANGES_TEXT = {
  en: '_No changes listed._',
  pt: '_Sem alterações listadas._',
};

// Text of the “view on GitHub” link in each language
const LINK_TEXT = {
  en: '🔗 View on GitHub',
  pt: '🔗 Ver no GitHub',
};

// ======== Auxiliary Functions ======

/**
* Creates an axios client.
*/
function createGithubClient() {
  const headers = {
    'User-Agent': 'AISP-Changelog-Generator',
    Accept: 'application/vnd.github.v3+json'
  };
  return axios.create({
    baseURL: `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`,
    headers
  });
}

/**
* Searches for all releases in the repository, paginated.
* Returns an array of “release” objects according to the GitHub API.
*/
async function fetchAllReleases(perPage = 100) {
  const client = createGithubClient();
  const all = [];
  let page = 1;

  while (true) {
    const response = await client.get('/releases', {
      params: { per_page: perPage, page }
    });

    if (!Array.isArray(response.data) || response.data.length === 0) {
      break;
    }
    all.push(...response.data);
    page += 1;
  }

  return all;
}

/** 
* Formats a Brazil date 
*/
function formatBRDate(isoDate) {
  if (!isoDate) return '';
  const d = new Date(isoDate);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
* Extracts from the full text (release body) the section that starts with `marker`
* and goes up to the next title at the same level (or until the end of the text).
*
* Example of marker: "#### Changes:" or "#### Alterações:".
*/
function extractSection(text, marker) {
  const regex = new RegExp(`${marker}[\\s\\S]*?(?=\\n-{3,}|$)`, 'i');
  const match = text.match(regex);
  if (!match) return null;
  return match[0]
    .replace(new RegExp(`^${marker}`), '')
    .trim();
}

/**
 * Monta a seção de uma release em Markdown para um idioma específico.
 *
 * @param {Object} release       - Objeto de release da API do GitHub.
 * @param {string} locale        - "en" ou "pt"
 * @returns {string}             - Bloco Markdown completo para esta release
 */
function buildSection(release, locale) {
  const title = release.name || release.tag_name;
  const dateBr = formatBRDate(release.published_at);
  const tagLine = `## ${title} (${dateBr})`;

  const marker = SECTION_MARKERS[locale];
  const body = release.body || '';
  const extracted = extractSection(body, marker);

  // Se não achar seção, exibe texto padrão de “sem alterações”.
  const changesSection = extracted
    ? `${extracted.trim()}`
    : NO_CHANGES_TEXT[locale];

  const lines = [];
  lines.push(tagLine);

  if (locale === 'en') {
    lines.push('**Changes:**', '');
  } else {
    lines.push('**Alterações:**', '');
  }

  // adiciona o conteúdo extraído.
  lines.push(changesSection, '');

  // link para a release no GitHub
  const linkText = LINK_TEXT[locale];
  lines.push(`[${linkText}](${release.html_url})`, '\n---', '');

  return lines.join('\n');
}

/**
 * Generates the changelog in both languages ​​(en + pt).
 */
async function generateChangelog() {
  console.log('🔄 Fetching all releases from GitHub...');
  const allReleases = await fetchAllReleases();

  if (!allReleases.length) {
    console.warn('⚠️ No release found.');
    return;
  }

  // Sort from newest to oldest
  allReleases.sort((a, b) => {
    const da = new Date(a.published_at).getTime();
    const db = new Date(b.published_at).getTime();
    return db - da;
  });

  const accumulated = {
    en: [HEADERS.en],
    pt: [HEADERS.pt]
  };

  for (const release of allReleases) {
    try {
      if (release.draft || release.prerelease) continue;

      accumulated.en.push(buildSection(release, 'en'));
      accumulated.pt.push(buildSection(release, 'pt'));
    } catch (err) {
      console.warn(`❗️ Failed to process release ${release.tag_name}: ${err.message}`);
    }
  }

  const dirsToEnsure = new Set([
    path.dirname(OUTPUT_PATH.en),
    path.dirname(OUTPUT_PATH.pt)
  ]);

  for (const dir of dirsToEnsure) {
    await fs.mkdir(dir, { recursive: true });
  }

  await Promise.all([
    fs.writeFile(OUTPUT_PATH.en, accumulated.en.join('\n')),
    fs.writeFile(OUTPUT_PATH.pt, accumulated.pt.join('\n'))
  ]);

  console.log(`✅ English changelog generated: ${OUTPUT_PATH.en}`);
  console.log(`✅ Portuguese changelog generated: ${OUTPUT_PATH.pt}`);
}

// ========================= Execution =========================

generateChangelog().catch(err => {
  console.error('❌ Error generating changelog:', err);
  process.exit(1);
});
