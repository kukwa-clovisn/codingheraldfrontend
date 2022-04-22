const userModel = require('../models/users');

module.exports = {
     filterUser: () => {

          userModel.findOne({
               _id: req.params.id
          }, (err, data) => {

               if (err) {

                    res.status(404).json(err)
                    return console.log(err)
               }

               if (!data) {

                    res.status(200).json({
                         msg: 'no data found',
                         data: []
                    })

                    return console.log('no data found')
               }

               res.status(200).json(data);

               return console.log(data);

          }).select('-password')

     }
}