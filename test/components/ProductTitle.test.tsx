import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';

import { product1 } from '../data/products';

describe('ProductTitle', () => {

	test('debe mostrar correctamente el titulo personalizado', () => {
		const wrapper = renderer.create(
			<ProductTitle title="Custom Product" />
		)

		expect(wrapper.toJSON()).toMatchSnapshot();
	});

	test('debe mostrar el nombre del producto por defecto', () => {
		const wrapper = renderer.create(
			<ProductCard product={product1}>
				{
					() => (
						<ProductTitle />
					)
				}
			</ProductCard>
		)

		expect(wrapper.toJSON()).toMatchSnapshot();
	})

})