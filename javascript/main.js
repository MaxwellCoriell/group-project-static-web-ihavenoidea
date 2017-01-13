var ducks = [
	{
	name: "Angel Duck",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis natus dignissimos saepe accusantium blanditiis iure, odit, mollitia repudiandae tenetur rem officiis, animi necessitatibus alias beatae nemo laudantium exercitationem magnam ratione!",
	price: "Please Contact Us for Pricing",
	URL: "img/angel-duck.jpg"
	},
	{
	name: "Firefighter Duck",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis natus dignissimos saepe accusantium blanditiis iure, odit, mollitia repudiandae tenetur rem officiis, animi necessitatibus alias beatae nemo laudantium exercitationem magnam ratione!",
	price: "Please Contact Us for Pricing",
	URL: "img/firefighter-duck.jpg"
	},
	{
	name: "German Duck",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis natus dignissimos saepe accusantium blanditiis iure, odit, mollitia repudiandae tenetur rem officiis, animi necessitatibus alias beatae nemo laudantium exercitationem magnam ratione!",
	price: "Please Contact Us for Pricing",
	URL: "img/german-duck.jpg"
	},
	{
	name: "Nurse Duck",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis natus dignissimos saepe accusantium blanditiis iure, odit, mollitia repudiandae tenetur rem officiis, animi necessitatibus alias beatae nemo laudantium exercitationem magnam ratione!",
	price: "Please Contact Us for Pricing",
	URL: "img/nurse-duck.jpg"
	},
	{
	name: "Scuba Duck",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis natus dignissimos saepe accusantium blanditiis iure, odit, mollitia repudiandae tenetur rem officiis, animi necessitatibus alias beatae nemo laudantium exercitationem magnam ratione!",
	price: "Please Contact Us for Pricing",
	URL: "img/scuba-duck.jpg"
	},
	{
	name: "Soccer Duck",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis natus dignissimos saepe accusantium blanditiis iure, odit, mollitia repudiandae tenetur rem officiis, animi necessitatibus alias beatae nemo laudantium exercitationem magnam ratione!",
	price: "Please Contact Us for Pricing",
	URL: "img/soccer-duck.jpg"
	},
	{
	name: "Brenda Duck",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis natus dignissimos saepe accusantium blanditiis iure, odit, mollitia repudiandae tenetur rem officiis, animi necessitatibus alias beatae nemo laudantium exercitationem magnam ratione!",
	price: "Please Contact Us for Pricing",
	URL: "img/brendaduck.png"
	},
	{
	name: "Variety Pack",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis natus dignissimos saepe accusantium blanditiis iure, odit, mollitia repudiandae tenetur rem officiis, animi necessitatibus alias beatae nemo laudantium exercitationem magnam ratione!",
	price: "Please Contact Us for Pricing",
	URL: "img/ducks-in-a-row.jpg"
	}
];

for (var i = 0; i < ducks.length; i++) {
  var card = document.getElementById("productCard" + i);
  var duckName = "<h3>" + ducks[i].name + "</h3";
  card.innerHTML += duckName;
  var duckImage = '<img src="' + ducks[i].URL + '">';
  card.innerHTML += duckImage;
  var duckDescription = "<p>" + ducks[i].description + "</p>";
  card.innerHTML += duckDescription;
  var duckPrice = "<p>" + ducks[i].price + "</p>";
  card.innerHTML += duckPrice;
}