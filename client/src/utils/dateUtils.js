export const formatDate = ({
  date,
  locale = "en-US",
  options = { year: "numeric", month: "short", day: "numeric" },
}) => {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
};

export const daysDifference = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const differenceInMilliseconds = end - start;
  const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

  return Math.round(differenceInDays);
};

export const eachDayOfInterval = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const dates = [];

  for (
    let current = start;
    current <= end;
    current.setDate(current.getDate() + 1)
  ) {
    dates.push(new Date(current));
  }

  return dates;
};

export const getDifferenceInDays = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const differenceInTime = Math.abs(secondDate - firstDate);
  const differenceInDays = Math.ceil(differenceInTime / oneDay);

  return differenceInDays;
};
