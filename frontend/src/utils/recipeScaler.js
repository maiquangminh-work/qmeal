/**
 * Scales ingredient quantity based on target servings vs baseline servings (default 2).
 * e.g., "500g" -> 4 servings -> "1000 g"
 * "300g" -> 3 servings -> "450 g"
 * "2 quả" -> 4 servings -> "4 quả"
 * "1 gói nhỏ" -> "2 gói nhỏ"
 * "Vừa đủ" -> "Vừa đủ"
 */
export function scaleIngredientAmount(amountStr, targetServings, baselineServings = 2) {
  if (!amountStr || typeof amountStr !== 'string') return amountStr;
  const ratio = targetServings / baselineServings;
  if (ratio === 1) return amountStr;

  const trimmed = amountStr.trim();

  // Pattern: "500g", "500 g", "1.5 kg", "2 thìa cà phê", "3 quả"
  const match = trimmed.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
  if (match) {
    const rawVal = parseFloat(match[1].replace(',', '.'));
    if (!isNaN(rawVal)) {
      const scaledVal = rawVal * ratio;
      const unit = match[2].trim();

      const formattedNum = scaledVal % 1 === 0 
        ? scaledVal 
        : Number(scaledVal.toFixed(1));

      return unit ? `${formattedNum} ${unit}` : `${formattedNum}`;
    }
  }

  // Fraction format like "1/2 bát" or "1/4 củ"
  const fracMatch = trimmed.match(/^(\d+)\/(\d+)\s*(.*)$/);
  if (fracMatch) {
    const num = parseInt(fracMatch[1], 10);
    const den = parseInt(fracMatch[2], 10);
    const scaledVal = (num / den) * ratio;
    const unit = fracMatch[3].trim();
    const formattedNum = scaledVal % 1 === 0 
      ? scaledVal 
      : Number(scaledVal.toFixed(1));
    return unit ? `${formattedNum} ${unit}` : `${formattedNum}`;
  }

  return amountStr;
}

export function scaleCalories(calories, targetServings, baselineServings = 2) {
  if (!calories || typeof calories !== 'number') return calories;
  return Math.round((calories / baselineServings) * targetServings);
}
