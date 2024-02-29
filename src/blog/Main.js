import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import { useEffect, useState } from 'react';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';



function Main({ title }) {
  const [postContents, setPostContents] = useState([]);

  useEffect(() => {
      // Fonction pour récupérer le contenu de chaque fichier Markdown
      const fetchPostContent = async (post) => {
          try {
              const response = await fetch(post);
              const content = await response.text();
              return content;
          } catch (error) {
              console.error('Erreur lors du chargement du post :', error);
              return ''; // Retourne une chaîne vide en cas d'erreur
          }
      };

      Promise.all([fetchPostContent(post1), fetchPostContent(post2), fetchPostContent(post3)])
          .then((arrayTexts) => setPostContents(arrayTexts))
          .catch((error) => console.error('Erreur lors du chargement des posts :', error));
  }, []);

  return (
      <Grid
          item
          xs={12}
          md={8}
          sx={{
              '& .markdown': {
                  py: 3,
              },
          }}
      >
          <Typography variant="h6" gutterBottom>
              {title}
          </Typography>
          <Divider />

          {/* Afficher le contenu des articles */}
          {postContents.map((postContent, index) => (
              <Markdown className="markdown" key={index}>
                  {postContent}
              </Markdown>
          ))}
      </Grid>
  );
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Main;