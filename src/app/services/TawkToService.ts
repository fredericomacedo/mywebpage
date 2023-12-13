
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TawkToService {

  constructor() { }

  initializeTawkTo() {
    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = `https://embed.tawk.to/${environment.tawkToKey}`;
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    const s0 = document.getElementsByTagName('script')[0];

    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }
  }
}

