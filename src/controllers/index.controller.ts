import { Request, Response } from 'express';
import { pool } from '../database';
import { QueryResult } from 'pg';

export const getUsers = async (req: Request, res: Response): Promise<Response> => { // ty retornará una resp basada en una promesa
  try {
    const response: QueryResult = await
      pool.query('SELECT * FROM users ORDER BY id ASC'); // cuando termine la promesa(tiempo demora respuesta), responder, sea ok o err
      console.log(response.rows)
    return res.status(200).json(response.rows);
    // res.send('users')
  } catch (e) { // atrapar error, si ocurre, para q prog no caiga
    console.log(e);
    return res.status(500).json('Internal Server error');
  }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id);
  const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  console.log(req.params.id)
  return res.json(response.rows);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
  console.log(name, email)
  res.json({
    message: 'User Added successfully',
    body: {
      user: { name, email }
    }
  })
};

export const updateUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
    name,
    email,
    id
  ]);
  console.log(id)
  res.json('User Updated Successfully');
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await pool.query('DELETE FROM users where id = $1', [
    id
  ]);
  res.json(`User ${id} deleted Successfully`);
};