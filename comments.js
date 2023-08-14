// Create web server  for me github copilot

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Create a comment
// api/comments
router.post('/',
    auth,
    [
        check('comment','The comment is empty').not().isEmpty(),
        check('url','The url is empty').not().isEmpty()
    ],
    commentController.createComment
);

// Get all comments
router.get('/',
    auth,
    commentController.getComments
);

// Update comment
router.put('/:id',
    auth,
    commentController.updateComment
);

// Delete comment
router.delete('/:id',
    auth,
    commentController.deleteComment
);

module.exports = router;



