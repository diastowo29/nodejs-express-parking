var express = require('express');
const { parking_table } = require('../sequelize')
var router = express.Router();

router.get('/', function(req, res, next) {
  parking_table.findAll().then(parking_all => {
  	res.status(200).send({
  		parking: parking_all
  	});
  });
});

router.get('/view', function(req, res, next) {
	res.render('parking', { title: 'Parking View' });
});

router.get('/update', function(req, res, next) {
	let area_id = req.query.area;
	let area_status = req.query.status;
	parking_table.findAll({
		where: {
			area_id: area_id
		}
	}).then(parking_table_find => {
		if (parking_table_find.length > 0) {
			parking_table.update({
				status: area_status
			},{
				where: {
					area_id: area_id
				}
			}).then(parking_table_update => {
				res.status(200).send({
					status: 'updated',
					parking: parking_table_update
				})
			})
		} else {
			parking_table.create({
				area_id: area_id,
				status: area_status,
			}).then(parking_table_insert => {
				res.status(200).send({
					status: 'created',
					parking: parking_table_insert
				})
			});
		}
	})
});

module.exports = router;
