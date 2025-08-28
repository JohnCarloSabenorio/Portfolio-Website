import { Component } from '@angular/core';
import { CertificatesService } from './certificates.service';
import { Certificate } from './certificate.model';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-certificates',
  imports: [NgForOf],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css',
})
export class CertificatesComponent {
  selectedCertificate = 0;
  allCertificates: Certificate[] = [];
  constructor(private certificatesService: CertificatesService) {
    this.allCertificates = this.certificatesService.getCertificates();
    console.log('all certificates:', this.allCertificates);
  }

  setSelectedCertificate(num: number) {
    console.log('setting selected certificate to:', num);
    this.selectedCertificate = num;
  }

  goToNextCertificate() {
    console.log('going to next cert!');
    if (this.selectedCertificate + 1 == this.allCertificates.length) {
      this.selectedCertificate = 0;
      return;
    }

    this.selectedCertificate++;
  }
  goToPrevCertificate() {
    console.log('going to prev cert!');
    if (this.selectedCertificate - 1 < 0)
      this.selectedCertificate = this.allCertificates.length;

    this.selectedCertificate--;
  }
}
