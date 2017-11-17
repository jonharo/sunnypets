import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';

import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';

import 'rxjs/add/operator/do';
import swal from 'sweetalert2';

import { ContactInfo } from '../../shared/interfaces/ContactInfo';
import { PetInfo } from '../../shared/interfaces/PetInfo';
import { eContact } from '../../shared/interfaces/eContact';
import { VetInfo } from '../../shared/interfaces/VetInfo';

import 'rxjs/add/operator/first';

declare const $: any;

interface FileReaderEventTarget extends EventTarget {
  result: string;
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage(): string;
}

@Component({
  moduleId: module.id,
  selector: 'wizard-cmp',
  templateUrl: './wizard.component.html'
})
export class WizardComponent implements OnInit, OnChanges, AfterViewInit {
  wizardForm: FormGroup;

  updateInfo(form: FormGroup) {
    let userFullName: string = `${form.get('firstName').value}_${form.get('lastName').value}`;
    let petID: string;
    let petName: string = form.get('petName').value;

    // Sweet Alert
    swal({
      title: "Submitted",
      text: "Thanks for completing that form!",
      type: "success",
      onOpen: () => {
        // Grab PetInfo values from form
        const petInfo: PetInfo = {
          petName:     form.get('petName').value,
          petNick:     form.get('petNick').value,
          petSpecies:  form.get('petSpecies').value,
          petBreed:    form.get('petBreed').value,
          petSex:      form.get('petSex').value,
          petBirthday: form.get('petBirthday').value,
          petStatus:   form.get('petStatus').value,
          petVac:      form.get('petVac').value,
          petColor:    form.get('petColor').value
        };
        // Grab ContactInfo values from form
        const contactInfo: ContactInfo = {
          firstName:     form.get('firstName').value,
          lastName:      form.get('lastName').value,
          email:         form.get('email').value,
          mobilePhone:   form.get('mobilePhone').value,
          streetAddress: form.get('streetAddress').value,
          neighborhood:  form.get('neighborhood').value,
          zipCode:       form.get('zipCode').value
        };
        // Grab Emergency Contact values from form
        const emergencyContacts: eContact = {
          ec1Name:     form.get('ec1Name').value,
          ec1Relation: form.get('ec1Relation').value,
          ec1Phone:    form.get('ec1Phone').value,
          ec2Name:     form.get('ec2Name').value,
          ec2Relation: form.get('ec2Relation').value,
          ec2Phone:    form.get('ec2Phone').value,
          ec3Name:     form.get('ec3Name').value,
          ec3Relation: form.get('ec3Relation').value,
          ec3Phone:    form.get('ec3Phone').value
        };
        // Grab Vet Info values from form
        const vetInfo: VetInfo = {
          hospName:    form.get('hospName').value,
          hospAddress: form.get('hospAddress').value,
          vetName:     form.get('vetName').value,
          vetPhone:    form.get('vetPhone').value
        };

        this._as.getUserFb$()
          .first()
          .subscribe(user => {
            this._fs.getFsUserDoc(user) // Update Contact Info, Emergency Contacts and Vet Info
              .update({ contactInfo, emergencyContacts, vetInfo })
              .catch(err => console.error(err));
            this._fs.getPetCollection(user)
              .add({ petInfo }) // Add Pet to Pet Collection
              .then((docRef) => {
                petID = docRef.id;
                this._fs.getPetCollection(user).doc(petID)
                  .update({ petID })
                  .catch(err => console.error(err))
              }).catch(err => console.error(err))
          });
      }
    }).then(() => {
      let rootRef = this.firebase.storage().ref(); // Create a ref to firebase storage root
      this._as.getUserFb$()
        .subscribe(user => {
          let petPic = $('#pet-picture'); // Grab input element from html
          let petPhotoRef = rootRef.child(`petParents/${user.uid}/pets/${petID}/${petName}.jpg`); // Create ref in firebase storage for file
          if (petPic[0].files[0]) {
            petPhotoRef.put(petPic[0].files[0])
              .then((snapshot) => {
                this._fs.getPetCollection(user).doc(petID) // Update pet photoURL
                  .update({ photoURL: snapshot.downloadURL })
                  .then(() => console.log(`${petPic.name} uploaded successfully as ${petName}.jpg for pet: ${petID}`))
                  .catch(err => console.error(err));
              })
              .catch(err => console.error(err));
          } else {
            console.log(`petpic not uploaded`)
          }

          let vacFile = $('#petVacFile'); // Grab input element from html
          //TODO: What if a png or a doc file is uploaded?
          let vacFileRef = rootRef.child(`petParents/${user.uid}/pets/${petID}/${petName}VacRecord.jpg`); // Create ref in firebase storage for file
          if (vacFile[0].files[0]) {
            vacFileRef.put(vacFile[0].files[0])
              .then((snapshot) => {
                this._fs.getPetCollection(user).doc(petID) // Update vacRecord
                  .update({ vacRecord: snapshot.downloadURL })
                  .then(() => console.log(`${vacFile.name} uploaded successfully for ${petName}, ID: ${petID}`))
                  .catch(err => console.error(err));
              })
              .catch(err => console.error(err));
          } else {
            console.log(`vacRecord not uploaded`)
          }

          let contactPic = $('#contact-picture'); // Grab input element from html
          let contactPhotoRef = rootRef.child(`petParents/${user.uid}/${userFullName}.jpg`); // Create ref in firebase storage for file
          if (contactPic[0].files[0]) {
            contactPhotoRef.put(contactPic[0].files[0])
              .then((snapshot) => {
                this._fs.getFsUserDoc(user) // Update user photoURL
                  .update({ photoURL: snapshot.downloadURL })
                  .then(() => console.log(`${contactPic.name} uploaded successfully as ${userFullName}.jpg for user: ${user.uid}`))
                  .catch(err => console.error(err));
              })
              .catch(err => console.error(err));
          } else {
            console.log(`contactpic not uploaded`)
          }
        });
      // Navigate to Dashboard
      this.router.navigate([`dashboard`])
        .catch(err => console.error(err))
    }).catch(err => console.error(err))
  }

  createForm() {
    this.wizardForm = this.fb.group({
      petName:         ['', Validators.required],
      petNick:         ['', Validators.required],
      petSpecies:      ['', Validators.required],
      petBreed:        ['', Validators.required],
      petSex:          ['', Validators.required],
      petBirthday:     ['', [Validators.required, Validators.minLength(10)]],
      petStatus:       ['', Validators.required],
      petVac:          ['', Validators.required],
      petColor:        ['', Validators.required],
      firstName:       ['', Validators.required],
      lastName:        ['', Validators.required],
      email:           ['', [Validators.required, Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\.[a-z0-9-]+)*')]],
      mobilePhone:     ['', [Validators.required, Validators.minLength(10)]],
      streetAddress:   ['', Validators.required],
      neighborhood:    ['', Validators.required],
      zipCode:         ['', [Validators.required, Validators.minLength(5)]],
      ec1Name:         ['', Validators.required],
      ec1Relation:     ['', Validators.required],
      ec1Phone:        ['', Validators.required],
      ec2Name:         [''],
      ec2Relation:     [''],
      ec2Phone:        [''],
      ec3Name:         [''],
      ec3Relation:     [''],
      ec3Phone:        [''],
      hospName:        ['', Validators.required],
      hospAddress:     ['', Validators.required],
      vetName:         ['', Validators.required],
      vetPhone:        ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  constructor(private _as: AuthService,
              private _fs: FirebaseService,
              private fb: FormBuilder,
              private router: Router,
              private firebase: FirebaseApp) {}

  ngOnInit() {
    // Create Form
    this.createForm();

    // Patch Contact Info values on Form from FireStore
    this._as.userFb$
      .subscribe(user => {
        this._fs.getFsUserDoc(user)
          .valueChanges()
          .subscribe((doc) => {
            for (let [key, value] of (<any>Object).entries(doc.contactInfo)) {
              this.wizardForm.patchValue({[key]: value});
            }
            for (let [key, value] of (<any>Object).entries(doc.vetInfo)) {
              this.wizardForm.patchValue({[key]: value});
            }
            for (let [key, value] of (<any>Object).entries(doc.emergencyContacts)) {
              this.wizardForm.patchValue({[key]: value});
            }
          });
      });

    // Code for the Validator
    var $validator = $('.wizard-card form').validate({
      rules: {
        // Pet
        petName: {
          required: true,
          minlength: 3
        },
        petNick: {
        },
        petSpecies: {
          required: true,
        },
        petBreed: {
          required: true,
        },
        petSex: {
          required: true,
        },
        petBirthday: {
          required: true,
          minlength: 10
        },
        petStatus: {
          required: true,
        },
        petVac: {
          required: true,
        },
        petColor: {
          required: true,
        },
        petVacFile: {
          required: true,
        },
        // Contact
        firstName: {
          required: true,
          minlength: 3
        },
        lastName: {
          required: true,
          minlength: 3
        },
        email: {
          required: true
        },
        mobilePhone: {
          required: true,
          minlength: 10
        },
        streetAddress: {
          required: true,
        },
        neighborhood: {
          required: true,
          minlength: 3,
        },
        zipCode: {
          required: true,
          minlength: 5,
        },
        // Emergency Contacts
        ec1Name: {
          required: true,
        },
        ec1Relation: {
          required: true,
        },
        ec1Phone: {
          required: true,
          minlength: 9,
        },
        ec2Name: {},
        ec2Relation: {},
        ec2Phone: {},
        ec3Name: {},
        ec3Relation: {},
        ec3Phone: {},
        // Vet Info
        hospName: {
          required: true,
        },
        hospAddress: {
          required: true,
        },
        vetName: {
          required: true,
        },
        vetPhone: {
          required: true,
          minlength: 10
        }
      },
      errorPlacement: function(error: any, element: any) {
        $(element).parent('div').addClass('has-error');
      }
    });
    // Custom JQuery Validator (regex) for Email Input
    $.validator.methods.email = function(value, element) {
      return this.optional( element ) || /[a-z]+@[a-z]+\.[a-z]+/.test( value );
    };

    // Wizard Initialization
    $('.wizard-card').bootstrapWizard({
      'tabClass': 'nav nav-pills',
      'nextSelector': '.btn-next',
      'previousSelector': '.btn-previous',

      onNext: function(tab, navigation, index) {
        var $valid = $('.wizard-card form').valid();
        if(!$valid) {
          $validator.focusInvalid();
          return false;
        }
      },

      onInit: function(tab: any, navigation: any, index: any) {

        // check number of tabs and fill the entire row
        let $total = navigation.find('li').length;
        let $wizard = navigation.closest('.wizard-card');

        let $first_li = navigation.find('li:first-child a').html();
        let $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
        $('.wizard-card .wizard-navigation').append($moving_div);

        $total = $wizard.find('.nav li').length;
        let  $li_width = 100/$total;

        let total_steps = $wizard.find('.nav li').length;
        let move_distance = $wizard.width() / total_steps;
        let index_temp = index;
        let vertical_level = 0;

        let mobile_device = $(document).width() < 600 && $total > 3;

        if(mobile_device) {
          move_distance = $wizard.width() / 2;
          index_temp = index % 2;
          $li_width = 50;
        }

        $wizard.find('.nav li').css('width',$li_width + '%');

        let step_width = move_distance;
        move_distance = move_distance * index_temp;

        let $current = index + 1;

        if($current == 1 || (mobile_device == true && (index % 2 == 0) )) {
          move_distance -= 8;
        } else if($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
          move_distance += 8;
        }

        if(mobile_device) {
          let x: any = index / 2;
          vertical_level = parseInt(x);
          vertical_level = vertical_level * 38;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
          'transform':'translate3d(' + move_distance + 'px, ' + vertical_level +  'px, 0)',
          'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

        });
        $('.moving-tab').css('transition','transform 0s');
      },

      onTabClick : function(tab: any, navigation: any, index: any) {

        const $valid = $('.wizard-card form').valid();

        if (!$valid) {
          return false;
        } else {
          return true;
        }
      },

      onTabShow: function(tab: any, navigation: any, index: any) {
        let $total = navigation.find('li').length;
        let $current = index + 1;

        const $wizard = navigation.closest('.wizard-card');

        // If it's the last tab then hide the last button and show the finish instead
        if ($current >= $total) {
          $($wizard).find('.btn-next').hide();
          $($wizard).find('.btn-finish').show();
        } else {
          $($wizard).find('.btn-next').show();
          $($wizard).find('.btn-finish').hide();
        }

        const button_text = navigation.find('li:nth-child(' + $current + ') a').html();

        setTimeout(function() {
          $('.moving-tab').text(button_text);
        }, 150);

        const checkbox = $('.footer-checkbox');

        if ( index !== 0 ) {
          $(checkbox).css({
            'opacity':'0',
            'visibility':'hidden',
            'position':'absolute'
          });
        } else {
          $(checkbox).css({
            'opacity':'1',
            'visibility':'visible'
          });
        }
        $total = $wizard.find('.nav li').length;
        let  $li_width = 100/$total;

        let total_steps = $wizard.find('.nav li').length;
        let move_distance = $wizard.width() / total_steps;
        let index_temp = index;
        let vertical_level = 0;

        let mobile_device = $(document).width() < 600 && $total > 3;

        if(mobile_device) {
          move_distance = $wizard.width() / 2;
          index_temp = index % 2;
          $li_width = 50;
        }

        $wizard.find('.nav li').css('width',$li_width + '%');

        let step_width = move_distance;
        move_distance = move_distance * index_temp;

        $current = index + 1;

        if($current == 1 || (mobile_device == true && (index % 2 == 0) )) {
          move_distance -= 8;
        } else if($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
          move_distance += 8;
        }

        if(mobile_device) {
          let x: any = index / 2;
          vertical_level = parseInt(x);
          vertical_level = vertical_level * 38;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
          'transform':'translate3d(' + move_distance + 'px, ' + vertical_level +  'px, 0)',
          'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

        });
      }
    });

    // Prepare the preview for pet picture
    $('#pet-picture').change(function() {
      const input = $(this);
      if (input[0].files && input[0].files[0]) {
        const reader = new FileReader();
        reader.onload = function (e: FileReaderEvent) {
          $('#petPreview').attr('src', e.target.result).fadeIn('slow');
        };
        reader.readAsDataURL(input[0].files[0]);
      }
    });

    // Prepare the preview for contact picture
    $('#contact-picture').change(function() {
      const input = $(this);
      if (input[0].files && input[0].files[0]) {
        const reader = new FileReader();
        reader.onload = function (e: FileReaderEvent) {
          $('#contactPreview').attr('src', e.target.result).fadeIn('slow');
        };
        reader.readAsDataURL(input[0].files[0]);
      }
    });

    $('[data-toggle="wizard-radio"]').click(function() {
      const wizard = $(this).closest('.wizard-card');
      wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
      $(this).addClass('active');
      $(wizard).find('[type="radio"]').removeAttr('checked');
      $(this).find('[type="radio"]').attr('checked', 'true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function() {
      if ( $(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('[type="checkbox"]').removeAttr('checked');
      } else {
        $(this).addClass('active');
        $(this).find('[type="checkbox"]').attr('checked', 'true');
      }
    });

    $('.set-full-height').css('height', 'auto');
  }

  ngOnChanges(changes: SimpleChanges) {
    const input = $(this);
    if (input[0].files && input[0].files[0]) {
      const reader: any = new FileReader();
      reader.onload = function (e: FileReaderEvent) {
        $('#petPreview').attr('src', e.target.result).fadeIn('slow');
        $('#contactPreview').attr('src', e.target.result).fadeIn('slow');
      };
      reader.readAsDataURL(input[0].files[0]);
    }
  }

  ngAfterViewInit() {
    $.material.options.autofill = true;
    $.material.init();

    $('.wizard-card').each(function() {
      const $wizard = $(this);
      const index = $wizard.bootstrapWizard('currentIndex');
      let $total = $wizard.find('.nav li').length;
      let  $li_width = 100/$total;

      let total_steps = $wizard.find('.nav li').length;
      let move_distance = $wizard.width() / total_steps;
      let index_temp = index;
      let vertical_level = 0;

      let mobile_device = $(document).width() < 600 && $total > 3;

      if(mobile_device) {
        move_distance = $wizard.width() / 2;
        index_temp = index % 2;
        $li_width = 50;
      }

      $wizard.find('.nav li').css('width',$li_width + '%');

      let step_width = move_distance;
      move_distance = move_distance * index_temp;

      let $current = index + 1;

      if($current == 1 || (mobile_device == true && (index % 2 == 0) )) {
        move_distance -= 8;
      } else if($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
        move_distance += 8;
      }

      if(mobile_device) {
        let x: any = index / 2;
        vertical_level = parseInt(x);
        vertical_level = vertical_level * 38;
      }

      $wizard.find('.moving-tab').css('width', step_width);
      $('.moving-tab').css({
        'transform':'translate3d(' + move_distance + 'px, ' + vertical_level +  'px, 0)',
        'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

      });

      $('.moving-tab').css({
        'transition': 'transform 0s'
      });
    });
  }
}
