import mongoose from 'mongoose';


const DBConnection = async () => {
    const MONGODB_URI = `mongodb+srv://Anshu742:Anshu04@file-sharing.e0bmrbt.mongodb.net/?retryWrites=true&w=majority&appName=File-sharing`;
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;