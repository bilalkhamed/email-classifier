import axios from 'axios';
import type DetectionResult from '../types/result';

const BASE_URL = 'http://localhost:8000/';
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const runDetection = async (text: string) => {
  const request = await api.post('/', {
    text,
  });

  const result: DetectionResult = {
    prediction: request.data.prediction,
    accuracy: request.data.probability,
  };

  return result;
};

export default runDetection;
