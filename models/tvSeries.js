const mongoose=require("mongoose")
const Schema=mongoose.Schema
const tvSeriesSchema=new Schema({
adult: String,
backdrop_path: String,
original_language:String,
original_title: String,
overview: String,
popularity: Number,
poster_path: String,
release_date: String,
title: String,
vote_average: Number,
vote_count: Number,
category:String,
});

const tvSeries=mongoose.model("series",tvSeriesSchema);
module.exports= tvSeries;