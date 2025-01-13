import {httpService} from 'src/services/HttpService';
import {OnlineReservationType} from 'src/interfaces/OnlineReservationType.type';
import {PriceModifier} from 'src/services/PriceModifier.type';


class BookingService {
  getOnlineReservationData(propertyName: string, dateFrom: string, dateTo: string, ageGroupNumber1: number, ageGroupNumber2: number, ageGroupNumber3: number, ageGroupNumber4: number, ageGroupNumber5: number): Promise<any> {
    return httpService.get(`onlineReservation/list/${propertyName}?date_from=${dateFrom}&date_to=${dateTo}&age_group_number_1=${ageGroupNumber1}&age_group_number_2=${ageGroupNumber2}&age_group_number_3=${ageGroupNumber3}&age_group_number_4=${ageGroupNumber4}&age_group_number_5=${ageGroupNumber5}`, {}, );
  }

  getOnlineCalendarData(propertyName: string): Promise<any> {
    return httpService.get(`onlineCalendar/${propertyName}`, {}, );
  }

  getOnlineRoomsData(propertyName: string): Promise<any> {
    return httpService.get(`onlineCalendar/${propertyName}/rooms`, {}, );
  }

  getOnlineAdditionals(propertyName: string): Promise<PriceModifier[]> {
    return httpService.get(`onlineReservation/additionals/${propertyName}`);
  }

  getPaynowData(reservationId: number): Promise<any> {
    return httpService.get(`paynow/${reservationId}`);
  }

  getLockedDays(propertyName: string): Promise<any> {
    return httpService.get(`onlineReservation/lockedDays/${propertyName}`);
  }

  getSupportedPaymentMethods(propertyName: string): Promise<any> {
    return httpService.get(`onlineReservation/paymentSupport/${propertyName}`);
  }

  getOnlineBlockades(organizationSlug: string): Promise<any> {
    return httpService.get(`onlineCalendar/${organizationSlug}/blockades`);
  }

  postOnlineReservation(propertyName: string, data: OnlineReservationType): Promise<any> {
    return httpService.post(`onlineReservation/${propertyName}`, {
      room_id: data.room_id,
      date_from: data.date_from,
      date_to: data.date_to,
      age_group_number_1: data.age_group_number_1,
      age_group_number_2: data.age_group_number_2,
      age_group_number_3: data.age_group_number_3,
      age_group_number_4: data.age_group_number_4,
      age_group_number_5: data.age_group_number_5,
      name: data.name,
      email: data.email,
      phone: data.phone,
      is_invoice: data.is_invoice,
      company_name: data.company_name,
      street: data.street,
      house_number: data.house_number,
      apartment_number: data.apartment_number,
      postal_code: data.postal_code,
      city: data.city,
      nip: data.nip,
      notes: data.notes,
      payment_method: data.payment_method,
      service_numbers: data.service_numbers,
      country: data.country,
      has_discount: data.has_discount,
      vehicle_type: data.vehicle_type,
      vehicle_plate: data.vehicle_plate,
    });
  }
}

export const bookingService = new BookingService();
