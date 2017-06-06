const mongoose = require('mongoose');
const Cafe = require('../models/Cafe');

exports.getCafe = (req, res) => {
	Cafe.find()
		.then((cafes) => {
			res.render('index', {
				title: 'Cafes',
				cafes: cafes
			})
		})
};

exports.editCafe = (req, res) => {
	Cafe.findOne({ _id: req.params.id })
		.then(cafe => {
			res.render('editCafe', {cafe: cafe});
		})
}

exports.createCafe = (req, res) => {
	// console.log('reqy.body is:', req.body);
	const data = req.query.cafe_data;
	let cafe = new Cafe();
	cafe.data = data;
	cafe.save()
		.then(() => {
			res.redirect('/')
		})
	}

exports.createCafe = (req, res) => {
	// console.log('reqy.body is:', req.body);
	const v_data = req.query.v;
	const name_data = req.query.name;
	const address_data = req.query.address;

	let cafe = new Cafe();
	cafe.v = v_data;
	cafe.name= name_data;
	cafe.address = address_data;
	cafe.save()
		.then(() => {
			res.redirect('/')
		})
	}
	// const cafe_name = req.query.data.name

exports.updateCafe = (req, res) => {
	// console.log('reqy.body:', req.body);
	Cafe.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true // returns new cafe
	})
		.then(cafe => {
			res.redirect('/')
		})
	}
