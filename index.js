const express=require("express");
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://bassantmohie:bassantmohie76@nodejsproject.fztgg.mongodb.net/").then(()=>{
console.log("successfully");

})
.catch((error)=>{
  console.log("erorr",error);
  
})
const movie =require("./models/movie");
const tvSeries=require("./models/tvSeries");
const singUp=require("./models/signUp");
const app=express();
app.use(express.json())


// mongodb+srv://bassantmohie:bassantmohie76@nodejsproject.fztgg.mongodb.net/

app.post("/movies",async(req,res)=>{

  const newMovies= new movie()
  newMovies.adult=req.body.adult;
  newMovies.backdrop_path=req.body.backdrop_path;
  newMovies.original_language=req.body.original_language;
  newMovies.original_title=req.body.original_title;
  newMovies.overview=req.body.overview;
  newMovies.popularity=req.body.popularity;
  newMovies.poster_path=req.body.poster_path;
  newMovies.release_date=req.body.release_date;
  newMovies.title=req.body.title;
  newMovies.vote_average=req.body.vote_average;
  newMovies.vote_count=req.body.vote_count;
  newMovies.category=req.body.category;
  await  newMovies.save();
  res.send("true")
})
app.post("/addList", async (req, res) => {
  const movieList = req.body;
  console.log(movieList);
 await movie.insertMany(movieList);
});
app.post("/series",async(req,res)=>{

  const newSeries= new tvSeries()
  newMovies.adult=req.body.adult;
  newMovies.backdrop_path=req.body.backdrop_path;
  newMovies.original_language=req.body.original_language;
  newMovies.original_title=req.body.original_title;
  newMovies.overview=req.body.overview;
  newMovies.popularity=req.body.popularity;
  newMovies.poster_path=req.body.poster_path;
  newMovies.release_date=req.body.release_date;
  newMovies.title=req.body.title;
  newMovies.vote_average=req.body.vote_average;
  newMovies.vote_count=req.body.vote_count;
  newMovies.category=req.body.category;
  await  newSeries.save();
  res.send("true")
})

app.post("/addList2", async (req, res) => {
  const seriesList = req.body;
  console.log(seriesList);
 await tvSeries.insertMany(seriesList);
});

app.get("/movies",async(req,res)=>{
 const getMovies= await movie.find();
 res.json(getMovies)
});
app.get("/series",async(req,res)=>{
  const getSeries= await tvSeries.find();
  res.json(getSeries)
 });

app.get("/getMovie/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const moviefind = await movie.findById(id);
    res.json(moviefind);
  } catch (e) {
    console.log(e);
  }
});

app.get("/getTvSeries/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const tvSeriesFind = await tvSeries.findById(id);
    res.json(tvSeriesFind);
  } catch (e) {
    console.log(e);
  }
});
 

app.post("/singUp",async(req,res)=>{
   const user=new singUp();
   user.name=req.body.name;
   user.email=req.body.email;
   user.password=req.body.password;
   const userLogin=await singUp.find();
   const check=  userLogin.filter((element)=>{
    return element.email==req.body.email;
    
   })
  if(check.length==0){
    await user.save()
    res.send("true")
  }
  else{
    res.send("this email already exist")
  }
})
app.get("/logIn",async(req,res)=>{
  const user=new singUp();
  const userLogin=await singUp.find();
 const check=  userLogin.filter((element)=>{
  return element.email==req.body.email&&element.password==req.body.password;
  
 })
if(check.length==1){
  res.json(check[0])
}
else{
  res.send("email or password maybe wrong")
}

})


app.listen(3000,()=>{
  console.log("im listening in port 3000");
  

});

