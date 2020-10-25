'use strict';
const catalogList = document.querySelector('.catalog__list');
const catalogListItem = document.querySelector('.catalog__list-item.active');
const catalogHeading = document.querySelector('.catalog__heading');
const orderInput = document.querySelector('.order__input');

const counterLeft = document.querySelector('.counter__left');
const counterRight = document.querySelector('.counter__right');

const closeList = () => {
	catalogList.classList.toggle('active');
};

const openSubCatalog = (e) => {
	e.preventDefault();

	if (!e.target.closest('catalog__list-link')) {
		const item = document.querySelector('.catalog__list-item.active ul');

		item.style.display = 'block';
	}
};

const addCount = () => {
	if (orderInput.value > 1) orderInput.value--;
};

const removeCount = () => {
	if (orderInput.value < 10) orderInput.value++;
};

catalogHeading.addEventListener('click', closeList);
catalogListItem.addEventListener('click', openSubCatalog);

counterLeft.addEventListener('click', addCount);
counterRight.addEventListener('click', removeCount);
