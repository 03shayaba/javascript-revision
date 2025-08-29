var movie = {
    name:"bahubali",
    year:2016,
    hero:"bahubali",
    getinfo: function(){
        console.log("released year " + this.year);
        console.log("hero name " + this.hero);
        console.log("movie name" + this.name);
    }
}

movie.getinfo();