import {Product} from './product';

describe('Product toString() Test', function() {
    let testProduct;

    beforeEach(function() {
        testProduct = new Product();
    });

    afterEach (function() {
        testProduct = undefined;
    });

    it('calls the getName() function', function() {
        spyOn(testProduct, 'getName');
        testProduct.toString();
        expect(testProduct.getName).toHaveBeenCalledTimes(1);
    });
});
