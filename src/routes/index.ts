import {Router} from 'express';
const router = Router();

// import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/index.controller'

import { getUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario, ping } from '../controllers/mysql.controller'

router.get('/', (req,res) => res.send('bienvenido al servidor'))
router.get('/test', (req,res) => res.send('hola'));

/* router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser); */

router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuarioById);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id', updateUsuario)
router.delete('/usuarios/:id', deleteUsuario);

router.get('/ping', ping)

export default router;