/* eslint-disable camelcase */
/* eslint-disable max-len */
const { response } = require('express');
const {
  App_docs, Document, Doctor, User,
} = require('../../db/models');

class DocumentController {
  async getDocs(req, res) {
    const { id } = req.body;
    try {
      const docs_id = await App_docs.findAll({ where: { app_id: id }, include: { model: Document } });
      console.log('docs_id============================', docs_id);
      if (docs_id.length > 0) {
        res.json(docs_id);
      } else {
        res.json(null);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getAva(req, res) {
    const { id, isDoc } = req.body;
    // console.log(id, isDoc);
    try {
      if (id) {
        if (isDoc) {
          const doc = await Doctor.findOne({ where: { id } });
          res.json(doc.photo);
        } else {
          const user = await User.findOne({ where: { id } });
          res.json(user.photo);
        }
      } else {
        res.json(null);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new DocumentController();
