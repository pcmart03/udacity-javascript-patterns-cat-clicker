// My Model
var model = {
  currentCat: null,
  cats: [{
      clicks: 0,
      name: "Fluffy",
      image: 'images/kitten.jpg',
      altText: 'A fluffy kitty',
      display: 'none'
    },
    {
      clicks: 0,
      name: "Scaredy",
      image: 'images/kitten2.jpg',
      altText: 'A kitten in hiding',
      display: 'none'
    },
    {
      clicks: 0,
      name: "Freaked",
      image: 'images/kitten3.jpg',
      altText: "A kitten that is a little freaked out",
      display: 'none'
    },
    {
      clicks: 0,
      name: "Crazy",
      image: 'images/kitten4.jpg',
      altText: 'A kitten with crazy eyes',
      display: 'none'
    },
    {
      clicks: 0,
      name: "Ralph",
      image: 'images/kitten5.jpg',
      altText: 'A kitten named Ralph',
      display: 'none'
    }
  ]
};

//My Octopus

var octopus = {
  init: function() {
    model.currentCat = model.cats[0];

    catListView.init();
    catView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },
  clickCounter: function() {
    model.currentCat.clicks++;
    catView.render();
  },

  showAdmin: function(){
    model.currentCat.display='block';
    catView.render();
  },

  hideAdmin: function(){
    model.currentCat.display='none';
    catView.render();
  },

  updateCat: function(newname, newimage, newclicks) {
    model.currentCat.name = newname;
    model.currentCat.image = newimage;
    model.currentCat.clicks = newclicks;
    catView.render();
    catListView.render();
  }
};

// My View
var catView = {
  init: function() {
  this.catInfo = document.getElementById('cat-view');
  this.catName = document.getElementById('cat-name');
  this.catImage = document.getElementById('cat-image');
  this.catCounts = document.getElementById('cat-clicks');
  this.adminForm = document.getElementById('adminview');
  this.adminbtn = document.getElementById('admin');
  this.cancelbtn = document.getElementById('cancel');
  this.savebtn = document.getElementById('save');

  this.catImage.addEventListener('click', function(){
    octopus.clickCounter();
  });
  this.adminbtn.addEventListener('click', function(){
    octopus.showAdmin();
  });
  this.cancelbtn.addEventListener('click', function(){
    octopus.hideAdmin();
  });
  this.savebtn.addEventListener('click', function(){
    var newName = document.getElementById('newName').value;
    var newImage = document.getElementById('newImage').value;
    var newClicks = document.getElementById('newclicks').value;
    octopus.updateCat(newName, newImage, newClicks);
  });
  this.render();
},
  render: function(){
    var currentCat = octopus.getCurrentCat();
    this.catName.textContent = currentCat.name;
    this.catImage.src = currentCat.image;
    this.catImage.alt = currentCat.altText;
    this.catCounts.textContent = currentCat.clicks;
    this.adminForm.style.display = currentCat.display;
  },

};

var catListView = {
  init: function(){
    this.catList = document.getElementById('cat-list');
    this.render();
  },

  render: function() {
    var cat, elem, i;
    var cats = octopus.getCats();

    this.catList.innerHTML = "";
    for (i =0; i<cats.length; i++) {
      cat = cats[i];
      elem = document.createElement('li');
      elem.textContent = cat.name;

      elem.addEventListener('click', (function(catCopy) {
        return function(){
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));

      this.catList.appendChild(elem);
    }

  },
    update: function(){
      var name = document.getElementById('newName').value;
      octopus.updateCatName(name);
    }

};

octopus.init();
