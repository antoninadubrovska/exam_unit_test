import { isCartItem, isProduct } from "../validation.js"
// Examples of a valid product and a valid cart item. You may use these when testing below.
const exampleProduct = {
	id: 1001,
	name: 'Badanka',
	price: 500
}

const exampleCartObject = {
	id: 2001,
	amount: 1,
	item: exampleProduct
}

// Group tests using "describe"
describe('Validation - product', () => {



	// Använd en "test" eller "it" (de är synonymer) för varje testfall
	/* Exempel på syntax:
	test('beskriv testfallet', () => {
		// här skriver du testkoden
		// avsluta alltid med "expect"
	})
	*/


	// ---------------------------------------------
	// Följande testfall ska du implementera. Det är tillåtet att använda Joi. Gör i så fall ett schema för varje sorts objekt du vill kunna validera. Du får även ändra texten om du vill skriva på svenska i stället för engelska.
	// (Ta bort dessa kommentarer när du är klar)



	// 1. it returns true for a valid cart object

	test('returns true for valid cart object', () => {
		expect(isCartItem(exampleCartObject)).toBe(true)
	})

	// 2. it returns false for invalid cart objects

	test('returns false for invalid cart object', () => {
		const invalid = {
			id: "wrong",   // should be number
			amount: "wrong", // should be number
			// item: {
			// 	id: 1001,
			// 	name: 'Badanka',
			// 	price: 500
			// }
			item: {
				id: "duck",
				name: "pink"
			  }
		}


		expect(isCartItem(invalid)).toBe(false)

	})






	// 3. it returns true for a valid product

	  test('returns true for valid product', () => {
		expect(isProduct(exampleProduct)).toBe(true)
	  })

	// 4. it returns false for invalid (cart objects) - product

	test('returns false for invalid product', () => {
		const invalid = {
		  id: "wrong",   // should be number
		  name: 'Badanka'
		  // missing price
		}

		expect(isProduct(invalid)).toBe(false)
	  })


})
