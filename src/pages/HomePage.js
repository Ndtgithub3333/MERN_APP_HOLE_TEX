import React from 'react';
import { Container, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import PostList from '../components/PostList';
import CreatePostModal from '../components/CreatePostModal';
import useStyles from './styles';
import { showModal } from '../redux/actions';

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        className={classes.fab}
        color="primary"
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
