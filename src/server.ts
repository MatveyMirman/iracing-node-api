import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import IracingClient from './iracing-client';

const app = express();

app.use(morgan('dev'));
app.use(cors());
const client = new IracingClient(
  process.env.EMAIL ?? '',
  process.env.PASSWORD ?? '',
  { shouldUseInterval: true }
);

app.get('/cars/assets', async (req, res) => {
  const assets = await client.getCarAssets();

  res.send(assets);
});

app.get('/cars/data', async (req, res) => {
  const assets = await client.getCarData();

  res.send(assets);
});

app.get('/tracks/data', async (req, res) => {
  const data = await client.getTrackData();

  res.send(data);
});

app.get('/track/assets', async (req, res) => {
  const data = await client.getTrackAssets();
  res.send(data);
});

app.get('/results', async (req, res) => {
  const results = await client.getSessionResults(
    Number(req.query.subsessionId)
  );
  res.send(results);
});

app.get('/event/logs', async (req, res) => {
  const logs = await client.getSessionLogs(67628140, 0);
  res.send(logs);
});

app.get('/results/lap_data', async (req, res) => {
  const data = await client.getLapChartData(67628140, 0);
  res.send(data);
});

app.listen(3000, () => {
  console.log('Server running on port: ', 3000);
});
// 67628140,233213812
