const items=[
{Name:'Sandwich',Price:'Rs.99.00',Active:'Yes',Date_Of_Launch:'09/06/2017',Category:'Main Course',Free_Delivery:'Yes'},
{Name:'Masal dhosa',Price:'Rs.50.00',Active:'Yes',Date_Of_Launch:'29/08/2018',Category:'Main Course',Free_Delivery:'No'},
{Name:'Burger',Price:'Rs.129.00',Active:'Yes',Date_Of_Launch:'15/12/2022',Category:'Main Course',Free_Delivery:'Yes'},
{Name:'Ice Cream',Price:'Rs.35.00',Active:'no',Date_Of_Launch:'14/03/2017',Category:'Dessert',Free_Delivery:'No'},
{Name:'French Fries',Price:'Rs.57.00',Active:'Yes',Date_Of_Launch:'04/11/2019',Category:'Starters',Free_Delivery:'Yes'}
];


const renderProducts = function(items) {
	let tabEl = document.querySelector("#prod-tab");

	items.forEach(function(item) {

		let trEl1 = document.createElement("tr");

		let tdEl1 = document.createElement("td");

		tdEl1.textContent = item.Name;
		
		tdEl1.setAttribute('class','tname');

		trEl1.appendChild(tdEl1);

		let tdEl2 = document.createElement("td");

		tdEl2.textContent = item.Price;
		
		tdEl2.setAttribute('class','tprice');

		trEl1.appendChild(tdEl2);

		let tdEl3 = document.createElement("td");

		tdEl3.textContent = item.Active;
		
		tdEl3.setAttribute('class','tactive');

		trEl1.appendChild(tdEl3);
		let tdEl4 = document.createElement("td");

		tdEl4.textContent = item.Date_Of_Launch;
		
		tdEl4.setAttribute('class','tdol');

		trEl1.appendChild(tdEl4);
		let tdEl5 = document.createElement("td");

		tdEl5.textContent = item.Category;
		
		tdEl5.setAttribute('class','tcategory');

		trEl1.appendChild(tdEl5);
		let tdEl6 = document.createElement("td");

		tdEl6.textContent = item.Free_Delivery;
		
		tdEl6.setAttribute('class','tfreedelivery');

		trEl1.appendChild(tdEl6);

		tabEl.appendChild(trEl1);

		let tdEl7 = document.createElement("td");

		let editLink = document.createElement('a');

		editLink.setAttribute('id', 'link1');

		editLink.href = "edit-menu.html";

		editLink.textContent = "Edit"
		
		tdEl7.setAttribute('class','taction');

		tdEl7.appendChild(editLink);

		trEl1.appendChild(tdEl7);

	})
	document.querySelector('#link1').addEventListener('click', function() {

		console.log(item);

	})

}

const renderProductsCustomer = function(items) {
	let tabEl = document.querySelector("#cust-tab");

	items.forEach(function(item) {

		let trEl1 = document.createElement("tr");

		let tdEl1 = document.createElement("td");

		tdEl1.textContent = item.Name;
		
		tdEl1.setAttribute('class','tname');

		trEl1.appendChild(tdEl1);

		let tdEl2 = document.createElement("td");

		tdEl2.textContent = item.Free_Delivery;
		
		tdEl2.setAttribute('class','tfreedelivery');

		trEl1.appendChild(tdEl2);

		let tdEl3 = document.createElement("td");

		tdEl3.textContent = item.Price;
		
		tdEl3.setAttribute('class','tprice');

		trEl1.appendChild(tdEl3);

		let tdEl4 = document.createElement("td");

		tdEl4.textContent = item.Category;
		
		tdEl4.setAttribute('class','tcategory');

		trEl1.appendChild(tdEl4);

		tabEl.appendChild(trEl1);

		let tdEl7 = document.createElement("td");

		let editLink = document.createElement('a');

		editLink.setAttribute('id', 'link1');

		editLink.href = "menu-item-list-customer-notification.html";

		editLink.textContent = "Add to cart"
		
		tdEl7.setAttribute('class','taction');

		tdEl7.appendChild(editLink);

		trEl1.appendChild(tdEl7);

	})
	document.querySelector('#link1').addEventListener('click', function() {

		console.log(item);

	})

}

const renderProductsDelete = function(items) {
	let tabEl = document.querySelector("#cust-tab");

	items.forEach(function(item) {

		let trEl1 = document.createElement("tr");

		let tdEl1 = document.createElement("td");

		tdEl1.textContent = item.Name;
		
		tdEl1.setAttribute('class','tname');

		trEl1.appendChild(tdEl1);

		let tdEl2 = document.createElement("td");

		tdEl2.textContent = item.Free_Delivery;
		
		tdEl2.setAttribute('class','tfreedelivery');

		trEl1.appendChild(tdEl2);

		let tdEl3 = document.createElement("td");

		tdEl3.textContent = item.Price;
		
		tdEl3.setAttribute('class','tprice');

		trEl1.appendChild(tdEl3);

		tabEl.appendChild(trEl1);

		let tdEl7 = document.createElement("td");

		let editLink = document.createElement('a');

		editLink.setAttribute('id', 'link1');

		editLink.href = "cart-notification.html";

		editLink.textContent = "Delete"
		
		tdEl7.setAttribute('class','taction');

		tdEl7.appendChild(editLink);

		trEl1.appendChild(tdEl7);

	})
	document.querySelector('#link1').addEventListener('click', function() {

		console.log(item);

	})

}

const renderProductsCustomerNot = function(items) {
	let tabEl = document.querySelector("#cust-tab");

	items.forEach(function(item) {

		let trEl1 = document.createElement("tr");

		let tdEl1 = document.createElement("td");

		tdEl1.textContent = item.Name;
		
		tdEl1.setAttribute('class','tname');

		trEl1.appendChild(tdEl1);

		let tdEl2 = document.createElement("td");

		tdEl2.textContent = item.Free_Delivery;
		
		tdEl2.setAttribute('class','tfreedelivery');

		trEl1.appendChild(tdEl2);

		let tdEl3 = document.createElement("td");

		tdEl3.textContent = item.Price;
		
		tdEl3.setAttribute('class','tprice');

		trEl1.appendChild(tdEl3);

		tabEl.appendChild(trEl1);

		let tdEl7 = document.createElement("td");

		let editLink = document.createElement('a');

		editLink.setAttribute('id', 'link1');

		editLink.href = "cart-notification.html";

		editLink.textContent = "Delete"
		
		tdEl7.setAttribute('class','taction');

		tdEl7.appendChild(editLink);

		trEl1.appendChild(tdEl7);

	})
	document.querySelector('#link1').addEventListener('click', function() {

		console.log(item);

	})

}

let check = document.querySelector('#id').value;
if (check == 'cartnotification')
	renderProductsCustomerNot(items);
else if(check == 'menuitemlistcustomer' || check == 'menuitemlistcustomernotification')
	renderProductsCustomer(items);
else if (check == 'cart')
	renderProductsDelete(items);
else if (check == 'home')
	renderProducts(items);
