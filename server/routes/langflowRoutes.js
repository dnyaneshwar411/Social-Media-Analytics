import express from 'express';
import langflowClient from '../controller/langflowController.js';
const router = express.Router();


router.post('/run-flow', async (req, res) => {
  const { flowIdOrName, langflowId, inputValue, inputType, outputType, tweaks, stream } = req.body;

  try {
    const response = await langflowClient.runFlow(flowIdOrName, langflowId, inputValue, inputType, outputType, tweaks, stream);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


export default router;
