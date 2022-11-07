export const RANDOM_USER_API_MOCK_RESPONSE_ONE_RESULT = {
  results: [
    {
      name: { title: "Ms", first: "Marian", last: "Owens" },
      location: {
        street: { number: 9417, name: "Spring St" },
        city: "San Diego",
        state: "Alaska",
        country: "United States",
        postcode: 48460,
        coordinates: { latitude: "88.0532", longitude: "155.9902" },
        timezone: { offset: "-11:00", description: "Midway Island, Samoa" },
      },
      email: "marian.owens@example.com",
      login: {
        uuid: "aad0fcc0-6f86-49ff-bff7-d267dffcd39a",
        username: "heavysnake238",
        password: "w4g8at",
        salt: "0HyJ70S7",
        md5: "30506b02315fac19edb7f65fcf0cbb3d",
        sha1: "d660839344872e3453746b687c425c12e9c3649a",
        sha256:
          "c9088b1195632a2ce0afd7c185a10367c0fb5a366dc1307faa7671f5fd74595b",
      },
      phone: "(997) 825-6223",
      cell: "(801) 362-3012",
      id: { name: "SSN", value: "599-83-9919" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/84.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/84.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/84.jpg",
      },
    },
  ],
  info: { seed: "dcee6c085097cbd6", results: 2, page: 1, version: "1.4" },
}

export const RANDOM_USER_API_MOCK_RESPONSE_TWO_RESULTS = {
  results: [
    {
      name: { title: "Ms", first: "Marian", last: "Owens" },
      location: {
        street: { number: 9417, name: "Spring St" },
        city: "San Diego",
        state: "Alaska",
        country: "United States",
        postcode: 48460,
        coordinates: { latitude: "88.0532", longitude: "155.9902" },
        timezone: { offset: "-11:00", description: "Midway Island, Samoa" },
      },
      email: "marian.owens@example.com",
      login: {
        uuid: "aad0fcc0-6f86-49ff-bff7-d267dffcd39a",
        username: "heavysnake238",
        password: "w4g8at",
        salt: "0HyJ70S7",
        md5: "30506b02315fac19edb7f65fcf0cbb3d",
        sha1: "d660839344872e3453746b687c425c12e9c3649a",
        sha256:
          "c9088b1195632a2ce0afd7c185a10367c0fb5a366dc1307faa7671f5fd74595b",
      },
      phone: "(997) 825-6223",
      cell: "(801) 362-3012",
      id: { name: "SSN", value: "599-83-9919" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/84.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/84.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/84.jpg",
      },
    },
    {
      name: { title: "Mr", first: "Hans-Ludwig", last: "Schmelz" },
      location: {
        street: { number: 2291, name: "Schulstraße" },
        city: "Obertshausen",
        state: "Sachsen",
        country: "Germany",
        postcode: 48006,
        coordinates: { latitude: "-42.0157", longitude: "-90.7528" },
        timezone: { offset: "-9:00", description: "Alaska" },
      },
      email: "hans-ludwig.schmelz@example.com",
      login: {
        uuid: "5c012a36-0238-4ffd-9fe1-f306c13dac60",
        username: "ticklishgoose408",
        password: "prince1",
        salt: "aWtnqXRk",
        md5: "45b257fe962f981ad4cda7df43bddb8d",
        sha1: "efd2aa622a119c477f9f8a5be77116602c063903",
        sha256:
          "5ff32f2d8710f442779b9bbd35fb77596e3664f9c838fd180b9c6c6c95ed5541",
      },
      phone: "0801-2659956",
      cell: "0170-0363830",
      id: { name: "SVNR", value: "57 081096 S 221" },
      picture: {
        large: "https://randomuser.me/api/portraits/men/15.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/15.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
      },
    },
  ],
  info: { seed: "dcee6c085097cbd6", results: 2, page: 1, version: "1.4" },
}

export const EMAIL_REGEX =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i
