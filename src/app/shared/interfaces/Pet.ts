import { PetInfo } from './PetInfo';

export interface Pet {
  petInfo: PetInfo;
  photoURL?: string;
  vacRecord?: string;
  readonly petID?: string;
}
