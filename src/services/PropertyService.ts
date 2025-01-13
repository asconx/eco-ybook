import {httpService} from 'src/services/HttpService';


class PropertyService {
  getProfiles(): Promise<any> {
    return httpService.get('profile', {},);
  }
  getProfile(id: number): Promise<any> {
    return httpService.get(`profile/${id}`)
  }
}

export const propertyService = new PropertyService();
