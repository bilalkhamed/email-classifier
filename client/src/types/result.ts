export default interface DetectionResult {
  prediction: 'spam' | 'ham';
  accuracy: number;
  details?: string[];
}
