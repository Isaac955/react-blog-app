import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import { useEffect, useState } from 'react';


function Main(props) {
  const { posts, title } = props;
  const [postContents, setPostContents] = useState([]);

  useEffect(() => {
    //boucle de posts (url ressources) et recuperation du contenu
    // par le bias de la fonction fetch 

    let nextId = 0;

    posts.map((post) => (

      fetch(post)
      .then( (response) => response.text())
      .then( (text) => setPostContents([...postContents,{id:nextId++,text:text}]) ) 
      .catch( (erreur) => console.log("requete echouée..."+erreur))
      ))

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
      
      {/*boucle du contenu des posts pour la creation 
      des composants Markdown */} 
      
      {postContents.map((postContent) => (
        <Markdown className="markdown" key={postContent.text.substring(0, 40)}>
          {postContent.text}
        </Markdown>
      ))}
      
     



    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
