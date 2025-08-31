import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
  downloadResume() {
    const fileURL = 'files/Sabenorio_Resume.pdf';

    // Create anchor
    const a = document.createElement('a');

    // use the fileURL as its reference
    a.href = fileURL;
    // Specify the name
    a.download = 'Sabenorio_Resume.pdf';
    a.click();
  }
}
