export interface QuoteRequest {
  name: {
    first: string;
    last: string;
  };
  email: string;
  tel: number;
  neighborhood: string;
  pet: {
    petName: string;
    species: string;
  };
  services: string;
  message: string;
}
