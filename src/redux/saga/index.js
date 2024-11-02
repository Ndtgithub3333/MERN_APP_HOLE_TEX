import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log('[posts]', posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (error) {
    yield put(actions.getPosts.getPostsFailure(error));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    console.log('[createPostSaga - post]', post);
    yield put(actions.createPost.createPostSuccess(post.data));
    yield put(actions.hideModal());
  } catch (error) {
    yield put(actions.createPost.createPostFailure(error));
  }
}

function* updatePostSaga(action) {
  try {
    const updatedPost = yield call(api.updatePost, action.payload);
    console.log('[updatePostSaga - updatedPost]', updatedPost);
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
  } catch (error) {
    yield put(actions.updatePost.updatePostFailure(error));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;
