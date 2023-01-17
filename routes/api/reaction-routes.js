const router = require('express').Router();
const {
    createReaction,
    removeReaction
} = require('../../controllers/reaction-controller');

// /api/reaction/<userId>
router.route('/:thoughtId').post(createReaction);

// /api/reaction/<userId>/<thoughtId>
router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;