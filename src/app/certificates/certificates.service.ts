import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CertificatesService {
  certificates = [
    {
      title: '11th IT Skills Olympics - Java Programming',
      date: new Date(2025, 10, 15),
      imageLink: 'images/certificates/11th-itskills-cert.jpg',
    },
    {
      title: 'IT Specialist - Databases',
      date: new Date(2025, 7, 12),
      imageLink: 'images/certificates/databases-cert.jpg',
    },
    {
      title: 'iSite National IT Skills Competition - Python Programming',
      date: new Date(2025, 4, 12),
      imageLink: 'images/certificates/isite-cert.jpg',
    },
    {
      title: 'LeenTech Network Solution - OJT',
      date: new Date(2025, 10, 10),
      imageLink: 'images/certificates/leentech-cert.png',
    },
    {
      title: 'CISCO Networking Academy - Operating Systems Basics',
      date: new Date(2024, 5, 30),
      imageLink: 'images/certificates/os-cert.jpg',
    },
    {
      title: 'IT Specialist - Python',
      date: new Date(2025, 6, 7),
      imageLink: 'images/certificates/python-cert.jpg',
    },
  ];

  getCertificates() {
    return this.certificates;
  }
}
