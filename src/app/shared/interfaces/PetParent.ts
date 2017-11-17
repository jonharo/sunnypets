import { ContactInfo } from './ContactInfo';
import { eContact } from './eContact';
import { VetInfo } from './VetInfo';

export interface PetParent {
  contactInfo?: ContactInfo;
  emergencyContacts?: eContact;
  vetInfo?: VetInfo;
  photoURL?: string;
  readonly registrationDate?: Date;
  readonly uid?: string;
}
