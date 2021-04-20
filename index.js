let container = document.querySelector('.container');
let links = document.querySelectorAll('.nav');
let url = './content/home.html';

function loadData() {
	fetch(url)
		.then(function (response) {
			return response.text();
		})
		.then(function (data) {
			container.innerHTML = data;
        	})
        .catch(function (err) {
		console.log(err.name, err.message);
		});
}

loadData();

function handleSelection(e){
    e.preventDefault(); 
    let da = e.target;
    url = da.href;
    loadData();
    
};

for (let p = 0; p < links.length; p++){
links[p].addEventListener("click", handleSelection);
};
