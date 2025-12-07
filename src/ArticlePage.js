import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from './articlesData';
import { Box, Typography, Paper, Divider } from '@mui/material';

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5" color="error" fontWeight={700} fontFamily="Inter, Roboto, Arial">
          Article not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      <Paper elevation={6} sx={{ maxWidth: 700, mx: 'auto', p: 5, borderRadius: 4, bgcolor: 'white' }}>
        <Typography variant="h4" color="primary" fontWeight={700} gutterBottom fontFamily="Inter, Roboto, Arial">
          {article.title}
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body1" sx={{ color: '#222', fontFamily: 'Inter, Roboto, Arial', lineHeight: 1.8 }} component="div" dangerouslySetInnerHTML={{ __html: article.content }} />
      </Paper>
    </Box>
  );
};

export default ArticlePage;
