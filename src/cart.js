/*
Din uppgift:
- skriv testfall för alla funktionerna nedan i cart.test.js (RED)
- skriv kod här för att implementera funktionerna (GREEN)

Tips:
- börja med att identifiera VAD som ska testas.
- om du testar t.ex. removeFromCart får du använda addToCart i början av testet. Den kommer nämligen ha sina egna tester

*/
// function getCartItemCount() // done
// function getItem(index) // 1 out of 4
// function getTotalCartValue() // 1 out of 4
// function addToCart(newItem) // was partially done ..
// function removeFromCart(itemId) // mutation - done , returnes boolean, test both: return value + state change
// function editCart(itemId, newValues) // mutation
// function clearCart() // done
// -------------------------------------------------- //

import { isCartItem, isProduct } from "./validation.js"

let cart = []
let idCounter = 2002
// -------------------------------------------------- //


// Din kod börjar här
// Du får en funktion att börja med
// Kom ihåg att börja med testfallet - inte koden


function getCartItemCount() {
	// throw new Error('Not implemented yet')
	return cart.length
}


/**
 * Lägger till en "product" till kundvagnen.
 * @returns true om produkten lades till, false om parametern inte är ett korrekt objekt
 */
function addToCart(newItem) {
	if( !isProduct(newItem) ) {
		return false
	}

	const index = cart.findIndex(ci => ci.item.id === newItem.id)
	if( index === -1 ) {
		const cartItem = { id: idCounter, amount: 1, item: newItem }
		idCounter++
		cart.push(cartItem)
	} else {
		cart[index].amount++
	}
	return true
}

function getItem(index) {
	return cart[index]
}


function clearCart() {
	// throw new Error('Not implemented yet')
	cart = []
	// reset idCounter to initial value
	idCounter = 2002
}

function getTotalCartValue() {
	return cart.reduce((sum, cartItem) => {
		return sum + cartItem.item.price * cartItem.amount
	}, 0)
}

function removeFromCart(itemId) {
	const index = cart.findIndex(cartItem => cartItem.id === itemId)
	if (index === -1) {
		/// when item did not exist
		return false
	}
	cart.splice(index, 1)
	// when item existed
	return true
}

function editCart(itemId, newValues) {
	const index = cart.findIndex(existingItem => existingItem.id === itemId)
	if (index === -1) {
		/// when item did not exist
		return false
	}
	// new object creation to avaoid mutating the original object, though can accidentally overwrite protected fields
	cart[index] = { ...cart[index], ...newValues }

	return true
}


export { getCartItemCount, addToCart, clearCart, getItem, getTotalCartValue, removeFromCart, editCart }
