const User = require('../models/User');
const Kudos = require('../models/Kudos');

module.exports = function (app) {
    app.get('/api/kudos', function (req, res) {
        Kudos.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (error) {
                res.json({ error: error });
            });
    });

    app.get('/api/users', function (req, res) {
        User.find({})
            .then(function (data) {
                res.json(data);
            })
            .catch(function (error) {
                res.json({ error: error });
            });
    });

    app.post('/api/users', function (req, res) {
        // for (i=0;i<UserJSON.length;i++) {
        //     User.create(UserJSON[i])
        
        User.create(req.body)
          .then(function (data) {
            res.json(data);
          })
          .catch(function (err) {
            res.json(err);
          });
        // }
      });

    app.post('/api/kudos', function (req, res) {
        Kudos.create(req.body)
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    })

    /*
    app.post('/api/seed', function (req, res) {
        for (i=0;i<UserJSON.length;i++) {
            User.create(UserJSON[i])
        };
        for (i=0;i<KudosJSON.length;i++) {
            Kudos.create(KudosJSON[i])
        };
                    // .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    // }).then(()=>{
        mongoose.connection.db.dropDatabase();
    
*/
        
        
}