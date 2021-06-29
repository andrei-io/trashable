// Here the use of an ORM makes things easier.
// This object has a many to one relationship to the region id
const express = require('express');

const router = express.Router();

const { CityRepoDB } = require('../../../repo/city');

router.get('/', async (req, res, next) => {
	try {
		// auto-filter(dont implement any filtering manually,)
		// TODO: is this secure?
		const queryParams = req.query;
		const cities = await CityRepoDB.query()
			.where(queryParams)
			.where('deleted_at', null);

		res.json(cities);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const city = await CityRepoDB.query()
			.select('id', 'name', 'region_id', 'updated_at', 'created_at')
			.where('deleted_at', null)
			.findById(req.params.id);

		res.json(city);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
