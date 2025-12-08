import React, { useState } from 'react';
import { articles } from './articlesData';
import { Box, Typography, Card, CardActionArea, CardContent, Grid, TextField, Pagination, Chip, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const ARTICLES_PER_PAGE = 12;

const getUniqueTags = (articles) => {
  const tags = new Set();
  articles.forEach(a => (a.tags || []).forEach(tag => tags.add(tag)));
  return Array.from(tags);
};

const ArticlesList = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState('');
  const tags = getUniqueTags(articles);

  const filtered = articles.filter(article =>
    (article.title.toLowerCase().includes(search.toLowerCase()) ||
     (article.summary && article.summary.toLowerCase().includes(search.toLowerCase()))) &&
    (!selectedTag || (article.tags && article.tags.includes(selectedTag)))
  );
  const pageCount = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);

  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" color="primary" fontWeight={700} align="center" gutterBottom fontFamily="Inter, Roboto, Arial">
        Articles
      </Typography>
      <Box sx={{ maxWidth: 900, mx: 'auto', mb: 3, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
        <TextField
          label="Search articles"
          variant="outlined"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          sx={{ width: { xs: '100%', sm: 300 } }}
        />
        {tags.length > 0 && (
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mt: { xs: 2, sm: 0 } }}>
            <Chip label="All" clickable color={!selectedTag ? 'primary' : 'default'} onClick={() => { setSelectedTag(''); setPage(1); }} />
            {tags.map(tag => (
              <Chip key={tag} label={tag} clickable color={selectedTag === tag ? 'primary' : 'default'} onClick={() => { setSelectedTag(tag); setPage(1); }} />
            ))}
          </Stack>
        )}
      </Box>
      <Grid container spacing={3} sx={{ maxWidth: 900, mx: 'auto', mt: 2 }}>
        {paginated.map(article => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card elevation={4} sx={{ bgcolor: 'white', borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 8 } }}>
              <CardActionArea component={Link} to={`/articles/${article.id}`} sx={{ height: '100%' }}>
                {/* Optional: Article image thumbnail */}
                {article.image && (
                  <Box sx={{ width: '100%', height: 140, mb: 1, overflow: 'hidden', borderRadius: 2 }}>
                    <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                )}
                <CardContent>
                  <Typography variant="h6" fontWeight={700} fontFamily="Inter, Roboto, Arial" gutterBottom noWrap>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontFamily="Inter, Roboto, Arial" sx={{ mb: 1 }}>
                    {article.summary}
                  </Typography>
                  {article.tags && article.tags.length > 0 && (
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mt: 1 }}>
                      {article.tags.map(tag => (
                        <Chip key={tag} label={tag} size="small" />
                      ))}
                    </Stack>
                  )}
                  <Box sx={{ mt: 2, textAlign: 'right' }}>
                    <Typography variant="caption" color="text.secondary">
                      {article.author ? `By ${article.author}` : ''} {article.date ? `• ${article.date}` : ''}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      {pageCount > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination count={pageCount} page={page} onChange={(_, v) => setPage(v)} color="primary" />
        </Box>
      )}
      {filtered.length === 0 && (
        <Typography align="center" color="text.secondary" sx={{ mt: 6 }}>
          No articles found.
        </Typography>
      )}
    </Box>
  );
};

export default ArticlesList;
