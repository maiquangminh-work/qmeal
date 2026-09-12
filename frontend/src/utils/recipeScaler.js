/**
 * Scales ingredient quantity based on target servings vs baseline servings (default 2).
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

/**
 * Formats a normalized ingredient object { quantity, unit } or fallback string amount.
 */
export function formatScaledIngredient(ingredient, targetServings, baselineServings = 2) {
  if (!ingredient) return '';
  const ratio = targetServings / baselineServings;

  if (typeof ingredient.quantity === 'number') {
    if (ingredient.quantity === 0) {
      return ingredient.unit || 'Vừa đủ';
    }
    const scaledQty = ingredient.quantity * ratio;
    const formattedQty = scaledQty % 1 === 0 ? scaledQty : Number(scaledQty.toFixed(1));
    return `${formattedQty} ${ingredient.unit || ''}`.trim();
  }

  if (ingredient.amount) {
    return scaleIngredientAmount(ingredient.amount, targetServings, baselineServings);
  }

  return '';
}

export function scaleCalories(calories, targetServings, baselineServings = 2) {
  if (!calories || typeof calories !== 'number') return calories;
  return Math.round((calories / baselineServings) * targetServings);
}

export function scaleMacro(val, targetServings, baselineServings = 2) {
  if (typeof val !== 'number') return 0;
  const ratio = targetServings / baselineServings;
  const scaled = val * ratio;
  return scaled % 1 === 0 ? scaled : Number(scaled.toFixed(1));
}
