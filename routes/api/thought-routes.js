const router = require('express').Router();
const {
  addThought,
  removeThought
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:UserId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .put(addThought)
  .delete(removeThought);


module.exports = router;
