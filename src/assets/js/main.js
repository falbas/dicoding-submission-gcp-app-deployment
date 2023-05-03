const dataPengalaman = [
  {
    title: 'Curriculum Core Team',
    place: 'Gunadarna I/O',
    time: 'Sep 2021 - Sekarang',
    activities: [
      'Mengikuti lomba competitive programming',
      'Membuat materi kurikulum untuk Weekly Class',
      'Membawakan materi kurikulum untuk Weekly Class',
      'Membuat frontend website Gunadarma I/O',
    ],
  },
  {
    title: 'QA Tester Intern',
    place: 'Paragon Technology And Innovation',
    time: 'Mar 2022 - Sep 2022',
    activities: [
      'Manual testing',
      'Testing aplikasi web dengan automation tools',
      'Testing aplikasi mobile dengan automation tools',
      'Membuat dokumentasi testing',
    ],
  },
  {
    title: 'Asisten Lab',
    place: 'Lembaga Pengembangan Komputerisasi Universitas Gunadarma',
    time: 'Okt 2021 - Sep 2022',
    activities: [
      'Membantu tutor membawakan materi',
      'Membackup tutor jika berhalangan hadir',
      'Menilai tugas praktikan',
    ],
  },
]

const dataPendidikan = [
  {
    school: 'Universitas Gunadarma',
    study: 'S1 Teknik Informatika',
    time: '2020 - Sekarang',
    activities: [
      'Asisten Lembaga Pengembangan Komputerisasi Universitas Gunadarma',
      'Core Team Curriculum Gunadarna I/O Community',
      'Magang mandiri di Paragon Technology And Innovation',
      'Mengikuti Matching Fund 2022 MBKM',
      'Mengikuti lomba competitive programming',
      'Mengikuti lomba web design',
      'Mengikuti training Cisco Network Academy',
    ],
  },
  {
    school: 'SMKN 1 Jakarta',
    study: 'Teknik Komputer dan Jaringan',
    time: '2017 - 2020',
    activities: [
      'Mengikuti Lomba Kompetensi Siswa (LKS) tingkat Provinsi',
      'Mengikuti sertifikasi profesi di P2KPTK',
      'Programmer dalam projek Online Shop dengan Laravel',
      'Programmer dalam lomba membuat game dengan Unity',
    ],
  },
]

const dataKeterampilan = [
  {
    title: 'FE Web Developer',
    skills: [
      'ReactJS', 'NextJS', 'Bootstrap', 'Tailwind'
    ]
  },
  {
    title: 'BE Web Developer',
    skills: [
      'Firebase', 'HapiJS'
    ]
  },
  {
    title: 'QA Tester',
    skills: [
      'Selenium', 'Cypress', 'Playwright'
    ]
  }
]

const ePengalaman = document.querySelector('#pengalaman')
dataPengalaman.forEach((pengalaman) => {
  let itemPengalaman = document.createElement('div')
  itemPengalaman.innerHTML += `<h3>${pengalaman.title}</h3>`
  itemPengalaman.innerHTML += `<h4>${pengalaman.place}</h4>`
  itemPengalaman.innerHTML += `<h5>${pengalaman.time}</h4>`

  let itemActivities = document.createElement('ul')
  pengalaman.activities.forEach((activity) => {
    itemActivities.innerHTML += `<li>${activity}</li>`
  })
  itemPengalaman.appendChild(itemActivities)

  ePengalaman.appendChild(itemPengalaman)
})

const ePendidikan = document.querySelector('#pendidikan')
dataPendidikan.forEach((pendidikan) => {
  let itemPendidikan = document.createElement('div')
  itemPendidikan.innerHTML += `<h3>${pendidikan.school}</h3>`
  itemPendidikan.innerHTML += `<h4>${pendidikan.study}</h4>`
  itemPendidikan.innerHTML += `<h5>${pendidikan.time}</h5>`

  let itemActivities = document.createElement('ul')
  pendidikan.activities.forEach((activity) => {
    itemActivities.innerHTML += `<li>${activity}</li>`
  })
  itemPendidikan.appendChild(itemActivities)

  ePendidikan.appendChild(itemPendidikan)
})

const eKeterampilan = document.querySelector('#keterampilan')
dataKeterampilan.forEach((keterampilan) => {
  let itemKeterampilan = document.createElement('div')
  itemKeterampilan.innerHTML += `<h3>${keterampilan.title}</h3>`

  let itemSkills = document.createElement('ul')
  keterampilan.skills.forEach((skill) => {
    itemSkills.innerHTML += `<li>${skill}</li>`
  })
  itemKeterampilan.appendChild(itemSkills)

  eKeterampilan.appendChild(itemKeterampilan)
})

function toggleElement(tabClick) {
  const activeTab = document.querySelector('.active-tab')
  activeTab.classList.remove('active-tab')
  activeTab.classList.add('hidden')

  const eTab = document.querySelector('#'+tabClick)
  eTab.classList.add('active-tab')
  eTab.classList.remove('hidden')
}