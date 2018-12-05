import { Router } from 'express';
import Poll from '../../models/Poll';

export default Router()
  .post('/', (req, res, next) => {
    const { title, options } = req.body;

    Poll.create({ title, options })
      .then(poll => res.json(poll))
      .catch(next);
  })

  .get('/', (req, res) => {
    Poll
      .find()
      .lean()
      .then(polls => res.json(polls));
  })