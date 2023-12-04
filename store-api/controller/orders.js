import mongoose from 'mongoose';
import { Transaction } from './transactions.js';

await mongoose.connect('mongodb://127.0.0.1:27017/Lazado', {
    useNewUrlParser: true, 
    useUnifiedTopology: true  
}).then(() => console.log("Connected to the database"))
.catch(err => console.log("Refused to connect", err));

const get_orders = async (req, res) => {
    try {
        const getOrders = await Transaction.aggregate([
            {
                $lookup: {
                    from: 'products', 
                    localField: 'productId', 
                    foreignField: 'productId', 
                    as: 'orderDetails' 
                }
            },
            {
                $unwind: '$orderDetails' 
            }
        ]);
        res.send(getOrders);
    } catch (err) {
        console.error('Error fetching orders:', err);
        res.status(500).json({ error: err.message });
    }
};

export { get_orders }