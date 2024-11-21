import express from 'express';
const app = express();

app.get('/api/rates', async (req, res) => {
  try {
    const response = await fetch('https://m.bcc.kz/mb/!pkg_w_mb_main.operation?action=GET_RATE');
    const data = await response.json();
    res.set('Access-Control-Allow-Origin', '*');
    res.json(data);
  } catch (error) {
    res.status(500).send('Ошибка сервера');
  }
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});
