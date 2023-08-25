import { Router } from "express";
import { getUsers, getUserById, createUser } from "../app/controllers/index.controller";

const router = Router();

router.get('/test', (req, res) => {
    res.send("Hello world!")
});

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
// router.put('/users/:id', getUsers);
// router.delete('/users/:id', getUsers);

export default router;