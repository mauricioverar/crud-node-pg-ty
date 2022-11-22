import { Request, Response } from 'express';
import { pool } from '../db';

export const getUsuarios = async (req: Request, res: Response): Promise<Response> => { // ty retornará una resp basada en una promesa
  try {
    const [rows] = await
      pool.query('SELECT * FROM users ORDER BY id ASC'); // cuando termine la promesa(tiempo demora respuesta), responder, sea ok o err
      console.log(rows)
    return res.status(200).json(rows);
    // res.send('users')
  } catch (e) { // atrapar error, si ocurre, para q prog no caiga
    console.log(e);
    return res.status(500).json('Internal Server error');
  }
};

export const getUsuarioById = async (req: Request, res: Response): Promise<Response> => {
  console.log('getUsuarioById')
  const id = parseInt(req.params.id);
  console.log('id: ',id)
  // const [response] = await pool.query('SELECT * FROM users WHERE id = $1', [id]) // mysql no usa $1
  const [response] = await pool.query(`SELECT * FROM users WHERE id = ${id}`, [id]);
  console.log(req.params.id)
  return res.json(response);
};

export const createUsuario = async (req: Request, res: Response) => {
  console.log('createUsuario')
  const { name, email } = req.body;
  const response = await pool.query(`INSERT INTO users (name, email) VALUES ("${name}", "${email}")`, [name, email]);
  console.log(name, email)
  console.log(response)
  res.json({
    message: 'User Added successfully',
    body: {
      user: { name, email }
    }
  })
};

export const updateUsuario = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const response = await pool.query(`UPDATE users SET name = "${name}", email = "${email}" WHERE id = ${id}`, [
    name,
    email,
    id
  ]);
  console.log(id)
  res.json('User Updated Successfully');
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await pool.query(`DELETE FROM users where id = ${id}`, [
    id
  ]);
  res.json(`User ${id} deleted Successfully`);
};

export const ping = async (req: Request, res: Response) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  console.log(result)
  res.json(result)
}