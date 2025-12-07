import React from 'react';
import { articles } from './articlesData';
import { Box, Typography, Card, CardActionArea, CardContent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const ArticlesList = () => (
  <Box sx={{ py: 8 }}>
    <Typography variant="h4" color="primary" fontWeight={700} align="center" gutterBottom fontFamily="Inter, Roboto, Arial">
      Articles
    </Typography>
    <Grid container spacing={3} sx={{ maxWidth: 900, mx: 'auto', mt: 2 }}>
      {articles.map(article => (
        <Grid item xs={12} sm={6} md={4} key={article.id}>
          <Card elevation={4} sx={{ bgcolor: 'white', borderRadius: 3 }}>
            <CardActionArea component={Link} to={`/articles/${article.id}`}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} fontFamily="Inter, Roboto, Arial" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontFamily="Inter, Roboto, Arial">
                  {article.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ArticlesList;
