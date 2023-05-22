export default function tokenRemainingTime(tokenExpirationDate: any) {
  const referenceDate = new Date();
  const targetDate = new Date(tokenExpirationDate);
  const differenceInMilliseconds =
    targetDate.getTime() - referenceDate.getTime();

  const remainingTime = {
    days: Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)),
    hours: Math.floor((differenceInMilliseconds / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((differenceInMilliseconds / (1000 * 60)) % 60),
    seconds: Math.floor((differenceInMilliseconds / 1000) % 60),
  };

  const reformattedDate = `${remainingTime.days}d ${remainingTime.hours}h ${remainingTime.minutes}m ${remainingTime.seconds}s`;

  return reformattedDate;
}
