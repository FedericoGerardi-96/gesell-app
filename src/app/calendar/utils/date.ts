import moment from 'moment';

export const dateStartFormat = (date: string): string => {
  let fechaMoment = moment(date, 'DD/MM/YYYY');
  let fechaFormateada = fechaMoment.format('YYYY-MM-DD');
  return fechaFormateada;
};

// Convert date format DD/MM/YYYY to YYYY-MM-DD and add 1 day
export const dateEndFormat = (date: string): string => {
  let fechaMoment = moment(date, 'DD/MM/YYYY');
  let fechaSumada = fechaMoment.add(1, 'days').format('YYYY-MM-DD');
  let fechaSumadaMoment = moment(fechaSumada, 'YYYY-MM-DD');
  let fechaFormateada = fechaSumadaMoment.format('YYYY-MM-DD');
  return fechaFormateada;
};

export const convertStringToDate = (dateString: string): Date => {
  const momentDate = moment(dateString, 'DD/MM/YYYY');
  const date = momentDate.toDate();
  return date;
};

export const setOccupiedDays = (reservations: any): Object[] => {
  const ocupiedDays: Object[] = [];
  for (const reservation of reservations) {
    const dateStartString = reservation.startDate;
    const dateEndString = reservation.endDate;
    const dateStart = moment(dateStartString, 'DD/MM/YYYY').toDate();
    const dateEnd = moment(dateEndString, 'DD/MM/YYYY').toDate();
    ocupiedDays.push([dateStart, dateEnd]);
  }
  return ocupiedDays;
};

export const isDateRangeOccupied = (
  rentalStartDate: string,
  rentalEndDate: string,
  occupiedRanges: any
): boolean => {
  for (const occupiedRange of occupiedRanges) {
    const { startDate, endDate } = occupiedRange;
    const isStartDateOccupied = moment(rentalStartDate).isBetween(
      startDate,
      endDate,
      undefined,
      '[]'
    );
    const isEndDateOccupied = moment(rentalEndDate).isBetween(
      startDate,
      endDate,
      undefined,
      '[]'
    );
    if (isStartDateOccupied || isEndDateOccupied) {
      return true;
    }
  }
  return false;
};
