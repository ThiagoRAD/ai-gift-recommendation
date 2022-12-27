export function validateText(text) {
  if (typeof text !== 'string') {
    return { valid: false, error: 'Dream text must be a string' };
  }

  const trimmed = text.trim();

  if (trimmed.length === 0) {
    return { valid: false, error: 'Dream text is required' };
  }

  if (trimmed.length > 5000) {
    return { valid: false, error: 'Dream text must be less than 5000 characters' };
  }

  return { valid: true, value: trimmed };
}
