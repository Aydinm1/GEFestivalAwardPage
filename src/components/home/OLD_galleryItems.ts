export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
  widthClass: string;
  aspectClass: string;
  fallbackSrc: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: '/gallery-1.jpeg',
    alt: 'Excellence 1',
    title: 'Main Arena Production',
    description: 'A synthesis of technology and performance.',
    widthClass: 'md:w-[450px]',
    aspectClass: 'aspect-[4/5]',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBZY4EsN3lHSWqPBU3bah5KczhrG7-ammz3rgfPT2Rk4MGgWkfjBnMJ9G76_kNAKIrbk_43PE_Uaw44zjRo1J6NQUyBakcJzm3wYijRb-254jjNU34uTlKw5RnaE6gKjfzdnCN3NBd1WiU6WJI0Z75oTUxO-axzxVBmSU9amLxtT5KzAqwwBHKewqlnBqR1YMEyLETo-wFzpoyej4Kfe1zOwTBL4kTpEodR9X80pyi-0ponnz4v1rk1O5BpDIQg10hHxngu0fgivSHF',
  },
  {
    src: '/gallery-2.jpg',
    alt: 'Excellence 2',
    title: 'The Cultural Pavilion',
    description: 'Where heritage meets modern architecture.',
    widthClass: 'md:w-[650px]',
    aspectClass: 'aspect-[16/10]',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOm1aw4D9QDoqDMitMjql0fLZKUTpzCG4G1e9G4lSqHGHHbFvN1KqYuTE9Vt8DMmTl7_0ZQ0PSZUVxIO76eS4rnlAezS8Sgi6vMxAqe-9z611f9ByzUfxeRUxsbMbHXAG-v6j0a0gdkuBmGqpUJllIrm79O6JjywRxq_zZh-oIAylgNjeoS4Umh8KtYn9aeKc44_htk7qk6VKxNpKfwX23i6_GcNM615XvGGZR7FSrrGEag2-V-BiZzWfXz9bV8knCknCmiQ9_vfmp',
  },
  {
    src: '/gallery-3.jpeg',
    alt: 'Excellence 3',
    title: 'Communal Exchange',
    description: 'Strategic partnerships forged in dialogue.',
    widthClass: 'md:w-[450px]',
    aspectClass: 'aspect-[4/5]',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgS2YSrysUHbpnIvN31aIjgkbyqj1J9biRBmMNgrliX5eIAUCuJyCup1Nn0nT3W42G0kjWPD5Ga3k2hk1MkSasc8PVcwMc8Qr-zoA2VV0Ikgodyt7tzwXhdKDokttPdV9hL_U5YD6GjBWECuS-oMxRBf_iDZ9pD20UdPIP_SDqE8ajxpsOH25H_PzuYBSmhU7AVrXADdgzRvXUL47YvV8fS_Bs2zGuAx31AExmd-EAvDr_H2fVzhz0pyWH0W15l4bOhDB2li7CH4hq',
  },
  {
    src: '/gallery-4.jpg',
    alt: 'Excellence 4',
    title: 'The Legacy Pavilion',
    description: 'Preserving cultural narratives for future generations.',
    widthClass: 'md:w-[650px]',
    aspectClass: 'aspect-[16/10]',
    fallbackSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9yN7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7_7',
  },
];
