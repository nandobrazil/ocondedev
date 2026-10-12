export interface SetupItem {
  label: string;
  value: string;
  link?: string;
}

export interface SetupSection {
  title: string;
  items: SetupItem[];
}

export const setupSections: SetupSection[] = [
  {
    title: 'Hardware',
    items: [
      { label: 'Notebook', value: 'Apple MacBook Air 13" M4', link: 'https://support.apple.com/en-us/122209' },
      { label: 'Desktop', value: 'Apple Mac Studio M1 Max', link: 'https://support.apple.com/pt-br/111900' },
      { label: 'Monitor', value: 'LG UltraWide 29" 29WQ600B', link: 'https://www.lg.com/br/monitores/monitores-full-hd-qhd/29wq600b-w' },
      { label: 'Monitor portátil', value: 'Arzopa Z1C 16.1"', link: 'https://br.arzopa.com/products/z1c-16-1-100-srgb-fhd-1080p-monitor-portatil' },
      { label: 'Fone', value: 'Edifier W830NB', link: 'https://edifier.com.br/fone-com-cancelamento-de-ruido-94-horas-de-bateria-e-hi-res-w830nb-edifier.html' },
      { label: 'Microfone', value: 'HyperX QuadCast', link: 'https://row.hyperx.com/pt/products/hyperx-quadcast-usb-microphone' },
      { label: 'Mouse', value: 'Logitech MX Master 3S', link: 'https://www.logitech.com/pt-br/shop/p/mx-master-3s' },
      { label: 'Teclado', value: 'Keychron K3 V2 (switch brown)', link: 'https://www.keychron.com/products/keychron-k3-wireless-mechanical-keyboard' },
    ],
  },
  {
    title: 'Ferramentas',
    items: [
      { label: 'Servidores', value: 'Duas VPS Linux com k3s: produção e laboratório' },
      { label: 'IDE Node', value: 'WebStorm', link: 'https://www.jetbrains.com/pt-br/webstorm/' },
      { label: 'IDE .NET', value: 'Rider', link: 'https://www.jetbrains.com/pt-br/rider/' },
      { label: 'IDE de banco', value: 'DataGrip', link: 'https://www.jetbrains.com/pt-br/datagrip/' },
      { label: 'Editor', value: 'Visual Studio Code', link: 'https://code.visualstudio.com/' },
      { label: 'Agente de código', value: 'Claude Code', link: 'https://claude.com/claude-code' },
      { label: 'Fonte', value: 'JetBrains Mono', link: 'https://www.jetbrains.com/lp/mono/' },
      { label: 'Shell', value: 'zsh com Oh My Zsh', link: 'https://ohmyz.sh/' },
      { label: 'Cliente REST', value: 'Insomnia', link: 'https://insomnia.rest/' },
      { label: 'Navegador', value: 'Arc', link: 'https://arc.net/' },
    ],
  },
];
