export const roomTypes = [
  {
    label: 'Pokój',
    value: 1,
  },
  {
    label: 'Domek',
    value: 2,
  },
  {
    label: 'Apartament',
    value: 3,
  },
  {
    label: 'Studio',
    value: 4,
  },
  {
    label: 'Bungalow',
    value: 5,
  },
  {
    label: 'Kamping',
    value: 6,
  },
  {
    label: 'Namiot',
    value: 7,
  },
  {
    label: 'Sala',
    value: 8,
  },
  {
    label: 'Kamper',
    value: 9,
  },
  {
    label: 'Łódź',
    value: 10,
  },
  {
    label: 'Jacht',
    value: 11,
  },
  {
    label: 'Willa',
    value: 12,
  },
  {
    label: 'Parcela',
    value: 13,
  },
]
export const amenities = [
  {
    label: 'Basen',
    value: false,
    type: 1
  },
  {
    label: 'Balkon',
    value: false,
    type: 2
  },
  {
    label: 'Biurko',
    value: false,
    type: 3
  },
  {
    label: 'Dywan',
    value: false,
    type: 4
  },
  {
    label: 'Ekspres do kawy',
    value: false,
    type: 5
  },
  {
    label: 'Grill',
    value: false,
    type: 6
  },
  {
    label: 'Klimatyzacja',
    value: false,
    type: 7
  },
  {
    label: 'Koce',
    value: false,
    type: 8
  },
  {
    label: 'Kominek',
    value: false,
    type: 9
  },
  {
    label: 'Korkociąg',
    value: false,
    type: 10
  },
  {
    label: 'Kuchnia',
    value: false,
    type: 11
  },
  {
    label: 'Leżak',
    value: false,
    type: 12
  },
  {
    label: 'Łóżeczko turystyczne',
    value: false,
    type: 13
  },
  {
    label: 'Minibar',
    value: false,
    type: 14
  },
  {
    label: 'Mydło',
    value: false,
    type: 15
  },
  {
    label: 'Ogrzewanie',
    value: false,
    type: 16
  },
  {
    label: 'Parasol plażowy',
    value: false,
    type: 17
  },
  {
    label: 'Parawan',
    value: false,
    type: 18
  },
  {
    label: 'Pralka',
    value: false,
    type: 19
  },
  {
    label: 'Przybory kuchenne',
    value: false,
    type: 20
  },

  {
    label: 'Ręczniki',
    value: false,
    type: 21
  },
  {
    label: 'Sejf',
    value: false,
    type: 22
  },
  {
    label: 'Suszarka',
    value: false,
    type: 23
  },
  {
    label: 'Szampon',
    value: false,
    type: 24
  },
  {
    label: 'TV',
    value: false,
    type: 25
  },
  {
    label: 'Wieszaki',
    value: false,
    type: 26
  },
  {
    label: 'Żelazko',
    value: false,
    type: 27
  },
  {
    label: 'Zmywarka',
    value: false,
    type: 28
  },
  {
    label: 'Zamrażalka',
    value: false,
    type: 29
  },
]

export const beds = [
  {
    label: 'Łóżko pojedyńcze 90-200 cm',
    accommodation: 1,
    value: 1
  },
  {
    label: 'Łóżko podwójne 160-180 cm',
    accommodation: 2,
    value: 2
  },
  {
    label: 'Duże łóżko podwójne 180-200 cm',
    accommodation: 3,
    value: 3
  },
  {
    label: 'Super duże łóżko 180-210 cm',
    accommodation: 3,
    value: 4
  },
  {
    label: 'Dostawka',
    accommodation: 1,
    value: 5
  },
  {
    label: 'Sofa',
    accommodation: 2,
    value: 6
  },
]


export const notifications = [
  {
    label: 'Utworzenie nowej rezerwacji',
    value: 'new_reservation'
  },
  {
    label: 'Synchronizacja rezerwacji',
    value: 'new_ical_sync'
  },
  {
    label: 'Nowa rezerwacja online',
    value: 'new_online_booking'
  },
  {
    label: 'Anulowanie rezerwacji',
    value: 'cancel_reservation'
  },
  {
    label: 'Wysłanie powiadomienia dla klienta',
    value: 'reservation_notification'
  },
  {
    label: 'Nowa płatność online',
    value: 'new_online_payment'
  },
]

export const vehicles = [
  {
    label: 'samochód osobowy',
    value: 1
  },
  {
    label: 'kamper',
    value: 2
  },
  {
    label: 'przyczepa',
    value: 3
  },
  {
    label: 'namiot',
    value: 4
  },
  {
    label: 'namiot dachowy',
    value: 5
  },
]
export const checkInActions = [
  {
    label: 'Sprawdzenie rezerwacji',
    value: false,
    type: 1
  },
  {
    label: 'Weryfikacja tożsamości',
    value: false,
    type: 2
  },
  {
    label: 'Rejestracja danych',
    value: false,
    type: 3
  },
  {
    label: 'Rejestracja pojazdu',
    value: false,
    type: 4
  },
  {
    label: 'Informowanie o udogodnieniach i usługach',
    value: false,
    type: 5
  },
  {
    label: 'Przekazanie klucza',
    value: false,
    type: 6
  },
  {
    label: 'Przekazanie karty do pokoju',
    value: false,
    type: 7
  },
  {
    label: 'Przekazanie opaski',
    value: false,
    type: 8
  },
  {
    label: 'Wsparcie z bagażem',
    value: false,
    type: 9
  },
  {
    label: 'Wyjaśnienie zasad obiektu',
    value: false,
    type: 10
  },
  {
    label: 'Przekazanie ulotki',
    value: false,
    type: 11
  },
  {
    label: 'Przekazanie formularza',
    value: false,
    type: 12
  },
  {
    label: 'Karta pobytu',
    value: false,
    type: 13
  },
  {
    label: 'Voucher do restauracji',
    value: false,
    type: 14
  },
  {
    label: 'Informacja dla posiadaczy psów',
    value: false,
    type: 15
  }
]
export const checkOutActions = [
  {
    label: 'Sprawdzenie stanu kwatery',
    value: false,
    type: 1
  },
  {
    label: 'Rozliczenie rachunku',
    value: false,
    type: 2
  },
  {
    label: 'Zwrot klucza',
    value: false,
    type: 3
  },
  {
    label: 'Zwrot karty do pokoju',
    value: false,
    type: 4
  },
  {
    label: 'Zwrot opaski',
    value: false,
    type: 5
  },
  {
    label: 'Zapytanie o opinie',
    value: false,
    type: 6
  },
  {
    label: 'Przekazanie ankiety',
    value: false,
    type: 7
  },
  {
    label: 'Wysłanie ankiety',
    value: false,
    type: 8
  },
  {
    label: 'Zorganizowanie transportu',
    value: false,
    type: 9
  }
]

export const permissionsOptions = {
  reservationsOptions: [
    {label: 'dodawanie rezerwacji', value: 'RESERVATION_CREATE'},
    {label: 'edycja rezerwacji', value: 'RESERVATION_UPDATE'},
    {label: 'archiwizacja rezerwacji', value: 'RESERVATION_DELETE'},
    {label: 'wysyłanie powiadomień', value: 'NOTIFICATION_SEND'},
  ],
  receptionOptions: [
    {label: 'meldowanie', value: 'CHECK_IN'},
    {label: 'wymeldowanie', value: 'CHECK_OUT'},
    {label: 'akcje związane z meldunkiem', value: 'CHECK_IN_ACTIONS'},
    {label: 'rejestracja pojazdu', value: 'REGISTER_VEHICLE'},
    {label: 'rozliczenie rezerwacji', value: 'RESERVATION_SETTLEMENT'}
  ],
  propertiesAndRoomsOptions: [
    {label: 'edycja miejsca', value: 'PROPERTY_UPDATE'},
    {label: 'dodawanie kwater', value: 'ROOM_CREATE'},
    {label: 'edycja kwater', value: 'ROOM_UPDATE'},
    {label: 'usuwanie kwater', value: 'ROOM_DELETE'}
  ],
  iCalOptions: [
    {label: 'dodawanie synchronizacji iCalendar', value: 'ICALENDAR_CREATE'},
    {label: 'edycja synchronizacji iCalendar', value: 'ICALENDAR_UPDATE'},
    {label: 'usuwanie synchronizacji iCalendar', value: 'ICALENDAR_DELETE'}
  ],
  blockadesOptions: [
    {label: 'dodawanie blokady', value: 'BLOCKADE_CREATE'},
    {label: 'edycja blokady', value: 'BLOCKADE_UPDATE'},
    {label: 'usuwanie blokady', value: 'BLOCKADE_DELETE'}
  ],
  usersAndRolesOptions: [
    {label: 'zapraszanie użytkowników', value: 'USER_CREATE'},
    {label: 'edycja użytkownika', value: 'USER_UPDATE'},
    {label: 'usuwanie użytkownika', value: 'USER_DELETE'},
    {label: 'dodawanie roli', value: 'ROLE_CREATE'},
    {label: 'edycja roli', value: 'ROLE_UPDATE'},
    {label: 'usuwanie roli', value: 'ROLE_DELETE'}
  ],
  clientsOptions: [
    {label: 'dodawanie klienta', value: 'CLIENT_CREATE'},
    {label: 'edycja klienta', value: 'CLIENT_UPDATE'},
    {label: 'usuwanie klienta', value: 'CLIENT_DELETE'}
  ],
  statusesAndNotificationsOptions: [
    {label: 'dodawanie statusu', value: 'STATUS_CREATE'},
    {label: 'edycja statusu', value: 'STATUS_UPDATE'},
    {label: 'usuwanie statusu', value: 'STATUS_DELETE'},
    {label: 'dodawanie powiadomienia', value: 'NOTIFICATION_CREATE'},
    {label: 'edycja powiadomienia', value: 'NOTIFICATION_UPDATE'},
    {label: 'usuwanie powiadomienia', value: 'NOTIFICATION_DELETE'}
  ],
  pricesOptions: [
    {label: 'dodawanie cennika', value: 'PRICING_CREATE'},
    {label: 'edycja cennika', value: 'PRICING_UPDATE'},
    {label: 'usuwanie cennika', value: 'PRICING_DELETE'}
  ],
  additionalsOptions: [
    {label: 'dodawanie usług i opłat dodatkowych do rezerwacji', value: 'RESERVATION_ADDITIONALS_ADD'},
    {label: 'tworzenie usług i opłat dodatkowych', value: 'ADDITIONALS_CREATE'},
    {label: 'edycja usług i opłat dodatkowych', value: 'ADDITIONALS_UPDATE'},
    {label: 'usuwanie usług i opłat dodatkowych', value: 'ADDITIONALS_DELETE'}
  ],
  discountsOptions: [
    {label: 'dodawanie rabatu do klienta', value: 'CLIENT_DEAL_ADD'},
    {label: 'dodawanie rabatu do rezerwacji', value: 'RESERVATION_DEAL_ADD'},
    {label: 'dodawanie zniżek do rezerwacji', value: 'RESERVATION_DISCOUNTS_ADD'},
    {label: 'tworzenie rabatów', value: 'DEALS_CREATE'},
    {label: 'edycja rabatów', value: 'DEALS_UPDATE'},
    {label: 'usuwanie rabatów', value: 'DEALS_DELETE'},
    {label: 'tworzenie zniżek', value: 'DISCOUNTS_CREATE'},
    {label: 'edycja zniżek', value: 'DISCOUNTS_UPDATE'},
    {label: 'usuwanie zniżek', value: 'DISCOUNTS_DELETE'},
  ],
  onlineOptions: [
    {label: 'wybór szablonu i konfiguracja kolorystyki', value: 'ONLINE_RESERVATION_UPDATE'},
  ],
  cashOptions: [
    {label: 'rozpoczynanie i kończenie zmiany', value: 'SHIFT_START_AND_END'},
    {label: 'przyjmowanie wpłat', value: 'PAYMENT_CREATE'},
    {label: 'edycja pozycji na dokumentach', value: 'EDIT_DOCUMENT_POSITIONS'},
    {label: 'edycja wpłat', value: 'PAYMENT_EDIT'},
    {label: 'usuwanie wpłat', value: 'PAYMENT_DELETE'},
    {label: 'rozliczanie konta kasjera', value: 'CASHIER_ACCOUNT_SETTLEMENT'},
  ],
  accountingOptions: [
    {label: 'dodawanie konta', value: 'ACCOUNT_CREATE'},
    {label: 'edycja konta', value: 'ACCOUNT_EDIT'},
    {label: 'usuwanie konta', value: 'ACCOUNT_DELETE'},
    {label: 'tworzenie dokumentu', value: 'DOCUMENT_CREATE'},
    {label: 'edycja dokumentu', value: 'DOCUMENT_EDIT'},
    {label: 'usuwanie dokumentu', value: 'DOCUMENT_DELETE'},
  ],
  analyticsOptions: [
    {label: 'wgląd do analiz', value: 'ANALYTICS_READ'}
  ]
}
