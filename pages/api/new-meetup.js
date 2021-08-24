// only run on server side
import{ MongoClient } from 'mongodb'

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.BODY;

    const { title, image, address, description } = data;
  }
}

export default handler;
