// Photo Constructor Function
function Photo(fileName, location){
  this.fileName = fileName;
  this.location = location;
};
// Album Constructor Function
function Album(){
  this.pictures = [];
};

// The function that will add elements to an array
Album.prototype.addPhotos = function (photo) {
    this.pictures.push(photo);
};
//The function that will list all photos in the album
Album.prototype.listPhotos = function() {
   for (var i = 0; i <this.pictures.length; i++ ) {
     console.log(this.pictures[i]);
   };
};
// The function that will get a photo in the order it was added
Album.prototype.getPhotos = function(index) {
   console.log(this.pictures[index - 1]);
};

// Instantiated Album
var albumOne = new Album();
// Instantiated Photo
var photoOne = new Photo( "Christmas Morning","Home");
var photoTwo = new Photo ("Halloween Time", "Haunted Lake");
var photoThree = new Photo ("First Day of Camp", "Weird School");

// My logs to demonstrate it is working
console.log(albumOne.addPhotos(photoOne));
console.log(albumOne.addPhotos(photoTwo));
console.log(albumOne.addPhotos(photoThree));
console.log(albumOne.pictures.length)

albumOne.listPhotos();
albumOne.getPhotos(1);
