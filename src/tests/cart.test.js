// importera här
import {
	addToCart, getCartItemCount, clearCart, getItem, getTotalCartValue, removeFromCart, editCart } from "../cart"


describe('Cart', () => {
	beforeEach(() => {
		// Denna kod körs före varje test. Det är för att rensa kundvagnen, så inte saker ligger kvar från föregående test.
		clearCart()
	})


	// -------------------------------------------------- //
	// Skriv dina testfall här

	// Du får ett test att börja med
	test('addToCart lägger till en ny produkt i kundvagnen', () => {
		const itemCountBefore = getCartItemCount()
		const input = { id: 1002, name: 'Vattenpistol', price: 40 }

		// addToCart returnerar inget - den påverkar kundvagnen
		// vi behöver använda getCartItemCount för att se om det har lagts till en ny produkt i kundvagnen
		addToCart(input)
		const itemCountAfter = getCartItemCount()

		expect(itemCountAfter).toBe(itemCountBefore + 1)
	})


	// clearCart
	test('clearCart tömmer kundvagnen', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}

		addToCart(product)
		clearCart()

		expect(getCartItemCount()).toBe(0)
	})

	// Two items of the same product = 1 cart item.
	test('getCartItemCount returnerar antal olika produkter', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}

		addToCart(product)
		addToCart(product)

		expect(getCartItemCount()).toBe(1)
	})

	// item exists, correct item returned
	test('getItem returnerar rätt cart item', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}

		addToCart(product)

		const result = getItem(0)

		expect(result.item.name).toBe('Badanka')
	})


	test('getTotalCartValue returnerar korrekt totalpris', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}

		addToCart(product)
		addToCart(product)

		const total = getTotalCartValue()

		expect(total).toBe(1000)
	})

	test('removeFromCart tar bort en produkt från kundvagnen', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}

		addToCart(product)

		// test both: return value + state change
		const result = removeFromCart(2002)

		expect(result).toBe(true)
		expect(getCartItemCount()).toBe(0)
	})



	test('editCart ändrar antal produkter i kundvagnen', () => {
		const product = {
			id: 1001,
			name: 'Badanka',
			price: 500
		}

		addToCart(product)

		editCart(2002, { amount: 5 })

		const updatedItem = getItem(0)

		expect(updatedItem.amount).toBe(5)
	})
	// -------------------------------------------------- //
})
