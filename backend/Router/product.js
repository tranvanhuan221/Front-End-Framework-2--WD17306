import express from "express"
import { create,getAll,getOne,remove,update } from "../controllers/product";
const router = express.Router()
router.post('/product',create);
router.get('/product',getAll);
router.get('/product/:id',getOne);
router.delete('/product/:id',remove);
router.put('/product/:id',update);
export default router;