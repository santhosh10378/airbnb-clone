export const formatCurrency = ({
  amount,
  currency = "INR",
  locale = "en-IN",
}) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = ({
  date,
  locale = "en-US",
  options = { year: "numeric", month: "long", day: "numeric" },
}) => {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};

export const daysDifference = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = end - start;

  // Convert milliseconds to days (1000 ms/s * 60 s/min * 60 min/h * 24 h/d)
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  // Return the difference in days, rounded to the nearest whole number
  return Math.round(differenceInDays);
};

export const eachDayOfInterval = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Initialize an array to hold the dates
  const dates = [];

  // Loop over each day from the start date to the end date
  for (
    let current = start;
    current <= end;
    current.setDate(current.getDate() + 1)
  ) {
    // Add a new Date instance to avoid modifying the loop variable
    dates.push(new Date(current));
  }

  return dates;
};
