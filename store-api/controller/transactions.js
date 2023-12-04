import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/Lazado', {
    useNewUrlParser: true, 
    useUnifiedTopology: true  
}).then(() => console.log("Connected to the database"))
.catch(err => console.log("Refused to connect", err));

const Transaction = mongoose.model('transactions', {
    userId: Number,
    transactionId: String,
    productId: Number,
});

const save_transaction = async (req, res) => {
    try{
        const { userId, transactionId, productId } = req.body;
        const newTransact = new Transaction({
            userId: userId,
            transactionId: transactionId,
            productId: productId,
        });
        console.log("Cart saved");
        await newTransact.save();
        return res.status(200).json({ inserted: true });
    }catch(err){
        return res.status(400).json({ inserted: false });
    }
}

const get_transactions = async (req, res) => {
    const getTransact = await Transaction.find({});
    res.send(getTransact);
};

const remove_transaction = async (req, res) => {
    try {
        const { transactionId } = req.body;
        const existingTransaction = await Transaction.findOne({ transactionId });

        if (!existingTransaction) {
            return res.status(404).json({ deleted: false, message: 'Transaction not found' });
        }

        await Transaction.deleteOne({ transactionId });
        return res.status(200).json({ deleted: true });
    } catch (err) {
        console.error('Error removing transaction:', err);
        return res.status(500).json({ deleted: false, error: err.message });
    }
};

export { Transaction, save_transaction, get_transactions, remove_transaction };