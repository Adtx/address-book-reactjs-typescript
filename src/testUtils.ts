export const EMAIL_REGEX =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i

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

export const RANDOM_USER_API_MOCK_RESPONSE_FIFTY_RESULTS = {
  results: [
    {
      name: {
        title: "Mr",
        first: "Alan",
        last: "Ellis",
      },
      location: {
        street: {
          number: 563,
          name: "Elgin St",
        },
        city: "Tulsa",
        state: "California",
        country: "United States",
        postcode: 31064,
        coordinates: {
          latitude: "89.7801",
          longitude: "-2.9057",
        },
        timezone: {
          offset: "-5:00",
          description: "Eastern Time (US & Canada), Bogota, Lima",
        },
      },
      email: "alan.ellis@example.com",
      login: {
        uuid: "03304e13-19df-4cd9-b4dd-e45991e711ca",
        username: "ticklishswan891",
        password: "domain",
        salt: "gL28UZJ0",
        md5: "7cde71680e38c3aa7d73f023e04f0fe2",
        sha1: "58af1ced0421f26ec876f9ef2dc3b383dc635bbf",
        sha256:
          "cc201c17780ecd732ed7e3e8427225586f13d3b065ab979448030ca8be00e77a",
      },
      phone: "(608) 501-7627",
      cell: "(220) 556-7839",
      id: {
        name: "SSN",
        value: "702-16-3452",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/60.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/60.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Sofie",
        last: "Utvik",
      },
      location: {
        street: {
          number: 1433,
          name: "Jon Smestads vei",
        },
        city: "Fjellstrand",
        state: "Hedmark",
        country: "Norway",
        postcode: "0557",
        coordinates: {
          latitude: "-47.0650",
          longitude: "102.6792",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "sofie.utvik@example.com",
      login: {
        uuid: "131689cd-6eb1-432a-9793-badeca262500",
        username: "whitelion614",
        password: "zhua",
        salt: "bvETkHKB",
        md5: "3245edd092054b7af97d0c32c0fab41c",
        sha1: "c07db1540cc969992143bb8156280b72f42a67b8",
        sha256:
          "e527ea8afe77bc21540bf7cb351bcfbcec28ad5b748615039b8f01ca373bd2aa",
      },
      phone: "55913972",
      cell: "48633470",
      id: {
        name: "FN",
        value: "24107523878",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/86.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/86.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/86.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Lachlan",
        last: "Moore",
      },
      location: {
        street: {
          number: 946,
          name: "Pine Hill Road",
        },
        city: "Invercargill",
        state: "Gisborne",
        country: "New Zealand",
        postcode: 67315,
        coordinates: {
          latitude: "-28.2779",
          longitude: "-2.4934",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      email: "lachlan.moore@example.com",
      login: {
        uuid: "b2897fe8-986e-478f-b5fc-44ea467b081c",
        username: "biggoose804",
        password: "mackie",
        salt: "zlpXaJ0i",
        md5: "21aed2a4c1d35f8ced13e468686b9dfb",
        sha1: "fc6beabe592f28ebf8b5496393c3b511f326ff3b",
        sha256:
          "7bed26000b88ec487fe356937a6b6d4d2662d4241e5b4de99e3de2c29fea810d",
      },
      phone: "(567)-253-3158",
      cell: "(227)-915-0133",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/7.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/7.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/7.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Dominic",
        last: "Bouchard",
      },
      location: {
        street: {
          number: 9495,
          name: "St. Catherine St",
        },
        city: "Vanier",
        state: "Québec",
        country: "Canada",
        postcode: "U2X 2B1",
        coordinates: {
          latitude: "-83.7555",
          longitude: "39.5511",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "dominic.bouchard@example.com",
      login: {
        uuid: "801a53a6-33c0-49f2-825c-72189b495628",
        username: "goldenrabbit502",
        password: "grant",
        salt: "ryrF1Z3G",
        md5: "1046831bfde50280a86bc0b709b2f668",
        sha1: "9f6a88462f4d9c45fc25668d557d4826950d159a",
        sha256:
          "fd84082353c03de0d8719403ce05931b34ab7ec46c44186154775bd56e374d4d",
      },
      phone: "T21 F24-2249",
      cell: "P59 F28-5822",
      id: {
        name: "SIN",
        value: "509575395",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/88.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Charlie",
        last: "Kuhn",
      },
      location: {
        street: {
          number: 133,
          name: "Fincher Rd",
        },
        city: "Mackay",
        state: "Northern Territory",
        country: "Australia",
        postcode: 1872,
        coordinates: {
          latitude: "68.4585",
          longitude: "-91.1953",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "charlie.kuhn@example.com",
      login: {
        uuid: "4cf18125-5164-41bf-9ed1-4648dde865c7",
        username: "angryladybug233",
        password: "citadel",
        salt: "ujS4eHKf",
        md5: "c48fe59e81c52ee104939694fcb36479",
        sha1: "c100c86ed4296ad8e15a743e86f15e6d23b52719",
        sha256:
          "4a88464b0aaa4e087d5430c9fd1a1718ef285d0f0ce6251ee1bf103a16d075a3",
      },
      phone: "06-5219-0163",
      cell: "0419-338-856",
      id: {
        name: "TFN",
        value: "818889506",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/73.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Starodum",
        last: "Drak",
      },
      location: {
        street: {
          number: 9213,
          name: "Samoylovicha",
        },
        city: "Pidgayci",
        state: "Ternopilska",
        country: "Ukraine",
        postcode: 13974,
        coordinates: {
          latitude: "-77.7597",
          longitude: "70.7207",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "starodum.drak@example.com",
      login: {
        uuid: "eb413474-46f9-48e3-8d8e-3308f35a4628",
        username: "silverduck463",
        password: "enjoy",
        salt: "2QDgiMg8",
        md5: "5a7c6ef4d810473d14d8323cf90f1fd6",
        sha1: "a8f5be43b17dca09e1408ceb64b50c851ad4c0ef",
        sha256:
          "d8813251f3a429ab1eff09c2250971486c173b04e3dee82f6c83aa321eb24cc7",
      },
      phone: "(068) N30-0408",
      cell: "(066) V57-6456",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/79.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Terrence",
        last: "Bryant",
      },
      location: {
        street: {
          number: 6548,
          name: "Daisy Dr",
        },
        city: "Dubbo",
        state: "Western Australia",
        country: "Australia",
        postcode: 3631,
        coordinates: {
          latitude: "-80.5042",
          longitude: "150.0845",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "terrence.bryant@example.com",
      login: {
        uuid: "9c85e9c3-e401-4012-8104-84352be18913",
        username: "blackbear796",
        password: "mang",
        salt: "NY01F8jZ",
        md5: "0083098334af3f63489203739a37ee40",
        sha1: "6f45a6d8e960a05894bea9bf6b4cb30f6d3b00ab",
        sha256:
          "b4f1853fb1978fd81f16726e49c2a40d624207fcad0e4b1bb2df7d25fa814415",
      },
      phone: "00-0161-1712",
      cell: "0479-692-450",
      id: {
        name: "TFN",
        value: "153450024",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/70.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/70.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/70.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "John",
        last: "Pierce",
      },
      location: {
        street: {
          number: 9603,
          name: "Plum St",
        },
        city: "Flowermound",
        state: "Connecticut",
        country: "United States",
        postcode: 58524,
        coordinates: {
          latitude: "-88.1160",
          longitude: "-4.2332",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "john.pierce@example.com",
      login: {
        uuid: "24eba942-f03a-452f-95dd-9ac2cddf80a2",
        username: "goldenkoala787",
        password: "420420",
        salt: "OB5p4vqo",
        md5: "2f9ac52fb42947e77373ad579459fb06",
        sha1: "ce3cf22393793f5cbc04381b4aa44165cab35f1c",
        sha256:
          "10d304514845afe71c5f619899cdaf1d2cf1df8827e712f3630d2d2d7a16572c",
      },
      phone: "(452) 438-7564",
      cell: "(537) 371-9226",
      id: {
        name: "SSN",
        value: "498-99-8905",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/34.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Jeremiah",
        last: "Fisher",
      },
      location: {
        street: {
          number: 7413,
          name: "Harrison Ct",
        },
        city: "North Las Vegas",
        state: "Delaware",
        country: "United States",
        postcode: 67826,
        coordinates: {
          latitude: "79.0324",
          longitude: "-148.0660",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "jeremiah.fisher@example.com",
      login: {
        uuid: "d47e3ac0-db71-4291-b5b3-6cdc6850071d",
        username: "happyduck325",
        password: "poiu",
        salt: "Y3BLIjtc",
        md5: "6b7de1b5a74e6120526a107db85c35a5",
        sha1: "2f84fcb21d20d83d364210299bf8574696eb4abb",
        sha256:
          "e86390863b3011e93e56d0fa16e3ec359ec8a8764462f697df05062c5a8a0ef2",
      },
      phone: "(797) 568-7164",
      cell: "(927) 727-2688",
      id: {
        name: "SSN",
        value: "099-55-3622",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/87.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/87.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/87.jpg",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Alejandra",
        last: "Mireles",
      },
      location: {
        street: {
          number: 6312,
          name: "Pasaje Sur Barela",
        },
        city: "Salvatierra",
        state: "Colima",
        country: "Mexico",
        postcode: 64387,
        coordinates: {
          latitude: "-85.2242",
          longitude: "111.5387",
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "alejandra.mireles@example.com",
      login: {
        uuid: "8ba78906-e1ca-425e-aadf-d8f2d920c7eb",
        username: "beautifulbird321",
        password: "zhuo",
        salt: "RzCx8HCD",
        md5: "b27a22d40f386f3715eb10ed76efb457",
        sha1: "f55bc9635ac5010e012941b8f7ed04c4198356c3",
        sha256:
          "f607114e7eb82765ecbb0d332d1a92ca996df82b4bf95570069bad0be174fe8d",
      },
      phone: "(634) 238 7415",
      cell: "(610) 686 1858",
      id: {
        name: "NSS",
        value: "14 02 47 0478 6",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/21.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Ivica",
        last: "Abramović",
      },
      location: {
        street: {
          number: 9759,
          name: "Rusalkina",
        },
        city: "Alibunar",
        state: "Prizren",
        country: "Serbia",
        postcode: 98280,
        coordinates: {
          latitude: "-81.2572",
          longitude: "-165.4347",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      email: "ivica.abramovic@example.com",
      login: {
        uuid: "2a22c24c-fbf3-4681-a956-801375f38b9f",
        username: "crazyfish414",
        password: "july",
        salt: "4wggm827",
        md5: "54d3daddf4cdd534b4bc0c3218f6caf4",
        sha1: "1ac5b3b53e35c3d0172f4390ad754de1f4ca59a1",
        sha256:
          "c5a9899f8359d526aa83eac8f2effbdf5843b2fe556adaa58e5bfa68142e510d",
      },
      phone: "015-6944-283",
      cell: "069-2040-785",
      id: {
        name: "SID",
        value: "048701053",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/38.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/38.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/38.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Warinder",
        last: "Bharanya",
      },
      location: {
        street: {
          number: 5467,
          name: "Lindsay St",
        },
        city: "Thanjavur",
        state: "Jammu and Kashmir",
        country: "India",
        postcode: 96253,
        coordinates: {
          latitude: "23.2754",
          longitude: "-66.3069",
        },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)",
        },
      },
      email: "warinder.bharanya@example.com",
      login: {
        uuid: "28a7e4e5-4305-47c4-8559-344db99774c2",
        username: "heavygorilla764",
        password: "just4fun",
        salt: "rFrdyi3a",
        md5: "5452baade4a802c5dcb25d2a2f712c38",
        sha1: "7622dbc415778e4ee2ae878f14eb6361ec2c23b7",
        sha256:
          "25ec149e897b98c26416b0771d15045fdce121be8d46655dd9dba2dffe859f31",
      },
      phone: "7196904192",
      cell: "7950798389",
      id: {
        name: "UIDAI",
        value: "152428664552",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/44.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Shayan",
        last: "Holtan",
      },
      location: {
        street: {
          number: 9418,
          name: "Arups gate",
        },
        city: "Sande",
        state: "Vestfold",
        country: "Norway",
        postcode: "8480",
        coordinates: {
          latitude: "42.5739",
          longitude: "-116.2162",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "shayan.holtan@example.com",
      login: {
        uuid: "e33a7ede-fde1-48f2-b36b-592ade798240",
        username: "sadswan745",
        password: "met2002",
        salt: "RPMB8BeI",
        md5: "9f0bae50866323c3a20477beb598cd61",
        sha1: "0e3ba91b9f39c8ede631ec3baa6d8b7d927dffb1",
        sha256:
          "676c649fccd61c375bd51dafcb1b81fbe984c0d8d82136238754ad33f6b83498",
      },
      phone: "77950146",
      cell: "92828688",
      id: {
        name: "FN",
        value: "03129947178",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/99.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/99.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/99.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Anaïs",
        last: "Mathieu",
      },
      location: {
        street: {
          number: 6095,
          name: "Place de L'Abbé-Franz-Stock",
        },
        city: "Roubaix",
        state: "Sarthe",
        country: "France",
        postcode: 84364,
        coordinates: {
          latitude: "36.6135",
          longitude: "-29.6487",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "anais.mathieu@example.com",
      login: {
        uuid: "345eeaeb-6acb-41b7-a4cb-3b4addf08652",
        username: "lazydog967",
        password: "jsbach",
        salt: "DvrsZ6G4",
        md5: "b260b6653125713d27eed90121801a49",
        sha1: "83cab0986acb154fd19ce7b8c274a2bfac67f2f8",
        sha256:
          "47db3bb70d89ec8fcbd1eff68b86161cdbf3aeeae9bfe07e5d0f9ea40fd49753",
      },
      phone: "02-74-55-82-35",
      cell: "06-16-10-44-44",
      id: {
        name: "INSEE",
        value: "2900847572005 76",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/12.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/12.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Michael",
        last: "Zhang",
      },
      location: {
        street: {
          number: 9478,
          name: "Walton Street",
        },
        city: "Napier",
        state: "Otago",
        country: "New Zealand",
        postcode: 69810,
        coordinates: {
          latitude: "74.7660",
          longitude: "-145.5912",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "michael.zhang@example.com",
      login: {
        uuid: "91ff894a-449f-4095-baaa-49b676f877f1",
        username: "angryswan205",
        password: "frogman",
        salt: "jQqYO3YC",
        md5: "8082383268072d635b3cae16e3581c7f",
        sha1: "e62900c0bfd1a6bef9ea5516657f4e9bd076b45f",
        sha256:
          "8e43ec274d955cfb3cbdd05d482def9a226e6b58764f646c178809b194b9c739",
      },
      phone: "(759)-689-8369",
      cell: "(945)-283-4986",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/90.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/90.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/90.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Marco",
        last: "Trujillo",
      },
      location: {
        street: {
          number: 6352,
          name: "Privada Sur Puente",
        },
        city: "Epazoyucan",
        state: "Morelos",
        country: "Mexico",
        postcode: 82257,
        coordinates: {
          latitude: "-79.8762",
          longitude: "-91.2200",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "marco.trujillo@example.com",
      login: {
        uuid: "f334635d-b629-430a-aa2d-8e26046c07bd",
        username: "tinyostrich383",
        password: "space",
        salt: "RebI8tmV",
        md5: "0a635fb0e2abab769fcfa8866336f5c4",
        sha1: "84a6af3c1f721740a102fd5976b991479f806a7e",
        sha256:
          "a2d0e4d955afd5a7bf7c793528fd732a3c7f37b4ceb6d3c207f89e083ae997ee",
      },
      phone: "(699) 377 8056",
      cell: "(601) 443 4910",
      id: {
        name: "NSS",
        value: "85 95 30 4382 6",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/14.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Mira",
        last: "Polić",
      },
      location: {
        street: {
          number: 5417,
          name: "Velimira Veke Ilića",
        },
        city: "Srbobran",
        state: "Kolubara",
        country: "Serbia",
        postcode: 98094,
        coordinates: {
          latitude: "33.9273",
          longitude: "119.4880",
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "mira.polic@example.com",
      login: {
        uuid: "7500fb09-fe51-413f-9f74-4572608af773",
        username: "crazysnake642",
        password: "7894",
        salt: "b1V008q2",
        md5: "0532e727e0e4b5ba98364a56929d2ac8",
        sha1: "172a28d7d764554ddd68e60531a92b3dc0244b76",
        sha256:
          "03d2117f06de269c475ed2ecffff90cdc9c2960104cb84d2e042053c932c4759",
      },
      phone: "035-8180-261",
      cell: "065-2648-650",
      id: {
        name: "SID",
        value: "339085454",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/63.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/63.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/63.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Eden",
        last: "Picard",
      },
      location: {
        street: {
          number: 3923,
          name: "Rue de L'Abbé-Grégoire",
        },
        city: "Créteil",
        state: "Haute-Saône",
        country: "France",
        postcode: 17768,
        coordinates: {
          latitude: "54.0535",
          longitude: "-51.4672",
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "eden.picard@example.com",
      login: {
        uuid: "f4061bd8-07cc-4020-9582-f2387e6f4840",
        username: "beautifulkoala843",
        password: "oatmeal",
        salt: "5BClG1Xs",
        md5: "f59d9f58f81c163b8a0cdb870ab767f7",
        sha1: "d6564cfe9031238864c534942498b06a4c8c1b1a",
        sha256:
          "d8b052c2ac060989ec30a2f92403e455b2669b4478b33ec52484e7a84b3203bb",
      },
      phone: "02-86-45-03-32",
      cell: "06-37-28-94-40",
      id: {
        name: "INSEE",
        value: "2740024056439 06",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/87.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/87.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/87.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Adah",
        last: "Acharya",
      },
      location: {
        street: {
          number: 2962,
          name: "Commercial St",
        },
        city: "Davanagere",
        state: "Mizoram",
        country: "India",
        postcode: 14671,
        coordinates: {
          latitude: "-19.0359",
          longitude: "-131.4558",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "adah.acharya@example.com",
      login: {
        uuid: "e0776be7-712e-4af1-b2f3-0f91bee6df28",
        username: "goldencat344",
        password: "spoon",
        salt: "dd0LWaws",
        md5: "d9c0f6a4814776dc9bd92322f6208390",
        sha1: "7af9e4fd9f50831c6858f937365713d95fd95320",
        sha256:
          "d643ab0672d4f6aebd684293c679f44881a9cffd17d7d7c9a92828fc7db925a4",
      },
      phone: "7151375065",
      cell: "7487463538",
      id: {
        name: "UIDAI",
        value: "471023060445",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/60.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Milica",
        last: "Kojić",
      },
      location: {
        street: {
          number: 5177,
          name: "Anastasije Spasić ",
        },
        city: "Golubac",
        state: "Prizren",
        country: "Serbia",
        postcode: 76833,
        coordinates: {
          latitude: "-49.9567",
          longitude: "-29.0557",
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "milica.kojic@example.com",
      login: {
        uuid: "4daa6984-b4d5-42f0-afdb-a97f7199bdbf",
        username: "whiteostrich732",
        password: "maestro",
        salt: "s3gXAMZ2",
        md5: "08e3c67794f0ccd2713315a26b42fb4c",
        sha1: "c4e4597f6b571f762619a77f5a348f06f3b1f09d",
        sha256:
          "60b925d5f59726325e252fb591a1b088364f3d64270172d6ec6568227dd2b4ad",
      },
      phone: "021-2980-239",
      cell: "065-4311-214",
      id: {
        name: "SID",
        value: "818052839",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/72.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Clara",
        last: "Hansen",
      },
      location: {
        street: {
          number: 6201,
          name: "Bjerregårdsvej",
        },
        city: "Lundby",
        state: "Sjælland",
        country: "Denmark",
        postcode: 79434,
        coordinates: {
          latitude: "-37.2997",
          longitude: "177.5151",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "clara.hansen@example.com",
      login: {
        uuid: "bcf91169-d3d4-4cad-90e6-d1a1593cdd75",
        username: "blackwolf722",
        password: "bottle",
        salt: "GckNdpQQ",
        md5: "4e8c8f3633c2862765d1552ad9d329f9",
        sha1: "e6ee87b624bf91dc883ad878ddc138a5acc9fa39",
        sha256:
          "2eaa628028e42ceee8fd03ce630832188ee57ab1762aced8326eb1e391f95fe7",
      },
      phone: "15787386",
      cell: "60310273",
      id: {
        name: "CPR",
        value: "290659-4801",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/10.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/10.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/10.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Ella",
        last: "Perry",
      },
      location: {
        street: {
          number: 6387,
          name: "Church Road",
        },
        city: "Sunderland",
        state: "Hertfordshire",
        country: "United Kingdom",
        postcode: "V8S 1ST",
        coordinates: {
          latitude: "-37.8492",
          longitude: "-73.9047",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "ella.perry@example.com",
      login: {
        uuid: "de8e782f-c023-4c69-8e35-92a3077776c8",
        username: "lazywolf809",
        password: "emmanuel",
        salt: "kR1lTJRv",
        md5: "5131a74e9be8657be8351bc94208b5a7",
        sha1: "0186cc44906fecc8a6ae46f08580db07853b2151",
        sha256:
          "d178ae5962f3e5170df15a800d319d0e197a20e37a99dd9b1f6ab017b35c92bf",
      },
      phone: "0101 315 8068",
      cell: "07075 297322",
      id: {
        name: "NINO",
        value: "YE 11 58 39 K",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/2.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Gabrielle",
        last: "Jean-Baptiste",
      },
      location: {
        street: {
          number: 4520,
          name: "St. Catherine St",
        },
        city: "Lumsden",
        state: "Northwest Territories",
        country: "Canada",
        postcode: "Y9T 9W0",
        coordinates: {
          latitude: "36.8818",
          longitude: "-100.4610",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "gabrielle.jean-baptiste@example.com",
      login: {
        uuid: "118c1cff-ff79-4a2a-8cae-d750d198ec8f",
        username: "ticklishlion368",
        password: "mantle",
        salt: "9wzGuYJO",
        md5: "26192633ed0d9694339a5822549ac8cf",
        sha1: "ccce098d10d51a214de5d369eca194345f7aea30",
        sha256:
          "b9bb30497534a8a7e71852367a6a089adb3b9c2828d6aae140e24a768dc854d3",
      },
      phone: "P45 F76-1325",
      cell: "C97 D77-7611",
      id: {
        name: "SIN",
        value: "485455471",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/67.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/67.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Viktorija",
        last: "Zelenović",
      },
      location: {
        street: {
          number: 1473,
          name: "Cetinjska",
        },
        city: "Dimitrovgrad",
        state: "Kosovska Mitrovica",
        country: "Serbia",
        postcode: 31491,
        coordinates: {
          latitude: "32.1246",
          longitude: "127.0869",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "viktorija.zelenovic@example.com",
      login: {
        uuid: "fc5aff79-3c67-4fda-90ae-dad48cb108f4",
        username: "bluelion984",
        password: "usnavy",
        salt: "bFAxWk5A",
        md5: "a4a23307a2b89cce66f6bd238206749a",
        sha1: "710c86fe5667f4f2281da9b01565ef823e79ae6b",
        sha256:
          "5a8f123801585452854a0df22a312a7fdc81751b47ae49dd3e09639ab7c8604a",
      },
      phone: "025-2749-742",
      cell: "060-6782-451",
      id: {
        name: "SID",
        value: "312119203",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/0.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Abdelmajid",
        last: "Aksu",
      },
      location: {
        street: {
          number: 7153,
          name: "Ceresplein",
        },
        city: "Tjalleberd",
        state: "Noord-Brabant",
        country: "Netherlands",
        postcode: "7923 RW",
        coordinates: {
          latitude: "-53.3635",
          longitude: "95.3972",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "abdelmajid.aksu@example.com",
      login: {
        uuid: "dea5f52e-f5cb-4d08-b127-657f10d8e850",
        username: "purplebear262",
        password: "fusion",
        salt: "MtRHuMrS",
        md5: "02477775db7087a09d6b7223ed9af443",
        sha1: "ce40a00190340e483f95522686eab18735b33da9",
        sha256:
          "fe7bc2ab1d53deaca1b8ecbc671b69e3e80f1bb5d93113c5ceacd5081e3437e2",
      },
      phone: "(0634) 709098",
      cell: "(06) 47656477",
      id: {
        name: "BSN",
        value: "53509769",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/2.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Christian",
        last: "Sørensen",
      },
      location: {
        street: {
          number: 2371,
          name: "Markskellet",
        },
        city: "København N",
        state: "Hovedstaden",
        country: "Denmark",
        postcode: 15455,
        coordinates: {
          latitude: "-2.5990",
          longitude: "-65.9101",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "christian.sorensen@example.com",
      login: {
        uuid: "c3adb98d-78ec-42f0-9cff-f4d04d9deac9",
        username: "redpanda814",
        password: "iawgk2",
        salt: "AciXB0yA",
        md5: "edaaf10bce073c97e3fd3fb2ebb36fc0",
        sha1: "01f764bde962caf0ed223d405977d5763a3134ab",
        sha256:
          "8282625eadfcb45e175383a13fabaf84c74891d6670284788b200470961462ec",
      },
      phone: "48835936",
      cell: "84203731",
      id: {
        name: "CPR",
        value: "030766-4181",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/11.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/11.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Gorana",
        last: "Babić",
      },
      location: {
        street: {
          number: 5552,
          name: "Trinaestog Septembra",
        },
        city: "Kuršumlija",
        state: "North Banat",
        country: "Serbia",
        postcode: 29230,
        coordinates: {
          latitude: "62.4220",
          longitude: "-108.5419",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "gorana.babic@example.com",
      login: {
        uuid: "d049283a-7da8-4156-b1e9-6966d4dda684",
        username: "reddog362",
        password: "abraham",
        salt: "1NNlWkJ0",
        md5: "51d4626dab4405024103410d5d54d43d",
        sha1: "8e6bd8227c650af7945b2b90008e9b82b33703ba",
        sha256:
          "03c82dd18cb892c1a7cdafa19bd73defbaff587159401d468b7a992fe3b837de",
      },
      phone: "036-3621-457",
      cell: "065-8107-683",
      id: {
        name: "SID",
        value: "614420977",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/55.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/55.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/55.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Jayden",
        last: "Soto",
      },
      location: {
        street: {
          number: 1831,
          name: "New Road",
        },
        city: "Chichester",
        state: "Lincolnshire",
        country: "United Kingdom",
        postcode: "EK1M 9GN",
        coordinates: {
          latitude: "-13.7031",
          longitude: "-148.9254",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "jayden.soto@example.com",
      login: {
        uuid: "e7738dc4-a06d-48ce-9da6-915535b4ef76",
        username: "blueswan750",
        password: "clayton",
        salt: "UF96AAo7",
        md5: "147799bc30bc1612fc141f166006da5d",
        sha1: "89a546483c42a5bb8b81852e7af593349e8e4dd2",
        sha256:
          "9f699230c21bf14169eb606d72306e9e8e81c91c681341cd0f32249aaec44184",
      },
      phone: "017687 99542",
      cell: "07921 044511",
      id: {
        name: "NINO",
        value: "HN 14 54 19 B",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/14.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Georg",
        last: "Hatteland",
      },
      location: {
        street: {
          number: 5775,
          name: "Mosekollen",
        },
        city: "Koppang",
        state: "Sør-Trøndelag",
        country: "Norway",
        postcode: "6856",
        coordinates: {
          latitude: "-72.4257",
          longitude: "-83.0711",
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "georg.hatteland@example.com",
      login: {
        uuid: "608a65e8-a005-4643-ba00-0f9c054d5240",
        username: "bluezebra502",
        password: "velvet",
        salt: "ADjpzhcq",
        md5: "f2d50ffc380a55ce6316a26b550203e3",
        sha1: "963acbac6a6c780cddd1e9f380e35e897e63af92",
        sha256:
          "f24f34b6774e142caf876e84a67bf9f3659a58f86ce61c0642d775bf3fa1329f",
      },
      phone: "33094031",
      cell: "94377725",
      id: {
        name: "FN",
        value: "09129911171",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/16.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Florence",
        last: "Gardner",
      },
      location: {
        street: {
          number: 90,
          name: "Church Lane",
        },
        city: "Stoke-on-Trent",
        state: "Devon",
        country: "United Kingdom",
        postcode: "BC3 3JP",
        coordinates: {
          latitude: "2.5467",
          longitude: "43.6652",
        },
        timezone: {
          offset: "+5:45",
          description: "Kathmandu",
        },
      },
      email: "florence.gardner@example.com",
      login: {
        uuid: "11824b80-b816-4dc6-9586-d7b204409067",
        username: "blackgorilla947",
        password: "butler",
        salt: "qx73gFIn",
        md5: "8851551a59c246bb975ceafa45fd4942",
        sha1: "2eb22d91f51aed39aab982b4d75d607a8b57f2ef",
        sha256:
          "18660cfc1e9b0f0fb3e77f242b287bffd6df701d9591ccb831be3770834af1b2",
      },
      phone: "015242 21350",
      cell: "07388 016178",
      id: {
        name: "NINO",
        value: "AT 83 65 46 X",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/40.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Gustavo",
        last: "Esparza",
      },
      location: {
        street: {
          number: 9495,
          name: "Diagonal Meza",
        },
        city: "Teñhe",
        state: "Nayarit",
        country: "Mexico",
        postcode: 44769,
        coordinates: {
          latitude: "5.7817",
          longitude: "113.0391",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "gustavo.esparza@example.com",
      login: {
        uuid: "985c7804-ab4e-41c6-add9-eabb9b724fe0",
        username: "happypeacock323",
        password: "saleen",
        salt: "XOHkKNad",
        md5: "07f1de9bacfd0e6a69a9d7c7351f3f20",
        sha1: "fd32c601c013eed5f9e11df029b28c3fab601cb6",
        sha256:
          "bbaeca24a0b7b23a20afca50563f40c4f1a8d1133a6fe8c8b823034a780b8071",
      },
      phone: "(671) 408 5589",
      cell: "(652) 738 9533",
      id: {
        name: "NSS",
        value: "25 85 92 4480 4",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/56.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/56.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/56.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Max",
        last: "Garcia",
      },
      location: {
        street: {
          number: 4896,
          name: "College St",
        },
        city: "Surprise",
        state: "Colorado",
        country: "United States",
        postcode: 45762,
        coordinates: {
          latitude: "-39.2798",
          longitude: "-59.9988",
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok",
        },
      },
      email: "max.garcia@example.com",
      login: {
        uuid: "f9652232-6c2e-4194-94f3-932c1907bc80",
        username: "beautifulbear466",
        password: "tarheels",
        salt: "rFtsyWfh",
        md5: "e05a3d261d54ce064b4aae5f87d19a22",
        sha1: "8d678956132978444bcf4fc216ade2a3e3024684",
        sha256:
          "5dd8e93054427cbb6351d83a775dcda5d27402f015b4fff07a1f072f4a05d388",
      },
      phone: "(646) 536-9246",
      cell: "(731) 828-1857",
      id: {
        name: "SSN",
        value: "559-91-8410",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/20.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/20.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Emile",
        last: "Adam",
      },
      location: {
        street: {
          number: 2425,
          name: "Rue des Chartreux",
        },
        city: "Boulogne-Billancourt",
        state: "Lozère",
        country: "France",
        postcode: 22004,
        coordinates: {
          latitude: "-58.9625",
          longitude: "50.6125",
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin",
        },
      },
      email: "emile.adam@example.com",
      login: {
        uuid: "04bb22eb-4c12-49ce-84c9-a16103b57d11",
        username: "blackdog362",
        password: "winter",
        salt: "HB3stSAi",
        md5: "33f6b09954e0af3532e86841e9142900",
        sha1: "ebca067a3950b55d375f9c9e8a9b76df2c90faa1",
        sha256:
          "c13f4865062755f59135985fc97b4da698fd04920014fecb4036893b63b28219",
      },
      phone: "05-74-75-17-29",
      cell: "06-23-72-86-83",
      id: {
        name: "INSEE",
        value: "1740012734816 33",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/73.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/73.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/73.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Malou",
        last: "Rasmussen",
      },
      location: {
        street: {
          number: 1699,
          name: "Tåstrupvej",
        },
        city: "Horsens",
        state: "Syddanmark",
        country: "Denmark",
        postcode: 56359,
        coordinates: {
          latitude: "-6.8217",
          longitude: "103.0998",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "malou.rasmussen@example.com",
      login: {
        uuid: "5bf4a2d7-d2bd-42b9-b558-fc6d0a7d2d74",
        username: "angrybear386",
        password: "oatmeal",
        salt: "ew7HZApS",
        md5: "46ac09c8ca642b6c9a72d5a0f53e2f1e",
        sha1: "9db95e1835417372c83bd1494719ef8567a2f220",
        sha256:
          "639048e2b207dc2656ce1e7d3c15ccce651d51120d6aba6b3115c29c7617e057",
      },
      phone: "03728435",
      cell: "18909158",
      id: {
        name: "CPR",
        value: "250670-9787",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/59.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/59.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/59.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Elisa",
        last: "Dueñas",
      },
      location: {
        street: {
          number: 2951,
          name: "Continuación Zamora",
        },
        city: "Tambaca",
        state: "Guerrero",
        country: "Mexico",
        postcode: 44220,
        coordinates: {
          latitude: "20.8180",
          longitude: "141.1658",
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska",
        },
      },
      email: "elisa.duenas@example.com",
      login: {
        uuid: "6957245f-fad0-4669-88ff-0538d09c19dd",
        username: "beautifulelephant186",
        password: "saratoga",
        salt: "3UDIXv0f",
        md5: "1d531c964669e4c25c710394ee7b59fd",
        sha1: "5455f8eb58b12febcdc69a4c6e020b6f72cb4f10",
        sha256:
          "2eb68bef66c9b4261ed5d932a8c56a1818f9092822ece140f7ab469b03d5ca58",
      },
      phone: "(689) 348 5033",
      cell: "(606) 867 9675",
      id: {
        name: "NSS",
        value: "29 60 12 8752 9",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/33.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/33.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/33.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Carter",
        last: "Johnson",
      },
      location: {
        street: {
          number: 6803,
          name: "Emerson Street",
        },
        city: "Auckland",
        state: "Waikato",
        country: "New Zealand",
        postcode: 94730,
        coordinates: {
          latitude: "54.2097",
          longitude: "26.2051",
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska",
        },
      },
      email: "carter.johnson@example.com",
      login: {
        uuid: "16289c3d-6fb6-4c3f-9c46-86bfa1d77e2c",
        username: "organicfrog328",
        password: "mang",
        salt: "U7Xekwqy",
        md5: "df439a2193fd78b23400327639d8ef0d",
        sha1: "b936267d42c0d69d3bb7c875ca480d3603a55e5d",
        sha256:
          "513ebb082d046b57a6e31a4d0217f2aff47489eacbb30bbd9dbfacaa8e5ff3f2",
      },
      phone: "(229)-789-0344",
      cell: "(278)-144-9370",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/68.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/68.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/68.jpg",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Molly",
        last: "Lowe",
      },
      location: {
        street: {
          number: 1362,
          name: "New Street",
        },
        city: "Bandon",
        state: "Clare",
        country: "Ireland",
        postcode: 19068,
        coordinates: {
          latitude: "24.6587",
          longitude: "-102.9295",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "molly.lowe@example.com",
      login: {
        uuid: "c5a3790e-2841-424c-b162-a34490ef3337",
        username: "tinytiger952",
        password: "rrrrr",
        salt: "dzB2GYbc",
        md5: "68cfc28211486704dcc11ca194bcaa60",
        sha1: "e4a94c558070a0b88471a229e9e64ccb578fd445",
        sha256:
          "1ddadb242961a12c327b6d9fbea842150cff5382d007bee3aa0f0ab7c4409e4f",
      },
      phone: "071-626-5492",
      cell: "081-963-9216",
      id: {
        name: "PPS",
        value: "6722418T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/19.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "پارمیس",
        last: "سالاری",
      },
      location: {
        street: {
          number: 2335,
          name: "نبرد جنوبی",
        },
        city: "دزفول",
        state: "کرمان",
        country: "Iran",
        postcode: 11120,
        coordinates: {
          latitude: "-19.4802",
          longitude: "133.9684",
        },
        timezone: {
          offset: "+6:00",
          description: "Almaty, Dhaka, Colombo",
        },
      },
      email: "prmys.slry@example.com",
      login: {
        uuid: "520c83fb-5337-4fd5-9e0b-c9c5b3365a30",
        username: "beautifulladybug109",
        password: "bozo",
        salt: "m2g4OuKK",
        md5: "45ce5535b9df630d7187a85ff5820c9a",
        sha1: "c61f436be6f875eeaf03535bfbc9ad6bb18ae11b",
        sha256:
          "47710e1810fd468285ff656cbb24531029f321964e6795d7f8fd62e4a524a383",
      },
      phone: "016-07771019",
      cell: "0996-478-9218",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/89.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/89.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/89.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Julie",
        last: "Bryant",
      },
      location: {
        street: {
          number: 9536,
          name: "Manchester Road",
        },
        city: "Inverness",
        state: "Somerset",
        country: "United Kingdom",
        postcode: "NN8 2YA",
        coordinates: {
          latitude: "32.5057",
          longitude: "-96.5966",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "julie.bryant@example.com",
      login: {
        uuid: "33c48bc7-cddb-42ab-ae22-19e5e61e76a9",
        username: "purplemouse405",
        password: "winona",
        salt: "wwsomeAB",
        md5: "1556bf5fbe9dfe2fbe0d8568fcc3292e",
        sha1: "f7c4d45fc71b08744f9307f78d4436b5b16384e8",
        sha256:
          "bc4308c3f6f142401faf14429befefd2995a9da13cbe613f8bd96affead97d4e",
      },
      phone: "015394 06885",
      cell: "07368 292326",
      id: {
        name: "NINO",
        value: "HS 50 47 26 R",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/19.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Margarita",
        last: "Trujillo",
      },
      location: {
        street: {
          number: 7394,
          name: "Andador Indonesia",
        },
        city: "San Pedro Atlapulco",
        state: "Coahuila",
        country: "Mexico",
        postcode: 72938,
        coordinates: {
          latitude: "-8.6320",
          longitude: "122.1844",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "margarita.trujillo@example.com",
      login: {
        uuid: "86ef5685-c9a9-4d94-8fb9-783b935491fb",
        username: "tinysnake469",
        password: "gonzo",
        salt: "RvXo6rfl",
        md5: "f696404fd1580cc4998edd1bdd24fb8e",
        sha1: "1bf4232050bdedc04d28404bbe820779f5ba10bc",
        sha256:
          "621376f706f81365f21724f21562b7e94a0a6aa2ea880208575cab968ec0dbd4",
      },
      phone: "(650) 626 1532",
      cell: "(689) 914 9129",
      id: {
        name: "NSS",
        value: "65 88 79 4665 7",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/29.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Janet",
        last: "Jacobs",
      },
      location: {
        street: {
          number: 7772,
          name: "Hillcrest Rd",
        },
        city: "Greensboro",
        state: "Louisiana",
        country: "United States",
        postcode: 42655,
        coordinates: {
          latitude: "-62.6100",
          longitude: "89.2426",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      email: "janet.jacobs@example.com",
      login: {
        uuid: "bca237d8-7896-4b3f-bbee-0deefa922343",
        username: "brownduck594",
        password: "babe",
        salt: "6wlgGabS",
        md5: "b92150648000f32e20ece462468f0668",
        sha1: "14d64b17fdb542ad7cce606939f4989fa5cabb68",
        sha256:
          "5337f18094f40c575e25f3498c6756b506a55605172baf10a8d67abca47d6704",
      },
      phone: "(309) 688-3574",
      cell: "(499) 639-8851",
      id: {
        name: "SSN",
        value: "166-79-0234",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/42.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/42.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Cecilie",
        last: "Thomsen",
      },
      location: {
        street: {
          number: 9808,
          name: "Parallelvej",
        },
        city: "Silkeboeg",
        state: "Danmark",
        country: "Denmark",
        postcode: 95188,
        coordinates: {
          latitude: "-87.0004",
          longitude: "5.4635",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "cecilie.thomsen@example.com",
      login: {
        uuid: "65c2e6e3-8f4d-40a8-bc7e-b731acd37915",
        username: "orangeladybug242",
        password: "cory",
        salt: "myKdW0zR",
        md5: "206151f126e39de05fdde10f7907c6d2",
        sha1: "229ead87cf64e43ecf19977e8414ed0ca0ec42a0",
        sha256:
          "92507020f7fefa8831636a4c216c13e83ce15e1e850bbb61b5b800d726c841fe",
      },
      phone: "05005560",
      cell: "37940410",
      id: {
        name: "CPR",
        value: "010592-5605",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/36.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/36.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/36.jpg",
      },
    },
    {
      name: {
        title: "Miss",
        first: "Melissa",
        last: "Robertson",
      },
      location: {
        street: {
          number: 56,
          name: "Pearse Street",
        },
        city: "Clonmel",
        state: "Waterford",
        country: "Ireland",
        postcode: 28055,
        coordinates: {
          latitude: "-66.5250",
          longitude: "-80.5971",
        },
        timezone: {
          offset: "+5:45",
          description: "Kathmandu",
        },
      },
      email: "melissa.robertson@example.com",
      login: {
        uuid: "22e305b0-00db-44d9-b95b-8594b6902f10",
        username: "smallmeercat909",
        password: "milfnew",
        salt: "aKKne6Qg",
        md5: "54c62e14067c58253e5ac694678b64fe",
        sha1: "e20ffbfe65ec881e44fa1717893ff8ece01abe65",
        sha256:
          "d6ee408060663479a16b16b0e79f9272a88fa12c26651c8a83aa0639207cbf1b",
      },
      phone: "011-910-7605",
      cell: "081-687-2118",
      id: {
        name: "PPS",
        value: "9827447T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/9.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Timeo",
        last: "Joly",
      },
      location: {
        street: {
          number: 9870,
          name: "Place de L'Abbé-Franz-Stock",
        },
        city: "Roubaix",
        state: "Gironde",
        country: "France",
        postcode: 40264,
        coordinates: {
          latitude: "50.5519",
          longitude: "121.7075",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "timeo.joly@example.com",
      login: {
        uuid: "248f670b-66b1-4f0f-8f7b-a8a7cb8680eb",
        username: "ticklishgorilla101",
        password: "guitar1",
        salt: "nPSz0ivb",
        md5: "a309645f7966272358f54c5fc3cb4782",
        sha1: "b7e811e9409db9be97b44eb98ca2426d0f032b00",
        sha256:
          "7e91b50f3984fdd93daa2b5e21c81c1f586ae364ccbedd7f3611568fba490d2a",
      },
      phone: "05-37-30-61-38",
      cell: "06-10-35-04-68",
      id: {
        name: "INSEE",
        value: "1830999798486 65",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/46.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/46.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/46.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Myrtle",
        last: "Harvey",
      },
      location: {
        street: {
          number: 1536,
          name: "Shady Ln Dr",
        },
        city: "Long Beach",
        state: "Georgia",
        country: "United States",
        postcode: 90179,
        coordinates: {
          latitude: "22.5056",
          longitude: "158.9517",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "myrtle.harvey@example.com",
      login: {
        uuid: "bf35ae46-3ea3-4862-8602-c6f667bbc6a1",
        username: "goldendog825",
        password: "luis",
        salt: "YASBe8TW",
        md5: "95f7c4fe917e0969eb31068a43314a20",
        sha1: "4468edf4fb78dc16b63d53f6722c6d1d5cd5f726",
        sha256:
          "a372e4ad3d051b98299f18b3399424a4a2db4423a45319bfd259604821951d8f",
      },
      phone: "(297) 242-8579",
      cell: "(293) 903-3288",
      id: {
        name: "SSN",
        value: "686-20-2832",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/29.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Jerry",
        last: "Cooper",
      },
      location: {
        street: {
          number: 8939,
          name: "South Street",
        },
        city: "Clane",
        state: "Longford",
        country: "Ireland",
        postcode: 51184,
        coordinates: {
          latitude: "-7.1701",
          longitude: "115.4459",
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "jerry.cooper@example.com",
      login: {
        uuid: "e59f59d7-416c-4626-ac3d-a403d8d663da",
        username: "sadfrog933",
        password: "plum",
        salt: "o7XwB3Aq",
        md5: "661fbf1c4122d221be452f73c50db20f",
        sha1: "4a2b251a91901f12715a2c4dfa2917cfa6ae66d2",
        sha256:
          "71b94c75fd7df82cb277c80726111d0d43bac50c9789e42d60612f5eb52b8a63",
      },
      phone: "031-249-8992",
      cell: "081-797-8471",
      id: {
        name: "PPS",
        value: "8418986T",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/71.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Lyubislava",
        last: "Gomonay",
      },
      location: {
        street: {
          number: 2977,
          name: "Bulvar Praci",
        },
        city: "Rivne",
        state: "Zakarpatska",
        country: "Ukraine",
        postcode: 97908,
        coordinates: {
          latitude: "26.0031",
          longitude: "-111.6502",
        },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)",
        },
      },
      email: "lyubislava.gomonay@example.com",
      login: {
        uuid: "c29f1a24-9a9e-4a5a-8278-c8c20cad6926",
        username: "yellowwolf916",
        password: "sabrina1",
        salt: "Fjy2YHDa",
        md5: "7e665e5e2ce18f8b4a4960d023b9d451",
        sha1: "513406ad0407d4bcedaaa27c885519d9391eeed9",
        sha256:
          "aa6ff63ac6972cbea0576214800e9e7aafbd79a7e03bfc1b1e6917fd72dbf0a1",
      },
      phone: "(098) D73-9011",
      cell: "(068) C79-3981",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/11.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/11.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Jacob",
        last: "Ma",
      },
      location: {
        street: {
          number: 5717,
          name: "Peel St",
        },
        city: "Jasper",
        state: "Alberta",
        country: "Canada",
        postcode: "X4W 2I6",
        coordinates: {
          latitude: "-12.6606",
          longitude: "-87.0953",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "jacob.ma@example.com",
      login: {
        uuid: "0fcb617d-f273-492c-8fe6-63f33ebf520b",
        username: "bigostrich354",
        password: "shadows",
        salt: "6dEDjwEz",
        md5: "e3650baa5f944b4c5f06e985f3144bdf",
        sha1: "e6207b9dc38cf8a5c2072cf253567c4f14d0ac48",
        sha256:
          "ededa0b9c7619aa637ecaad98853c10df3675ff4236bbdc11ade3b818a0714ea",
      },
      phone: "S89 Z69-7650",
      cell: "J39 H38-4571",
      id: {
        name: "SIN",
        value: "437414725",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/33.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/33.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Kaya",
        last: "Samancı",
      },
      location: {
        street: {
          number: 6294,
          name: "Necatibey Cd",
        },
        city: "Konya",
        state: "Hatay",
        country: "Turkey",
        postcode: 10297,
        coordinates: {
          latitude: "-19.9182",
          longitude: "-165.7306",
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta",
        },
      },
      email: "kaya.samanci@example.com",
      login: {
        uuid: "654df2f6-ead4-4628-b56c-ca311d8b4084",
        username: "bluemeercat360",
        password: "beatles1",
        salt: "KiQqFUN7",
        md5: "8e779f92aba48f4e99302d567cbde2ba",
        sha1: "69b51b608f5f5906e35fce8ebfa8d75e39a5f746",
        sha256:
          "52be91323f95ea186c41fc55f6f18b868af8726bf01b1f87d744cece678150a2",
      },
      phone: "(061)-106-3372",
      cell: "(813)-528-5937",
      id: {
        name: "",
        value: null,
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/91.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/91.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Zackary",
        last: "Gauthier",
      },
      location: {
        street: {
          number: 2797,
          name: "Arctic Way",
        },
        city: "St. Antoine",
        state: "Yukon",
        country: "Canada",
        postcode: "X4U 5R1",
        coordinates: {
          latitude: "-20.1386",
          longitude: "-120.2411",
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin",
        },
      },
      email: "zackary.gauthier@example.com",
      login: {
        uuid: "f2ca1198-29f0-4b69-9883-3c2feb01f457",
        username: "bigcat370",
        password: "pepito",
        salt: "BaxV7QL6",
        md5: "0f0b0b1ba3d765cedaa53baf1f99f656",
        sha1: "ea068bede749bb84bc5eb51f3d518dd08c191c72",
        sha256:
          "8aa0a38d909d6cecc441a51481bbcd5e66f8dd4edb195776ea97d5151d55f156",
      },
      phone: "F13 A75-9914",
      cell: "W05 Q62-5805",
      id: {
        name: "SIN",
        value: "571541168",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/66.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/66.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/66.jpg",
      },
    },
  ],
  info: {
    seed: "b87a080a4699e267",
    results: 50,
    page: 1,
    version: "1.4",
  },
}
