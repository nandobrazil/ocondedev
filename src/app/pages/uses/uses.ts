import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface UseItem {
  label: string;
  value: string;
  link?: string;
}

interface UseSection {
  title: string;
  icon: string;
  items: UseItem[];
}

@Component({
  selector: 'c-uses',
  imports: [CommonModule],
  templateUrl: './uses.html',
  styleUrls: ['./uses.scss']
})
export class UsesComponent {
  sections: UseSection[] = [
    {
      title: 'Hardware',
      icon: '💻',
      items: [
        { label: 'Laptop', value: 'Apple MacBook Air 13" M4', link: 'https://support.apple.com/en-us/122209' },
        { label: 'Desktop', value: 'Apple MacStudio M1 Max', link: 'https://support.apple.com/pt-br/111900' },
        { label: 'Monitor', value: 'LG UltraWide 29" 29WQ600B', link: 'https://www.lg.com/br/monitores/monitores-full-hd-qhd/29wq600b-w' },
        { label: 'Portable Monitor', value: 'Arzopa Z1C 16.1"', link: 'https://br.arzopa.com/products/z1c-16-1-100-srgb-fhd-1080p-monitor-portatil' },
        { label: 'Headphones', value: 'Edifier w830nb', link: 'https://edifier.com.br/fone-com-cancelamento-de-ruido-94-horas-de-bateria-e-hi-res-w830nb-edifier.html' },
        { label: 'Speakers', value: 'HyperX Quadcast', link: 'https://row.hyperx.com/pt/products/hyperx-quadcast-usb-microphone' },
        { label: 'Mouse', value: 'Logitech MX Master 3S', link: 'https://www.logitech.com/pt-br/shop/p/mx-master-3s' },
        { label: 'Keyboard', value: 'Keychron K3 V2 (switch brown)', link: 'https://www.keychron.com/products/keychron-k3-wireless-mechanical-keyboard' },
      ]
    },
    {
      title: 'Dev Tools',
      icon: '⚙️',
      items: [
        { label: 'IDE Nodejs (front+back)', value: 'WebStorm', link: 'https://www.jetbrains.com/pt-br/webstorm/' },
        { label: 'IDE .NET C#', value: 'Rider', link: 'https://www.jetbrains.com/pt-br/rider/' },
        { label: 'IDE Database', value: 'DataGrip', link: 'https://www.jetbrains.com/pt-br/datagrip/' },
        { label: 'IDE Generic', value: 'VisualStudioCode', link: 'https://code.visualstudio.com/' },
        { label: 'Font', value: 'JetbrainsMono', link: 'https://www.jetbrains.com/lp/mono/' },
        { label: 'Shell', value: 'OhMyZsh', link: 'https://ohmyz.sh/' },
        { label: 'REST Client', value: 'Insomnia', link: 'https://insomnia.rest/' },
        { label: 'Browser', value: 'Arc', link: 'https://arc.net/' }
      ]
    }
  ];
}
