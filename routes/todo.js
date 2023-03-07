const express = require ('express');
const router = express.Router();

const {
    create,
    all,
    del,
    completed
} = require('../controllers/todo');



router.post('/create' , create);
router.get('/all' , all);
router.delete('/delete/:id' , del);
router.put('/completed/:id' , completed);






module.exports = router;