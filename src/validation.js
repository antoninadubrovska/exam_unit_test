
import Joi from "joi"
// Remember to use RED, GREEN, REFACTOR
// 1. pick one test case in validation.test.js
// 2. write the code, verify that the test is RED
// 3. write code in this file so that the test case becomes GREEN
// 4. refactor as neccessary before you move on to the next
// 5. repeat


// product schema
const productSchema = Joi.object({
	id: Joi.number().required(),
	name: Joi.string().required(),
	price: Joi.number().required()
})

// cart item schema
const cartItemSchema = Joi.object({
	id: Joi.number().required(),
	amount: Joi.number().required(),
	item: productSchema
})


// implementing schema validation for cart:
function isCartItem(maybeCartItem) {
	const { error } = cartItemSchema.validate(maybeCartItem)
	return !error


}

// implementing schema validation for product:

function isProduct(maybeProduct) {
	const { error } = productSchema.validate(maybeProduct)
	return !error
}


export { isCartItem, isProduct }
