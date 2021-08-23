import MeetupList from '../components/meetups/MeetupList'

const MEETUP_DUMMY  = [
  {
    id: 1,
    title: 'First Title Meetup',
    image: 'https://cdn.pixabay.com/photo/2021/07/09/11/18/austria-6398889_960_720.jpg',
    address: 'Some address, 01, Some City',
    description: 'The first meetup'
  },
  {
    id: 2,
    title: 'Second Title Meetup',
    image: 'https://cdn.pixabay.com/photo/2015/03/26/09/48/buildings-690364_960_720.jpg',
    address: 'Other address, 02, Other City',
    description: 'The second meetup'
  }
]

function HomPage () {
  return <MeetupList meetups={MEETUP_DUMMY} />
}

export default HomPage