export function calculateTip(bill, percent) {
  return round(bill * percent / 100);
}

export function splitBill(total, people) {
  if (people < 1) {
    throw new Error("People must be at least 1");
  }
  return round(total / people);
}

function round(n) {
  return Math.round(n * 100) / 100;
}
