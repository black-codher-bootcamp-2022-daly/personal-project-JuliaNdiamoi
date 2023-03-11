const { ObjectId } = require('mongodb');
/**
 * @param {import('express').Express} app - The Express instance
 * @param {import('mongodb').Db} db - The Db instance.
 */
const ordersRoutes = (app, db) => {
  /**
   * Retrieves the profiles collection from Mongo db
   * @returns Collection<Document>s
   */
  const ordersCollection = () => db.collection("orders");
 
  app.post(`/api/order`, async (req, res) => {
    const order = await ordersCollection().insertOne(req.body);

    return res.status(201).send({
      error: false,
      order,
    });
  });

 

module.exports = ordersRoutes;