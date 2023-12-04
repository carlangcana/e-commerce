import * as products from './controller/products.js';
import * as transact from './controller/transactions.js';
import * as orders from './controller/orders.js';

const router = (app) => {
    // Products
    app.post('/save-product', products.save_product);
    app.get('/get-products', products.get_products);

    // Carts or Transactions
    app.post('/save-transact', transact.save_transaction);
    app.get('/get-transact', transact.get_transactions);
    app.post('/remove-transact', transact.remove_transaction);

    // Orders (for Query only)
    app.get('/get-orders', orders.get_orders);
};

export default router;
