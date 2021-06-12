import express from 'express';
import expressWS from 'express-ws';
import dotEnv from 'dotenv';
import cors from 'cors';
import { Ctx } from './core/ctx.js';
import { StoreArray } from '../../common/src/core/blocks/store/extended/array.js';
import { getImageRouter } from './routers/image.js';
import { getWSRouter } from './routers/ws.js';
import { getVerifyRouter } from './routers/verify.js';
const { app } = expressWS(express());
app.use(cors());
dotEnv.config();
Ctx.connections = new StoreArray();
Ctx.clients = new Map();
Ctx.topics = new Map();
Ctx.signals = new Map();
app.get('/api/v1', (req, res) => {
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});
app.use('/api/v1/ws', getWSRouter());
app.use('/api/v1/image', getImageRouter());
app.use('/api/v1/verify', getVerifyRouter());
app.listen(process.env.PORT ?? 6969 /* DEFAULT_PORT */);
