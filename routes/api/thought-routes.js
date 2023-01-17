const router = require('express').Router();
const {
  getAllThoughts,
  getOneThought,
  createThought,
  updateThought,
  removeThought
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// /api/thoughts/<thoughtId>
router
  .route('/:id')
  .get(getOneThought)
  .post(createThought)
  .put(updateThought)
  .delete(removeThought)


module.exports = router;
