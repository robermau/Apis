
// https://rickandmortyapi.com/api/character

async function getRandomUser() {

    try {
        const res = await fetch('https://mindicador.cl/api/')
        const data = await res.json()
        console.log(data)
    } catch {

        console.log('error')
    }





}

getRandomUser()

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });