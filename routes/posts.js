
// Yahan pr bs Routes likhenge aur function import karenge

import express from 'express';

import { getPosts, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);  // : is used because id would be dynamic
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router