import app from './app';

const PORT = 8000;
const NODE_ENV = 'dev';

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}, ${NODE_ENV}`);
});
