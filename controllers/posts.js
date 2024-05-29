const path = require('path');
const fs = require('fs');
let posts = require('../db/posts.json');
const { error } = require('console');

const index = (req, res) => {
  let html = '<ul>';
  posts.forEach((p) => {
    html += `
        <li>
          
            <h3>${p.title}</h3>
            <p>${p.content}</p>
            <img width="200" src="/imgs/posts/${p.image}" />
            <p>
              <strong>Tags</strong>: ${p.tags
                .map((t) => `<span class="tag">${t}</span>`)
                .join(', ')}
            </p>
          
        </li>`;
  });
  html += '<ul>';
  res.send(html);
};

const show = (req, res) => {
  const postRichiesto = posts.find((post) => post.slug === req.params.slug);
  if (postRichiesto) {
    res.json(postRichiesto);
  } else {
    res.status(404).send(`<h2>Post non trovato</h2>`);
  }
};

const create = (req, res) => {
  res.format({
    html: () => {
      res.send('<h2>Creazione nuovo post</h2>');
    },
    default: () => {
      res.status(406).send('Errore');
    },
  });
};

const store = (req, res) => {
  const { title, content, tags } = req.body;
  const slug = title.toLowerCase().replace(/ /g, '-');
  const image = req.file.filename;
  const newPost = {
    slug,
    title,
    content,
    image,
    tags: tags.split(','),
  };

  posts.push(newPost);
  fs.writeFileSync(
    path.join(__dirname, '../db/posts.json'),
    JSON.stringify(posts, null, 2)
  );

  res.format({
    html: () => {
      res.redirect('/');
    },
    json: () => {
      res.json(newPost);
    },
  });
};

const download = (req, res) => {
  const postDownload = posts.find((post) => post.slug === req.params.slug);
  if (postDownload) {
    const filePath = path.join(
      __dirname,
      '../public/imgs/posts/',
      postDownload.image
    );
    res.download(filePath);
  } else {
    res.status(404).json({ error: 'non trovato' });
  }
};

const destroy = (req, res) => {
  const { slug } = req.params;
  const postDaEliminare = posts.find((p) => p.slug === slug);
  if (!postDaEliminare) {
    return res.status(404).send(`Non esiste un post con slug ${slug}`);
  }

  posts = posts.filter((p) => p.slug !== slug);
  fs.writeFileSync(
    path.join(__dirname, '../db/posts.json'),
    JSON.stringify(posts, null, 2)
  );

  res.format({
    html: () => {
      res.redirect('/');
    },

    default: () => {
      res.send(`Post con slug ${slug} eliminato con successo.`);
    },
  });
};

module.exports = {
  index,
  show,
  create,
  store,
  download,
  destroy,
};
