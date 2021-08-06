import app from './app';

if (process.env.NODE_ENV != 'production') app.listen(3333);
else app.listen(process.env.PORT)
