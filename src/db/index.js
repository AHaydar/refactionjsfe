const path = require('path');
const NeDB = require('nedb');

const filename = path.resolve('src', 'db', 'db.json');

const db = new NeDB({
    filename: filename,
    autoload: true,
});

const data = {
    find: (query) => new Promise((resolve, reject) =>
        db.find(query)
        .exec((err, docs) => {
            if (err) reject(err);
            return resolve(docs);
        })
    )
}

module.exports = data;